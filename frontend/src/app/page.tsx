"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Lock, Play, Star, ChevronDown, CheckCircle2 } from "lucide-react";

export default function LandingPage() {

    const handleCheckoutRedirect = () => {
        document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
    };

    // Countdown Logic (Vanilla refactor to React)
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date("2026-03-21T20:00:00").getTime();
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                clearInterval(interval);
            } else {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000),
                });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Observer for Scroll Reveal & Sticky CTA
    const [showSticky, setShowSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.7 && window.scrollY + window.innerHeight < document.body.offsetHeight - 200) {
                setShowSticky(true);
            } else {
                setShowSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const paddedTime = (val: number) => String(val).padStart(2, '0');

    return (
        <div className="relative">

            {/* Sticky CTA (Mobile Only) */}
            <div className={`fixed bottom-0 left-0 w-full p-4 z-50 md:hidden bg-gradient-to-t from-[#070b14] via-[#070b14]/95 to-transparent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${showSticky ? "translate-y-0" : "translate-y-[150%]"}`}>
                <button onClick={handleCheckoutRedirect} className="w-full button-hover-effect bg-brand-pink text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(219,31,133,0.3)] tracking-widest text-[13px] uppercase active:scale-95 transition-transform duration-200">
                    Garantir Ingresso – R$70,00
                </button>
            </div>

            {/* HERO CINEMATOGRÁFICO - ESTILO MÉTODO IP OTIMIZADA PARA PC */}
            <header className="relative min-h-[100svh] flex flex-col lg:flex-row items-center justify-center lg:justify-end bg-[#070b14] overflow-hidden pt-0 pb-16 lg:pb-0 font-sans">

                {/* Badge Presencial flutuando acima da imagem */}
                <div className="absolute top-7 left-1/2 -translate-x-1/2 z-[1000] flex items-center justify-center w-full px-4">
                    <div className="inline-flex items-center gap-2 px-4 lg:px-5 py-1.5 lg:py-2 rounded-full border border-brand-pink/60 bg-[#070b14]/95 text-white text-[11px] lg:text-[12px] font-bold uppercase tracking-[0.3em] shadow-[0_0_22px_rgba(219,31,133,0.55)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                        Evento Presencial — Acorda Filha
                    </div>
                </div>

                {/* Imagem do Especialista (3 Mulheres) - Direita no PC */}
                <div className="relative w-full max-w-[650px] lg:max-w-none lg:w-[55%] lg:h-[100svh] flex items-end justify-center lg:justify-end lg:order-2 mt-4 sm:mt-0 lg:-mt-0">
                    {/* Gradientes Mobile */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent lg:hidden z-10 pointer-events-none"></div>
                    <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#070b14] via-[#070b14]/80 to-transparent lg:hidden z-10 pointer-events-none"></div>
                    <div className="absolute inset-x-0 bottom-10 h-32 bg-gradient-to-t from-[#070b14] to-transparent lg:hidden z-10 pointer-events-none"></div>

                    {/* blur rosa lateral de integração para Desktop */}
                    <div className="hidden lg:block absolute top-[10%] bottom-[10%] left-[5%] w-[40%] bg-brand-pink/40 blur-[130px] z-10 pointer-events-none mix-blend-screen"></div>

                    {/* Gradientes Desktop */}
                    <div className="hidden lg:block absolute inset-y-0 left-0 w-[50%] bg-gradient-to-r from-[#070b14] via-[#070b14]/60 to-transparent z-10 pointer-events-none"></div>
                    <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-[#070b14]/50 via-transparent to-transparent z-10 pointer-events-none"></div>

                    {/* Imagem Hero */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="https://imgur.com/O7RX5iw.png"
                        alt="3 Mulheres"
                        style={{ WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 100%)' }}
                        className="w-[140%] sm:w-[120%] md:w-full h-auto lg:h-[105svh] lg:w-auto object-contain object-bottom opacity-[0.95] mx-auto lg:mx-0 lg:mr-[5%] z-0 mix-blend-screen scale-[1.15] lg:scale-125 origin-bottom translate-y-24 lg:translate-y-20"
                    />
                </div>

                {/* Arte de fundo ambiente exclusiva p/ PC */}
                <div className="hidden lg:block absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-brand-pink/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0"></div>

                {/* Card sobreposto - Esquerda no PC */}
                <div className="relative z-20 lg:absolute lg:left-[5%] xl:left-[10%] lg:top-1/2 lg:-translate-y-1/2 w-[92%] max-w-[480px] lg:max-w-[620px] xl:max-w-[700px] -mt-[220px] sm:-mt-[280px] lg:mt-0 p-6 sm:p-10 lg:p-14 rounded-2xl lg:rounded-[2rem] border border-brand-pink/30 lg:border-white/5 bg-[#070b14]/95 lg:bg-gradient-to-br lg:from-[#111827]/95 lg:to-[#070b14]/95 backdrop-blur-xl lg:backdrop-blur-3xl shadow-[0_0_50px_rgba(219,31,133,0.15)] lg:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),_0_0_60px_-15px_rgba(219,31,133,0.2)] animate-fade-in-up flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-500 overflow-hidden group">

                    {/* Luz de topo do card no PC */}
                    <div className="hidden lg:block absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-pink/80 to-transparent"></div>
                    <div className="hidden lg:block absolute -top-10 -left-10 w-48 h-48 bg-brand-pink/20 rounded-full blur-3xl pointer-events-none"></div>

                    <h1 className="relative z-10 font-sans text-[22px] sm:text-[28px] lg:text-[44px] xl:text-[50px] text-white font-medium leading-[1.3] lg:leading-[1.1] mb-6 lg:mb-8 tracking-tight">
                        Descubra quem você é e <strong className="font-bold">volte a viver o propósito…</strong><br className="hidden sm:block mb-1 lg:mb-3" />
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-[#ff66cc] block mt-2 sm:mt-0 leading-[1.2] drop-shadow-[0_2px_15px_rgba(219,31,133,0.25)]">
                            que Deus preparou para você
                        </span>
                    </h1>

                    <h2 className="relative z-10 text-[14px] sm:text-[15px] lg:text-[17px] xl:text-[19px] font-sans text-white/70 lg:text-white/70 font-light mb-8 lg:mb-12 leading-relaxed px-1 sm:px-4 lg:px-0 lg:pr-10">
                        Um encontro para mulheres cansadas, travadas e sobrecarregadas que sabem que poderiam estar vivendo muito mais, <strong className="text-white font-medium">mas não conseguem sair do lugar.</strong>
                    </h2>

                    <div className="relative z-10 w-full flex flex-col items-center lg:items-start">
                        {/* Botão Premium com Borda Brilhante no PC */}
                        <div className="w-full lg:w-auto p-[2px] rounded-xl lg:rounded-2xl bg-gradient-to-r from-brand-pink via-[#ff33ad] to-brand-pink relative group/btn cursor-pointer">
                            <div className="absolute inset-0 bg-brand-pink opacity-40 blur-xl group-hover/btn:opacity-70 transition-opacity duration-700"></div>
                            <button onClick={handleCheckoutRedirect} className="w-full lg:w-auto lg:min-w-[400px] relative inline-flex items-center justify-center px-6 py-4 sm:py-5 lg:py-6 text-[14px] sm:text-[15px] lg:text-[17px] font-black text-[#070b14] bg-gradient-to-b from-[#FFE8F5] to-[#FFC2E2] rounded-[10px] lg:rounded-[14px] transform transition-transform duration-300 active:scale-95 tracking-widest uppercase shadow-[inset_0_-4px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0_30px_rgba(219,31,133,0.6)]">
                                GARANTIR MEU INGRESSO – R$70,00
                            </button>
                        </div>

                        <div className="mt-6 lg:mt-8 text-white/80 lg:text-white/50 font-bold tracking-[0.05em] lg:tracking-[0.2em] text-[12px] sm:text-[13px] lg:text-[11px] uppercase flex flex-col items-center lg:items-start gap-3 md:gap-4 text-center md:text-left">
                            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
                                <div className="flex items-center gap-2">
                                    <Lock className="w-4 h-4 text-brand-pink" />
                                    <span>Vagas Limitadas - 21 de Março, 17h</span>
                                </div>
                                <span className="hidden md:inline text-white/20">|</span>
                                <span className="flex items-center gap-1">📍 Cachoeirinha, Barra do Pojuca - BA</span>
                            </div>

                            <div className="flex items-center justify-center md:justify-start gap-3 lg:gap-4 text-[10px] sm:text-[11px]">
                                <span className="text-white/30 hidden sm:inline">NO QUINTAL DOS REIS –</span>
                                <a href="https://www.google.com/maps/search/?api=1&query=Rua+da+Cachoeirinha+-+Monte+Gordo,+Camaçari+-+BA" target="_blank" rel="noopener noreferrer" className="text-brand-pink hover:text-white transition-colors underline decoration-brand-pink/40 underline-offset-4">
                                    Abrir no Maps
                                </a>
                                <span className="text-white/20">•</span>
                                <a href="https://waze.com/ul?q=Rua+da+Cachoeirinha+-+Monte+Gordo,+Camaçari+-+BA" target="_blank" rel="noopener noreferrer" className="text-brand-pink hover:text-white transition-colors underline decoration-brand-pink/40 underline-offset-4">
                                    Abrir no Waze
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Message Wrapper - Apenas Mobile (no PC já fica integrado na sensação do site) */}
                <div className="lg:hidden relative z-20 mt-12 text-center text-white/90 text-[15px] sm:text-[17px] font-light px-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    O encontro que você precisa <strong className="text-brand-pink font-semibold">para destravar de vez</strong>
                </div>

                {/* Gradient pra emendar na proxima sessao */}
                <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-brand-black to-transparent pointer-events-none z-10"></div>
            </header>



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

                    <div className="inline-block text-left mb-12 p-8 border border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm">
                        <ul className="space-y-4 text-base sm:text-lg text-brand-offWhite/90 tracking-wide font-light">
                            <li className="flex items-start gap-4">
                                <span className="text-brand-black font-black">X</span>
                                <span>Não será transmitido online</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-brand-black font-black">X</span>
                                <span>Não ficará gravado para depois</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 shrink-0 text-white" />
                                <span className="text-white font-medium">As vagas são restritas apenas à capacidade do local físico</span>
                            </li>
                        </ul>
                    </div>

                    <p className="text-sm font-bold text-brand-black uppercase tracking-widest mb-6">
                        As vagas encerram assim que o local lotar.
                    </p>

                    <button onClick={handleCheckoutRedirect} className="button-hover-effect inline-flex items-center justify-center w-full sm:w-auto px-10 py-5 text-sm sm:text-base font-bold text-brand-pink bg-white rounded-xl shadow-2xl uppercase tracking-widest">
                        Garantir Meu Ingresso – R$70,00
                    </button>

                </div>
            </section>

            {/* Ciclo Invisivel (Dor) */}
            <section className="py-24 sm:py-32 px-4 bg-brand-black bg-dark-texture">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-16">
                        <h2 className="font-sans text-xs sm:text-sm font-semibold text-brand-pink uppercase tracking-[0.3em] mb-4">Por que muitas continuam presas?</h2>
                        <h3 className="font-serif text-3xl sm:text-5xl text-brand-offWhite/90 leading-tight">Você ora. Lê a Bíblia. Se esforça. E <span className="text-white">mesmo assim…</span></h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-20">
                        {["Falta força e ânimo para continuar.",
                            "Sente uma ansiedade porque a vida está passando rápido demais.",
                            "Falta sentido nas ações diárias, como se buscasse algo e continuasse travada.",
                            "Sente que não está vivendo o que Deus tem para você."
                        ].map((txt, i) => (
                            <div key={i} className="flex gap-6 group">
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-brand-pink/50 transition-colors">
                                    <span className="text-brand-pink font-serif text-xl italic">{i + 1}</span>
                                </div>
                                <div>
                                    <p className="text-xl sm:text-2xl text-brand-offWhite/80 font-light leading-relaxed">{txt}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center p-10 sm:p-16 border-y border-brand-pink/10 relative overflow-hidden bg-gradient-to-b from-brand-black to-[#0F0F0F]">
                        <p className="font-sans text-lg sm:text-xl text-brand-offWhite/70 font-light mb-6 uppercase tracking-[0.2em]">A verdade é uma só:</p>
                        <h4 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white leading-tight">
                            Não é falta de fé.<br />
                            É <span className="border-b-[3px] border-brand-pink pb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-offWhite/70">desalinhamento</span>.
                        </h4>
                        <p className="mt-8 text-white/60 font-light text-lg">Quando mente, emoções e espírito não estão alinhados, nada flui.</p>
                    </div>
                </div>
            </section>

            {/* Autoridade */}
            <section className="py-0 px-0 bg-[#0F0F0F]">
                <div className="flex flex-col lg:flex-row w-full min-h-[80vh]">
                    <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-full">
                        <div className="absolute inset-0 bg-brand-pink/20 mix-blend-color z-10"></div>
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0F0F0F] via-transparent to-transparent z-20"></div>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="https://i.imgur.com/TfOX134.png" className="absolute inset-0 w-full h-full object-cover object-[center_30%] lg:object-center" alt="Ana Rita" />
                    </div>

                    <div className="w-full lg:w-1/2 py-20 px-8 lg:px-20 flex flex-col justify-center relative z-30 bg-[#0F0F0F] lg:bg-transparent">
                        <h2 className="font-sans text-xs sm:text-sm font-semibold text-brand-pink uppercase tracking-[0.3em] mb-8">
                            Quem vai te ensinar
                        </h2>
                        <div className="space-y-8 font-serif text-xl sm:text-2xl text-brand-offWhite/80 leading-relaxed">
                            <p className="text-2xl sm:text-3xl text-white">
                                Ana Rita perdeu os dois braços após uma descarga de <span className="italic text-brand-pink">13 mil volts</span>.
                            </p>
                            <p className="font-light">Perdeu movimentos. Perdeu sonhos.</p>
                            <p className="text-white font-medium italic">Mas não perdeu a fé.</p>
                            <p className="font-light">Reconstruiu a própria vida passando por cima de diagnósticos e impossibilidades.</p>
                            <div className="pt-8 border-t border-white/10 mt-8">
                                <p className="text-lg sm:text-xl font-sans font-light tracking-wide text-white/90">
                                    Hoje ajuda pessoas que acreditam em Deus… <br className="hidden sm:block" />
                                    <span className="font-bold text-white uppercase text-base tracking-widest mt-2 block">mas não conseguem acreditar em si.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* O Que Vai Aprender */}
            <section className="py-24 sm:py-32 px-4 bg-brand-black bg-dark-texture">
                <div className="max-w-5xl mx-auto">
                    <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white text-center mb-20 leading-tight max-w-4xl mx-auto">
                        O que você vai viver no <em className="italic text-brand-pink underline decoration-[2px] underline-offset-8">Acorda Filha</em>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 mb-16">
                        {["Um ambiente de cura, confronto e ativação espiritual.",
                            "Uma palavra direcionada para mulheres travadas.",
                            "Clareza sobre sua identidade em Cristo.",
                            "Libertação de pesos emocionais invisíveis.",
                            "Uma decisão prática para mudar o rumo da sua vida."
                        ].map((txt, i) => (
                            <div key={i} className="glass-panel p-8 sm:p-10 rounded-[2rem] border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-brand-pink/30 transition-colors duration-500">
                                <div className="w-12 h-12 rounded-full bg-brand-pink/10 flex items-center justify-center mb-6 text-brand-pink">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <p className="text-xl sm:text-2xl text-white/90 font-light leading-relaxed">{txt}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center p-10 sm:p-16 border-y border-brand-pink/10 relative overflow-hidden bg-[#0A0E17]/50 mb-16">
                        <p className="font-sans text-sm sm:text-lg text-brand-offWhite/70 font-light mb-4 uppercase tracking-[0.2em]">Por que ser presencial?</p>
                        <h4 className="font-serif text-3xl sm:text-4xl text-white leading-tight mb-8">
                            Algumas transformações <span className="text-brand-pink">não acontecem pela tela.</span>
                        </h4>
                        <div className="flex flex-wrap justify-center gap-4 text-sm font-light text-white/80">
                            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">Ambiente sem distrações</span>
                            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">Presença coletiva</span>
                            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">Direcionamento ao vivo</span>
                        </div>
                    </div>

                    <div className="text-center font-sans tracking-[0.2em] space-y-3 uppercase text-[10px] sm:text-xs font-bold text-white/40">
                        <p>Não é mais uma palestra.</p>
                        <p>Não é mais um culto comum.</p>
                        <p className="text-brand-pink text-sm mt-6">É um chamado para o propósito.</p>
                    </div>
                </div>
            </section>

            {/* Dúvidas Frequentes (FAQ) */}
            <section className="py-24 sm:py-32 px-4 bg-[#0F0F0F] relative">
                <div className="max-w-3xl mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="font-sans text-xs sm:text-sm font-semibold text-brand-pink uppercase tracking-[0.3em] mb-4">Dúvidas Frequentes</h2>
                        <h3 className="font-serif text-3xl sm:text-5xl text-white leading-tight">O que você precisa <span className="italic">saber</span></h3>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: "O Encontro ficará gravado?", a: "Não. A proposta é justamente destravar as emoções e a paralisia no agora. Precisamos do seu foco total e presença inegociável ao vivo." },
                            { q: "Como vou receber meu acesso?", a: "Logo após a confirmação da sua inscrição na Kiwify, você receberá o link de acesso exclusivo no seu e-mail, e as instruções para colar no Grupo VIP secreto do WhatsApp." },
                            { q: "Quanto tempo de duração terá o encontro?", a: "Teremos muito conteúdo direto ao ponto. Planeje cerca de 2 horas. Serão minutos vitais para você identificar seu bloqueio." },
                            { q: "Quais as formas de pagamento aceitas?", a: "O sistema Kiwify suporta todas as grandes bandeiras no cartão de crédito, bem como pagamentos instantâneos via Pix." }
                        ].map((faq, i) => (
                            <details key={i} className="group glass-panel rounded-2xl border border-white/5 bg-white/[0.01] overflow-hidden cursor-pointer hover:bg-white/[0.03] hover:border-white/10 transition-colors">
                                <summary className="list-none flex justify-between items-center p-6 sm:p-8 font-sans text-white text-base sm:text-lg font-medium select-none outline-none">
                                    {faq.q}
                                    <ChevronDown className="w-5 h-5 text-brand-pink/70 group-open:rotate-180 transition-transform duration-300 shrink-0 ml-4" />
                                </summary>
                                <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
                                    <div className="w-full h-px bg-white/5 mb-6"></div>
                                    <p className="text-white/60 font-light leading-relaxed text-sm sm:text-base">
                                        {faq.a}
                                    </p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ESCOLHA SEU INGRESSO - KIWIFY */}
            <section id="checkout" className="relative py-24 sm:py-32 px-4 overflow-hidden border-t border-brand-black flex flex-col items-center justify-center min-h-[80vh] bg-[#070b14]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(219,31,133,0.1)_0%,_transparent_70%)]"></div>

                <div className="relative z-10 max-w-5xl mx-auto text-center mb-16">
                    <h2 className="font-sans text-xs sm:text-sm font-semibold text-brand-pink uppercase tracking-[0.3em] mb-6">
                        Passo Final
                    </h2>
                    <h3 className="font-serif text-4xl sm:text-5xl lg:text-5xl text-white leading-tight">
                        Escolha o seu <span className="italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-darkPink">ingresso.</span>
                    </h3>
                </div>

                <div className="relative z-10 w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* INGRESSO INDIVIDUAL */}
                    <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 flex flex-col h-full bg-[#0A0E17]/80 hover:border-brand-pink/40 transition-colors duration-500">
                        <div className="mb-8">
                            <h4 className="text-white text-2xl font-sans font-bold mb-2">Individual</h4>
                            <p className="text-white/50 font-light text-sm">Acesso individual ao Evento Presencial.</p>
                        </div>

                        <div className="mb-8 border-b border-white/10 pb-8">
                            <span className="text-white/40 text-lg line-through">R$ 97,00</span>
                            <div className="flex items-baseline gap-1 mt-1 text-white">
                                <span className="text-xl font-bold">R$</span>
                                <span className="text-5xl font-black tracking-tighter">70</span>
                                <span className="text-xl font-bold">,00</span>
                            </div>
                        </div>

                        <ul className="space-y-4 text-white/80 text-sm mb-10 flex-grow font-light">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-brand-pink shrink-0" />
                                <span>Acesso ao <strong>Evento Presencial</strong></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-brand-pink shrink-0" />
                                <span>Acesso ao Grupo VIP</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-brand-pink shrink-0" />
                                <span>Material Base</span>
                            </li>
                        </ul>

                        <a href="https://pay.kiwify.com.br/l49ADXU" target="_blank" rel="noopener noreferrer" className="w-full block text-center py-5 text-[13px] font-bold text-white bg-white/5 border border-white/20 rounded-xl hover:bg-white/10 transition-colors uppercase tracking-widest">
                            Quero Individual
                        </a>
                    </div>

                    {/* INGRESSO CASADINHA (DESTAQUE) */}
                    <div className="relative p-8 sm:p-10 rounded-3xl border-[2px] border-brand-pink bg-[#0A0E17] shadow-[0_0_40px_rgba(219,31,133,0.15)] flex flex-col h-full transform md:-translate-y-4">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-brand-pink text-[#070b14] text-[10px] font-bold uppercase tracking-[0.25em] rounded-full whitespace-nowrap shadow-[0_0_20px_rgba(219,31,133,0.4)]">
                            Mais Inteligente
                        </div>

                        <div className="mb-8">
                            <h4 className="text-brand-pink text-2xl font-sans font-bold mb-2">Casadinha</h4>
                            <p className="text-brand-offWhite/70 font-light text-sm">Destrave ao lado de quem você ama.</p>
                        </div>

                        <div className="mb-8 border-b border-brand-pink/20 pb-8">
                            <div className="flex justify-between items-end">
                                <div>
                                    <span className="text-white/40 text-lg line-through">R$ 194,00</span>
                                    <div className="flex items-baseline gap-1 mt-1 text-white">
                                        <span className="text-xl font-bold">R$</span>
                                        <span className="text-5xl font-black tracking-tighter text-glow">100</span>
                                        <span className="text-xl font-bold">,00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ul className="space-y-4 text-white/90 text-sm mb-10 flex-grow font-light">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-brand-pink shrink-0" />
                                <span><strong>2 Acessos Ind.</strong> ao Evento Presencial</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-brand-pink shrink-0" />
                                <span><strong>2 Acessos</strong> ao Grupo VIP exclusivo</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-brand-pink shrink-0" />
                                <span>Crescimento alinhado na mesma visão</span>
                            </li>
                        </ul>

                        <div className="w-full p-[2px] rounded-xl bg-gradient-to-r from-brand-pink via-[#ff33ad] to-brand-pink relative group/btn cursor-pointer">
                            <div className="absolute inset-0 bg-brand-pink opacity-40 blur-xl group-hover/btn:opacity-70 transition-opacity duration-700"></div>
                            <a href="https://pay.kiwify.com.br/sClrnF7" target="_blank" rel="noopener noreferrer" className="w-full relative flex items-center justify-center py-5 text-[13px] font-black text-[#070b14] bg-gradient-to-b from-[#FFE8F5] to-[#FFC2E2] rounded-[10px] transition-transform duration-300 active:scale-95 uppercase tracking-widest shadow-[0_0_30px_rgba(219,31,133,0.3)]">
                                Quero a Casadinha
                            </a>
                        </div>
                    </div>
                </div>

                <p className="mt-14 text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] relative z-10 flex items-center justify-center gap-2">
                    <Lock className="w-3.5 h-3.5" /> Transação 100% Segura via Kiwify
                </p>
            </section>

            {/* Footer Spacer for Mobile */}
            <footer className="bg-brand-black py-12 md:py-6 text-center text-white/20 text-xs font-sans tracking-widest uppercase">
                <p>© 2026 Ana Rita</p>
                <div className="h-20 md:h-0"></div>
            </footer>
        </div>
    );
}
