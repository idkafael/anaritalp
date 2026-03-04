"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";

export default function ObrigadoPage() {
    const searchParams = useSearchParams();
    const order_id = searchParams.get("order_id");
    const [status, setStatus] = useState<string>("processing");
    const [accessData, setAccessData] = useState<any>(null);

    useEffect(() => {
        if (!order_id) return;

        let interval: NodeJS.Timeout;

        const checkStatus = async () => {
            try {
                const res = await fetch(`http://localhost:8000/api/order/${order_id}`);
                const data = await res.json();

                if (data.status === "paid") {
                    setStatus("paid");
                    clearInterval(interval);
                    // Fetch access data directly (since we dont have the token in querystring yet)
                    // Pela regra de negócio, poderíamos usar um endpoint extra que envia o order_id, 
                    // Mas assumiremos que mandamos as instruções baseadas no acesso.
                } else if (data.status === "refunded" || data.status === "chargeback") {
                    setStatus("failed");
                    clearInterval(interval);
                }
            } catch (err) {
                console.error(err);
            }
        };

        checkStatus();
        interval = setInterval(checkStatus, 3000);

        return () => clearInterval(interval);
    }, [order_id]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-brand-black bg-dark-texture">
            <div className="max-w-xl w-full p-8 md:p-12 glass-panel rounded-3xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 to-transparent"></div>
                <div className="relative z-10">
                    {status === "processing" && (
                        <>
                            <Loader2 className="w-20 h-20 text-brand-orange animate-spin mx-auto mb-8" />
                            <h1 className="text-3xl font-serif text-white mb-4">Confirmando Pagamento...</h1>
                            <p className="text-brand-offWhite/70 font-light">
                                Estamos aguardando a Hotmart confirmar sua compra. Isso geralmente leva menos de um minuto se feito via Pix ou Cartão.
                            </p>
                        </>
                    )}

                    {status === "paid" && (
                        <>
                            <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                                <CheckCircle2 className="w-12 h-12 text-green-500" />
                            </div>
                            <h1 className="text-3xl font-serif text-white mb-4">Tudo Certo! Ingresso Garantido.</h1>
                            <p className="text-brand-offWhite/70 font-light mb-10">
                                Seu lugar está reservado. Agora você precisa entrar no grupo VIP para receber o link exclusivo 15 minutos antes da aula.
                            </p>

                            <a href="https://chat.whatsapp.com/vip" target="_blank" className="button-hover-effect flex items-center justify-center w-full px-8 py-4 bg-brand-orange rounded-xl text-white font-bold uppercase tracking-widest text-sm">
                                Entrar no Grupo VIP <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                        </>
                    )}

                    {status === "failed" && (
                        <>
                            <h1 className="text-3xl font-serif text-white mb-4">Ops...</h1>
                            <p className="text-brand-offWhite/70 font-light">Seu pagamento não foi aprovado. Tente novamente.</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
