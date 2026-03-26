"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { Play } from "lucide-react";
import { VSL_DIRECT_VIDEO_URL, VSL_EMBED_URL } from "@/config/vsl";
import { LockedPortraitVideo } from "./LockedPortraitVideo";
import { useVslWatch } from "./VslWatchContext";

/** Moldura vertical 9:16 — larguras maiores para a VSL destacar no card. */
const portraitShell =
    "relative mx-auto aspect-[9/16] w-full max-w-[min(100%,360px)] overflow-hidden rounded-2xl border border-brand-pink/30 shadow-[0_0_50px_-10px_rgba(219,31,133,0.4)] sm:max-w-[400px] lg:max-w-[440px] xl:max-w-[min(100%,480px)]";

const DESKTOP_VSL_PLACEHOLDER_SVG = encodeURIComponent(`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1920" viewBox="0 0 1080 1920">
  <defs>
    <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0b0f18"/>
      <stop offset="0.55" stop-color="#070b14"/>
      <stop offset="1" stop-color="#12061a"/>
    </linearGradient>
    <radialGradient id="g2" cx="55%" cy="30%" r="70%">
      <stop offset="0" stop-color="#db1f85" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#db1f85" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g3" cx="45%" cy="75%" r="70%">
      <stop offset="0" stop-color="#a61362" stop-opacity="0.24"/>
      <stop offset="1" stop-color="#a61362" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1080" height="1920" fill="url(#g1)"/>
  <rect width="1080" height="1920" fill="url(#g2)"/>
  <rect width="1080" height="1920" fill="url(#g3)"/>

  <rect x="72" y="150" width="936" height="1620" rx="56" ry="56" fill="rgba(255,255,255,0.02)" stroke="rgba(219,31,133,0.35)" stroke-width="2"/>

  <g opacity="0.9">
    <circle cx="540" cy="770" r="78" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.14)" stroke-width="2"/>
    <polygon points="525,732 525,808 592,770" fill="rgba(255,255,255,0.9)"/>
  </g>

  <text x="540" y="910" text-anchor="middle" fill="rgba(255,255,255,0.55)" font-family="Arial, Helvetica, sans-serif" font-size="32" letter-spacing="8">
    VSL 1080×1920
  </text>
  <text x="540" y="960" text-anchor="middle" fill="rgba(255,255,255,0.35)" font-family="Arial, Helvetica, sans-serif" font-size="22" letter-spacing="4">
    placeholder desktop
  </text>
</svg>`);

/** Estimativa de tempo “assistindo” embed (área visível + aba em foco) — não há API de play no iframe. */
function EmbedWatchTracker({ children }: { children: ReactNode }) {
    const wrapRef = useRef<HTMLDivElement>(null);
    const visibleRef = useRef(false);
    const { addWatchedSeconds } = useVslWatch();

    useEffect(() => {
        const el = wrapRef.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([e]) => {
                visibleRef.current = (e?.intersectionRatio ?? 0) >= 0.3;
            },
            { threshold: [0, 0.15, 0.3, 0.6, 1] }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    useEffect(() => {
        const id = window.setInterval(() => {
            if (!visibleRef.current || document.visibilityState !== "visible") return;
            addWatchedSeconds(1);
        }, 1000);
        return () => window.clearInterval(id);
    }, [addWatchedSeconds]);

    return (
        <div ref={wrapRef} className="flex w-full flex-col items-center gap-2">
            {children}
        </div>
    );
}

export function VideoFrame() {
    const directSrc = VSL_DIRECT_VIDEO_URL;
    const embedSrc = VSL_EMBED_URL;

    if (!directSrc && !embedSrc) {
        return (
            <div className="flex w-full justify-center">
                <div
                    className={`${portraitShell} bg-[#050810]`}
                    role="region"
                    aria-label="Área do vídeo vertical (placeholder até configurar o vídeo)"
                >
                    <div
                        className="absolute inset-0 opacity-[0.07]"
                        style={{
                            backgroundImage:
                                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-pink/15 via-transparent to-brand-darkPink/25" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070b14]/95 via-transparent to-[#070b14]/50" />

                    <div className="absolute left-1/2 top-[42%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 px-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] shadow-[0_0_40px_rgba(219,31,133,0.35)] backdrop-blur-sm sm:h-[4.5rem] sm:w-[4.5rem]">
                            <Play
                                className="ml-0.5 h-6 w-6 text-white/90 drop-shadow-[0_0_12px_rgba(219,31,133,0.8)] sm:h-8 sm:w-8"
                                fill="currentColor"
                                aria-hidden
                            />
                        </div>
                        <p className="text-center text-[10px] font-bold uppercase tracking-[0.22em] text-white/45 sm:text-[11px]">
                            Vídeo em breve
                        </p>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 flex justify-center bg-gradient-to-t from-[#070b14] to-transparent px-2 pb-3 pt-8">
                        <p className="max-w-[16rem] text-center text-[9px] leading-snug text-white/35 sm:text-[10px]">
                            <span className="font-mono text-brand-pink/85">NEXT_PUBLIC_VSL_DIRECT_VIDEO_URL</span> (MP4, sem pular) ou{" "}
                            <span className="font-mono text-brand-pink/85">NEXT_PUBLIC_VSL_EMBED_URL</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    // Temporário: no desktop, mostrar placeholder na proporção final (1080x1920).
    // Mobile continua exibindo o player normal.
    const desktopPlaceholder = (
        <div className="hidden w-full justify-center lg:flex">
            <div className={`${portraitShell} bg-[#050810]`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={`data:image/svg+xml,${DESKTOP_VSL_PLACEHOLDER_SVG}`}
                    alt="Placeholder VSL 1080x1920"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
        </div>
    );

    if (directSrc) {
        return (
            <>
                <div className="flex w-full justify-center lg:hidden">
                    <div className={`${portraitShell} bg-black`}>
                        <LockedPortraitVideo src={directSrc} />
                    </div>
                </div>
                {desktopPlaceholder}
            </>
        );
    }

    return (
        <>
            <div className="lg:hidden">
                <EmbedWatchTracker>
                    <p className="max-w-[min(100%,360px)] rounded-md border border-white/10 bg-[#070b14]/90 px-2.5 py-2 text-center text-[9px] font-medium leading-snug text-white/85 sm:max-w-[400px] sm:text-[10px]">
                        <strong className="text-brand-pink">Som:</strong> autoplay com áudio costuma ser bloqueado. Aumente o volume do aparelho e verifique se o player do vídeo não está mudo.
                    </p>
                    <div className={`${portraitShell} bg-black`}>
                        <iframe
                            src={embedSrc}
                            title="Vídeo de apresentação"
                            className="absolute inset-0 h-full w-full border-0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                        />
                    </div>
                </EmbedWatchTracker>
            </div>
            {desktopPlaceholder}
        </>
    );
}
