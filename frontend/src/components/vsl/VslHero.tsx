"use client";

import { VideoFrame } from "./VideoFrame";
import { useVslWatch, VSL_REST_UNLOCK_AFTER_SECONDS } from "./VslWatchContext";

const HERO_PLACEHOLDER_SVG = encodeURIComponent(`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0b0f18"/>
      <stop offset="0.6" stop-color="#111827"/>
      <stop offset="1" stop-color="#1a1026"/>
    </linearGradient>
    <radialGradient id="pink1" cx="20%" cy="30%" r="45%">
      <stop offset="0" stop-color="#db1f85" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#db1f85" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="pink2" cx="75%" cy="45%" r="50%">
      <stop offset="0" stop-color="#a61362" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#a61362" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1920" height="1080" fill="url(#bg)"/>
  <rect width="1920" height="1080" fill="url(#pink1)"/>
  <rect width="1920" height="1080" fill="url(#pink2)"/>

  <rect x="120" y="90" width="1680" height="900" rx="40" ry="40" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" stroke-width="2"/>

  <text x="960" y="500" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-family="Arial, Helvetica, sans-serif" font-size="54" font-weight="700">
    HERO PLACEHOLDER
  </text>
  <text x="960" y="560" text-anchor="middle" fill="rgba(255,255,255,0.45)" font-family="Arial, Helvetica, sans-serif" font-size="28">
    1920 × 1080
  </text>
</svg>`);

type VslHeroProps = {
    onCtaClick: () => void;
};

/** Hero com imagem cinematográfica + VSL (vídeo) no card. */
export function VslHero({ onCtaClick }: VslHeroProps) {
    const { watchedSeconds } = useVslWatch();
    const showIngressCta = watchedSeconds >= VSL_REST_UNLOCK_AFTER_SECONDS;

    return (
        <header className="relative min-h-[100svh] flex flex-col items-center justify-start bg-[#070b14] overflow-hidden pt-0 pb-16 font-sans">
            <div className="relative mt-0 flex w-full max-w-[650px] items-end justify-center sm:mt-0 lg:max-w-none lg:w-full lg:justify-center">
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#070b14] via-transparent to-transparent lg:hidden" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-48 bg-gradient-to-t from-[#070b14] via-[#070b14]/80 to-transparent lg:hidden" />
                <div className="pointer-events-none absolute inset-x-0 bottom-10 z-10 h-32 bg-gradient-to-t from-[#070b14] to-transparent lg:hidden" />

                <div className="pointer-events-none absolute left-[5%] top-[10%] z-10 hidden h-[80%] w-[40%] bg-brand-pink/40 mix-blend-screen blur-[130px] lg:block" />

                <div className="pointer-events-none absolute inset-x-0 top-0 z-10 hidden h-[22svh] bg-gradient-to-b from-[#070b14] via-[#070b14]/40 to-transparent lg:block" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden h-[22svh] bg-gradient-to-t from-[#070b14] via-[#070b14]/60 to-transparent lg:block" />

                {/* Mobile: imagem original; Desktop: imagem estendida final */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="https://i.imgur.com/7icDvvD.png"
                    alt="Hero mobile"
                    style={{
                        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 100%)",
                        maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 100%)",
                    }}
                    className="z-0 mx-auto h-auto w-full origin-bottom -translate-y-2 scale-[1.02] object-contain object-bottom opacity-[0.95] mix-blend-screen sm:w-[120%] sm:translate-y-16 sm:scale-[1.1] md:w-full lg:hidden"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="https://i.imgur.com/uLPt9Zr.png"
                    alt="Hero estendido"
                    style={{
                        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 100%)",
                        maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 100%)",
                    }}
                    className="hidden z-0 h-auto w-full max-w-none object-cover object-[center_20%] opacity-[0.95] mix-blend-screen lg:block lg:h-[64svh]"
                />
            </div>

            <div className="pointer-events-none absolute left-[-10%] top-[-10%] z-0 hidden h-[50vw] w-[50vw] rounded-full bg-brand-pink/10 mix-blend-screen blur-[150px] lg:block" />

            <div className="group relative z-20 -mt-[175px] flex w-[92%] max-w-[480px] flex-col items-center overflow-hidden rounded-2xl border border-brand-pink/30 bg-[#070b14]/95 p-6 text-center backdrop-blur-xl transition-all duration-500 sm:-mt-[280px] sm:p-10 lg:-mt-[220px] lg:w-[92%] lg:max-w-[740px] lg:items-center lg:rounded-[2rem] lg:border-white/5 lg:bg-gradient-to-br lg:from-[#111827]/95 lg:to-[#070b14]/95 lg:p-14 lg:text-center lg:backdrop-blur-3xl lg:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),_0_0_60px_-15px_rgba(219,31,133,0.2)] shadow-[0_0_50px_rgba(219,31,133,0.15)]">
                <div className="pointer-events-none absolute left-0 top-0 hidden h-px w-full bg-gradient-to-r from-transparent via-brand-pink/80 to-transparent lg:block" />
                <div className="pointer-events-none absolute -left-10 -top-10 hidden h-48 w-48 rounded-full bg-brand-pink/20 blur-3xl lg:block" />

                <h1 className="relative z-10 mb-5 font-sans text-[22px] font-medium leading-[1.3] tracking-tight text-white sm:text-[28px] lg:mb-6 lg:text-[44px] lg:leading-[1.1] xl:text-[50px]">
                    Descubra quem você é e <strong className="font-bold">volte a viver o propósito…</strong>
                    <br className="mb-1 hidden sm:block lg:mb-3" />
                    <span className="mt-2 block bg-gradient-to-r from-brand-pink to-[#ff66cc] bg-clip-text font-bold leading-[1.2] text-transparent drop-shadow-[0_2px_15px_rgba(219,31,133,0.25)] sm:mt-0">
                        que Deus preparou para você
                    </span>
                </h1>

                <div className="relative z-10 mb-8 w-full lg:mb-10">
                    <VideoFrame />
                </div>

                <div className="relative z-10 flex w-full flex-col items-center lg:items-start">
                    {showIngressCta && (
                        <div className="group/btn relative w-full cursor-pointer p-[2px] rounded-xl bg-gradient-to-r from-brand-pink via-[#ff33ad] to-brand-pink lg:w-auto lg:rounded-2xl">
                            <div className="pointer-events-none absolute inset-0 rounded-xl bg-brand-pink opacity-40 blur-xl transition-opacity duration-700 group-hover/btn:opacity-70" aria-hidden />
                            <button
                                type="button"
                                onClick={onCtaClick}
                                className="relative z-10 inline-flex w-full items-center justify-center rounded-[10px] bg-gradient-to-b from-[#FFE8F5] to-[#FFC2E2] px-6 py-4 text-[14px] font-black uppercase tracking-widest text-[#070b14] shadow-[inset_0_-4px_10px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:shadow-[0_0_30px_rgba(219,31,133,0.6)] active:scale-95 sm:py-5 sm:text-[15px] lg:min-w-[400px] lg:rounded-[14px] lg:py-6 lg:text-[17px]"
                            >
                                GARANTIR MEU INGRESSO – R$70,00
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className="relative z-20 mt-12 px-4 text-center text-[15px] font-light text-white/90 animate-fade-in-up sm:text-[17px] lg:hidden" style={{ animationDelay: "200ms" }}>
                O encontro que você precisa <strong className="font-semibold text-brand-pink">para destravar de vez</strong>
            </div>

            <div className="pointer-events-none absolute bottom-0 z-10 h-24 w-full bg-gradient-to-t from-brand-black to-transparent" />
        </header>
    );
}
