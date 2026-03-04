"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Calendar, Video, Headphones, ShieldCheck, Download } from "lucide-react";

export default function AcessoPortal() {
    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const [loading, setLoading] = useState(true);
    const [payload, setPayload] = useState<any>(null);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!token) {
            setError("Token de acesso inválido ou ausente.");
            setLoading(false);
            return;
        }

        async function resolve() {
            try {
                const res = await fetch(`http://localhost:8000/api/access/resolve?token=${token}`);
                const data = await res.json();

                if (res.ok) {
                    setPayload(data);
                } else {
                    setError(data.detail || "Falha na verificação de acesso.");
                }
            } catch (err) {
                setError("Servidor indisponível temporariamente.");
            } finally {
                setLoading(false);
            }
        }
        resolve();
    }, [token]);

    return (
        <div className="min-h-screen bg-[#0A0A0A] bg-dark-texture text-brand-offWhite font-sans selection:bg-brand-orange selection:text-white pb-20">
            {/* Header Reduzido */}
            <header className="border-b border-white/5 py-6 px-4 mb-10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">Aulão Ana Rita</h2>
                    <span className="flex items-center gap-2 text-xs font-semibold text-brand-orange tracking-widest uppercase">
                        <ShieldCheck className="w-4 h-4" /> Acesso VIP Requerido
                    </span>
                </div>
            </header>

            <main className="max-w-3xl mx-auto px-4">
                {loading && (
                    <div className="text-center py-20 animate-pulse text-white/50 tracking-widest uppercase text-sm">
                        Verificando credenciais de acesso seguro...
                    </div>
                )}

                {error && !loading && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-8 rounded-2xl text-center shadow-lg glass-panel">
                        <h2 className="text-xl font-serif mb-2 text-white">Erro de Acesso</h2>
                        <p className="font-light">{error}</p>
                    </div>
                )}

                {payload && !loading && (
                    <div className="space-y-12 animate-fade-in-up">
                        {/* Boas Vindas */}
                        <div className="text-left space-y-4">
                            <h1 className="text-4xl sm:text-5xl font-serif text-white leading-tight">
                                Olá, <span className="italic text-brand-orange">{payload.buyer_name?.split(" ")[0] || "Aluno"}</span>.
                            </h1>
                            <p className="text-white/60 text-lg font-light leading-relaxed max-w-xl">
                                Seu acesso foi verificado com sucesso. Você está oficialmente participando do Aulão que vai destravar sua vida.
                            </p>
                        </div>

                        {/* Cards de Ação Rápidos */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                            {/* Card Grupo VIP */}
                            <div className="glass-panel p-8 rounded-2xl flex flex-col justify-between hover:bg-white/5 transition-colors group">
                                <div className="space-y-4 mb-8">
                                    <div className="w-12 h-12 bg-green-500/20 text-green-500 flex items-center justify-center rounded-xl">
                                        <Headphones className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-serif text-white">Grupo Silencioso</h3>
                                    <p className="text-white/60 text-sm font-light">
                                        É por este grupo no WhatsApp que os administradores enviarão links, avisos práticos e o workbook bônus 15 minutos antes da aula.
                                    </p>
                                </div>
                                <a href={payload.link_grupo_vip} target="_blank" className="button-hover-effect block w-full text-center py-4 bg-white text-black font-bold uppercase text-xs tracking-widest rounded-xl shadow-lg">
                                    Entrar no Grupo Oficial
                                </a>
                            </div>

                            {/* Card Transmissão */}
                            <div className="glass-panel p-8 rounded-2xl flex flex-col justify-between hover:bg-white/5 transition-colors group">
                                <div className="space-y-4 mb-8">
                                    <div className="w-12 h-12 bg-brand-orange/20 text-brand-orange flex items-center justify-center rounded-xl">
                                        <Video className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-serif text-white">Sala de Transmissão</h3>
                                    <p className="text-white/60 text-sm font-light">
                                        O link de transmissão estará fechado até o dia 28/02. Recomendamos favoritar para acesso rápido.
                                    </p>
                                </div>
                                <a href={payload.link_evento} target="_blank" className="button-hover-effect block w-full text-center py-4 border border-brand-orange text-brand-orange font-bold uppercase text-xs tracking-widest rounded-xl shadow-[0_0_20px_rgba(240,90,0,0.1)] hover:bg-brand-orange hover:text-white">
                                    Acessar Link Fechado
                                </a>
                            </div>

                        </div>

                        {/* Utils Area */}
                        <div className="glass-panel p-8 sm:px-12 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-brand-orange/30">
                            <div className="flex items-center gap-6">
                                <Calendar className="w-10 h-10 text-white/50 shrink-0" strokeWidth={1} />
                                <div>
                                    <h4 className="font-semibold text-white uppercase text-xs tracking-[0.2em] mb-1">Dia do Destrave</h4>
                                    <p className="text-white/70 font-light text-sm">28 de Fevereiro, 2026 às 20h00 BRT</p>
                                </div>
                            </div>
                            <button className="whitespace-nowrap flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FFF6ED]/80 hover:text-white hover:bg-white/10 px-6 py-3 rounded-lg border border-white/10 transition-colors">
                                <Download className="w-4 h-4" /> Adicionar Agenda
                            </button>
                        </div>

                    </div>
                )}
            </main>
        </div>
    );
}
