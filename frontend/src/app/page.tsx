"use client";

import { useEffect, useState } from "react";
import { Star, CheckCircle2 } from "lucide-react";
import { VslHero } from "@/components/vsl/VslHero";
import {
    VslWatchProvider,
    useVslWatch,
    VSL_MOBILE_CTA_AFTER_SECONDS,
    VSL_REST_UNLOCK_AFTER_SECONDS,
} from "@/components/vsl/VslWatchContext";

function LandingPageContent() {

    const handleCheckoutRedirect = () => {
        window.location.href = "https://pay.kiwify.com.br/l49ADXU";
    };

    // Countdown: 15 minutos (começa ao carregar a página)
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 15, seconds: 0 });

    useEffect(() => {
        let remaining = 15 * 60; // segundos
        setTimeLeft({ days: 0, hours: 0, minutes: 15, seconds: 0 });

        const interval = window.setInterval(() => {
            remaining = Math.max(0, remaining - 1);

            const minutes = Math.floor(remaining / 60);
            const seconds = remaining % 60;

            setTimeLeft({ days: 0, hours: 0, minutes, seconds });

            if (remaining === 0) window.clearInterval(interval);
        }, 1000);

        return () => window.clearInterval(interval);
    }, []);

    const { watchedSeconds } = useVslWatch();

    /** Esconde o sticky no fim da página (evita sobrepor o rodapé). */
    const [nearFooter, setNearFooter] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setNearFooter(window.scrollY + window.innerHeight >= document.body.offsetHeight - 200);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const showMobileSticky =
        watchedSeconds >= VSL_MOBILE_CTA_AFTER_SECONDS && !nearFooter;

    // Temporário: liberar o conteúdo para editar a copy.
    // (Quando quiser reativar o gate dos 5 minutos, eu volto com o bloco "Conteúdo bloqueado".)
    const restUnlocked = true;

    const paddedTime = (val: number) => String(val).padStart(2, '0');

    return (
        <div className="relative">

            {/* Sticky CTA (Mobile Only) */}
            <div className={`fixed bottom-0 left-0 w-full p-4 z-50 md:hidden bg-gradient-to-t from-[#070b14] via-[#070b14]/95 to-transparent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${showMobileSticky ? "translate-y-0" : "translate-y-[150%]"}`}>
                <button onClick={handleCheckoutRedirect} className="w-full button-hover-effect bg-brand-pink text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(219,31,133,0.3)] tracking-widest text-[13px] uppercase active:scale-95 transition-transform duration-200">
                    Garantir Ingresso – R$70,00
                </button>
            </div>

            <VslHero onCtaClick={handleCheckoutRedirect} />

            {restUnlocked && (
                <>
            {/* Prova Social */}
            <section className="relative py-24 sm:py-32 px-4 bg-[#0F0F0F]">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 sm:mb-20">
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-offWhite mb-6 leading-tight">
                            Pessoas que estavam paralisadas… <br className="hidden sm:block" />
                            <span className="italic text-brand-pink">e romperam.</span>
                        </h2>
                        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-pink to-transparent mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            { name: "Juliana S.", text: "Eu orava todos os dias, mas continuava travada. Depois do encontro, finalmente dei o primeiro passo.", icon: "J" },
                            { name: "Carla M.", text: "Eu achava que era falta de fé. Descobri que era bloqueio emocional. Isso mudou minha perspectiva.", icon: "C" },
                            { name: "Patrícia L.", text: "Saí do lugar em que estava estagnada há anos. É profundo, chocante e ao mesmo tempo muito prático.", icon: "P" },
                        ].map((d, i) => (
                            <div key={i} className="glass-panel p-8 rounded-[2rem] flex flex-col h-full bg-gradient-to-b from-[#111827]/80 to-[#070b14]/80 border border-white/5 hover:-translate-y-2 hover:border-brand-pink/20 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                                <div className="flex gap-1 text-brand-pink mb-6">
                                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current drop-shadow-[0_0_8px_rgba(219,31,133,0.6)]" />)}
                                </div>
                                <p className="text-brand-offWhite/80 text-lg leading-relaxed mb-8 flex-grow">"{d.text}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#070b14] flex items-center justify-center border border-brand-pink/20 shrink-0 text-brand-pink font-bold text-xl drop-shadow-[0_0_10px_rgba(219,31,133,0.3)]">
                                        {d.icon}
                                    </div>
                                    <span className="font-sans text-sm font-bold tracking-wide text-brand-offWhite uppercase">{d.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Escassez Psicológica */}
            <section className="relative py-24 sm:py-32 px-4 bg-brand-pink overflow-hidden">
                <div className="absolute inset-0 bg-brand-darkPink mix-blend-multiply opacity-50"></div>
                <div className="absolute inset-0 opacity-10 blur-sm" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"n\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23n)\"/%3E%3C/svg%3E')" }}></div>

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-medium mb-12 text-glow">
                        Esse <em className="italic font-bold">não é</em> um evento que ficará disponível depois.
                    </h2>

                    <div className="flex justify-center gap-4 sm:gap-8 mb-16">
                        {[
                            { v: paddedTime(timeLeft.days), l: "Dias" },
                            { sep: true },
                            { v: paddedTime(timeLeft.hours), l: "Horas" },
                            { sep: true },
                            { v: paddedTime(timeLeft.minutes), l: "Minutos" },
                            { sep: true },
                            { v: paddedTime(timeLeft.seconds), l: "Segundos", dark: true }
                        ].map((c, i) => (
                            c.sep ? (
                                <span key={i} className="text-4xl sm:text-5xl font-light text-white/30 pt-1 sm:pt-2">:</span>
                            ) : (
                                <div key={i} className="flex flex-col items-center">
                                    <span className={`text-4xl sm:text-6xl font-light font-sans tracking-tighter ${c.dark ? 'text-brand-black font-semibold' : 'text-white'}`}>{c.v}</span>
                                    <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mt-2 ${c.dark ? 'text-brand-black/70' : 'text-brand-offWhite/70'}`}>{c.l}</span>
                                </div>
                            )
                        ))}
                    </div>

                    <p className="text-sm font-bold text-brand-black uppercase tracking-widest mb-6">
                        As vagas encerram assim que o local lotar.
                    </p>

                    <button onClick={handleCheckoutRedirect} className="button-hover-effect inline-flex items-center justify-center w-full sm:w-auto px-10 py-5 text-sm sm:text-base font-bold text-brand-pink bg-white rounded-xl shadow-2xl uppercase tracking-widest">
                        Garantir Meu Ingresso – R$70,00
                    </button>

                </div>
            </section>

            <footer className="bg-brand-black py-12 md:py-6 text-center text-white/20 text-xs font-sans tracking-widest uppercase">
                <p>© 2026 Ana Rita</p>
                <div className="h-20 md:h-0"></div>
            </footer>
                </>
            )}
        </div>
    );
}

export default function LandingPage() {
    return (
        <VslWatchProvider>
            <LandingPageContent />
        </VslWatchProvider>
    );
}
