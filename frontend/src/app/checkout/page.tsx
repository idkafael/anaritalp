"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function CheckoutPage() {
    const searchParams = useSearchParams();

    useEffect(() => {
        async function createOrder() {
            try {
                const utm_source = searchParams.get("utm_source");
                const utm_medium = searchParams.get("utm_medium");
                const utm_campaign = searchParams.get("utm_campaign");
                const utm_content = searchParams.get("utm_content");

                const payload = {
                    product_id: "AULAO_ANA_RITA",
                    utm_source: utm_source || undefined,
                    utm_medium: utm_medium || undefined,
                    utm_campaign: utm_campaign || undefined,
                    utm_content: utm_content || undefined,
                    referrer: document.referrer || undefined
                };

                const res = await fetch("http://localhost:8000/api/order/create", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload)
                });
                const data = await res.json();

                if (data.checkout_url) {
                    window.location.href = data.checkout_url;
                } else {
                    console.error("No checkout url returned", data);
                }
            } catch (error) {
                console.error("Order creation failed", error);
            }
        }
        createOrder();
    }, [searchParams]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-brand-black text-brand-offWhite">
            <div className="w-16 h-16 border-4 border-brand-orange border-t-transparent rounded-full animate-spin mb-8"></div>
            <h1 className="text-2xl font-serif mb-2">Preparando seu ingresso...</h1>
            <p className="text-white/50 text-sm tracking-widest uppercase">Redirecionando para o ambiente seguro</p>
        </div>
    );
}
