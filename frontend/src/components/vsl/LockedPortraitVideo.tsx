"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Pause, Play, RotateCcw, Volume2 } from "lucide-react";
import { useVslWatch } from "./VslWatchContext";

/** Folga para buffer / clock do browser (s). */
const SLACK_SEC = 0.45;

/** Verdade se o foco está em campo editável (não bloquear setas/teclas). */
function targetIsEditable(target: EventTarget | null): boolean {
    if (!(target instanceof HTMLElement)) return false;
    const el = target;
    const tag = el.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return true;
    if (el.isContentEditable) return true;
    return el.closest("input, textarea, select, [contenteditable='true']") !== null;
}

const SEEK_KEY_CODES = new Set([
    "ArrowLeft",
    "ArrowRight",
    "Home",
    "End",
    "PageUp",
    "PageDown",
    "MediaTrackNext",
    "MediaTrackPrevious",
    "MediaFastForward",
    "MediaRewind",
]);

/** Atalhos comuns de players (YouTube etc.). */
function isPlayerSeekShortcut(e: KeyboardEvent): boolean {
    if (SEEK_KEY_CODES.has(e.code)) return true;
    if ((e.code === "KeyJ" || e.code === "KeyL") && !e.metaKey && !e.ctrlKey && !e.altKey) return true;
    if ((e.code === "Comma" || e.code === "Period") && e.shiftKey) return true;
    return false;
}

type LockedPortraitVideoProps = {
    src: string;
};

/**
 * VSL linear: máximo reforço possível **no browser** (sem DRM).
 * O arquivo ainda existe na rede/aparelho — quem é muito avançado pode capturar;
 * para manipulação casual (UI, teclas, PiP, velocidade, scrubber) o atrito é alto.
 */
export function LockedPortraitVideo({ src }: LockedPortraitVideoProps) {
    const { addWatchedSeconds } = useVslWatch();
    const videoRef = useRef<HTMLVideoElement>(null);
    const maxWatchedRef = useRef(0);
    const [playing, setPlaying] = useState(false);
    const [ended, setEnded] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    const syncMutedState = useCallback(() => {
        const v = videoRef.current;
        if (!v) return;
        setIsMuted(v.muted || v.volume < 0.05);
    }, []);

    const forceUnmute = useCallback(() => {
        const v = videoRef.current;
        if (!v) return;
        v.muted = false;
        v.volume = 1;
        syncMutedState();
        if (v.paused) void v.play();
    }, [syncMutedState]);

    const enforceLinearProgress = useCallback(() => {
        const v = videoRef.current;
        if (!v || v.readyState < 1) return;

        if (v.duration > 0 && v.duration - v.currentTime < 0.2) {
            maxWatchedRef.current = Math.max(maxWatchedRef.current, v.duration);
            return;
        }

        if (v.currentTime > maxWatchedRef.current + SLACK_SEC) {
            v.currentTime = maxWatchedRef.current;
            return;
        }
        maxWatchedRef.current = Math.max(maxWatchedRef.current, v.currentTime);
    }, []);

    const onTimeUpdate = () => enforceLinearProgress();

    const togglePlay = () => {
        const v = videoRef.current;
        if (!v) return;
        if (v.paused) {
            v.muted = false;
            if (v.volume < 0.05) v.volume = 1;
            syncMutedState();
            void v.play();
        } else v.pause();
    };

    const onReplay = () => {
        const v = videoRef.current;
        if (!v) return;
        maxWatchedRef.current = 0;
        v.currentTime = 0;
        v.muted = false;
        v.volume = 1;
        syncMutedState();
        setEnded(false);
        void v.play();
    };

    const onRateChange = () => {
        const v = videoRef.current;
        if (v && Math.abs(v.playbackRate - 1) > 0.01) v.playbackRate = 1;
    };

    /** Durante reprodução, bloqueia atalhos de “pular” em quem não está digitando em formulário. */
    useEffect(() => {
        if (!playing && !ended) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (!isPlayerSeekShortcut(e)) return;
            if (targetIsEditable(e.target)) return;
            e.preventDefault();
            e.stopPropagation();
        };

        document.addEventListener("keydown", onKeyDown, true);
        return () => document.removeEventListener("keydown", onKeyDown, true);
    }, [playing, ended]);

    /** Reforço contínuo — cobre o que eventos de seek não disparam em alguns dispositivos. */
    useEffect(() => {
        const id = window.setInterval(() => {
            const v = videoRef.current;
            if (v && !v.paused && !ended) enforceLinearProgress();
        }, 200);
        return () => window.clearInterval(id);
    }, [enforceLinearProgress, ended]);

    /** Tempômetro para o CTA mobile (2 min): só conta com vídeo tocando e aba visível. */
    useEffect(() => {
        if (!playing || ended) return;
        const id = window.setInterval(() => {
            if (document.visibilityState !== "visible") return;
            addWatchedSeconds(1);
        }, 1000);
        return () => window.clearInterval(id);
    }, [playing, ended, addWatchedSeconds]);

    return (
        <div
            className="relative h-full w-full select-none bg-black"
            style={{ WebkitUserSelect: "none", userSelect: "none" }}
            onContextMenu={(e) => e.preventDefault()}
            role="presentation"
        >
            <div className="pointer-events-none absolute left-0 right-0 top-0 z-20 px-2 pt-2">
                <p className="rounded-md border border-white/10 bg-black/75 px-2.5 py-2 text-center text-[9px] font-medium leading-snug text-white/85 shadow-lg backdrop-blur-sm sm:text-[10px] sm:leading-relaxed">
                    <strong className="text-brand-pink">Som:</strong> não dá para o vídeo começar sozinho com áudio
                    (regra do navegador/celular). Aumente o volume do aparelho ou fone. Se continuar mudo, toque em{" "}
                    <strong className="text-white">Ativar áudio</strong>.
                </p>
            </div>

            {isMuted && !ended && (
                <div className="absolute left-1/2 top-[4.25rem] z-20 -translate-x-1/2 px-2 sm:top-[4.75rem]">
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            forceUnmute();
                        }}
                        className="pointer-events-auto flex items-center gap-2 rounded-full border border-brand-pink/60 bg-brand-pink/25 px-4 py-2 text-[11px] font-bold uppercase tracking-wide text-white shadow-[0_0_20px_rgba(219,31,133,0.35)] backdrop-blur-sm transition hover:bg-brand-pink/40"
                    >
                        <Volume2 className="h-4 w-4 shrink-0" aria-hidden />
                        Ativar áudio
                    </button>
                </div>
            )}

            <video
                ref={videoRef}
                src={src}
                className="h-full w-full object-cover outline-none"
                playsInline
                preload="metadata"
                disablePictureInPicture
                tabIndex={-1}
                draggable={false}
                controls={false}
                controlsList="nodownload noplaybackrate noremoteplayback"
                onClick={togglePlay}
                onTimeUpdate={onTimeUpdate}
                onSeeking={enforceLinearProgress}
                onSeeked={enforceLinearProgress}
                onRateChange={onRateChange}
                onVolumeChange={syncMutedState}
                onLoadedMetadata={() => {
                    const v = videoRef.current;
                    if (v) {
                        v.playbackRate = 1;
                        syncMutedState();
                    }
                }}
                onDurationChange={enforceLinearProgress}
                onPlay={() => {
                    setPlaying(true);
                    setEnded(false);
                    syncMutedState();
                }}
                onPause={() => {
                    setPlaying(false);
                    syncMutedState();
                }}
                onEnded={() => {
                    setPlaying(false);
                    setEnded(true);
                }}
                onDoubleClick={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
            />

            {!playing && !ended && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/25">
                    <div className="pointer-events-auto rounded-full border border-white/20 bg-black/45 p-4 shadow-[0_0_30px_rgba(219,31,133,0.35)] backdrop-blur-sm">
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                togglePlay();
                            }}
                            className="flex h-14 w-14 items-center justify-center rounded-full text-white transition hover:bg-white/10"
                            aria-label="Reproduzir vídeo"
                        >
                            <Play className="ml-1 h-8 w-8 fill-current" aria-hidden />
                        </button>
                    </div>
                </div>
            )}

            {playing && (
                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        togglePlay();
                    }}
                    className="absolute bottom-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white backdrop-blur-sm transition hover:bg-black/70"
                    aria-label="Pausar"
                >
                    <Pause className="h-4 w-4" fill="currentColor" aria-hidden />
                </button>
            )}

            {ended && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-black/70 px-6 backdrop-blur-[2px]">
                    <p className="text-center text-sm font-medium text-white/90">Fim da mensagem</p>
                    <button
                        type="button"
                        onClick={onReplay}
                        className="inline-flex items-center gap-2 rounded-full border border-brand-pink/50 bg-brand-pink/20 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-brand-pink/35"
                    >
                        <RotateCcw className="h-4 w-4" aria-hidden />
                        Assistir de novo
                    </button>
                </div>
            )}
        </div>
    );
}
