"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

/** Tempo mínimo de VSL (s) antes de exibir o CTA fixo no mobile. */
export const VSL_MOBILE_CTA_AFTER_SECONDS = 120;

/** Tempo de VSL (s) antes de liberar prova social, escassez e rodapé. */
export const VSL_REST_UNLOCK_AFTER_SECONDS = 300;

type VslWatchContextValue = {
    /** Segundos acumulados com a VSL “ativa” (reproduzindo MP4 ou embed visível). */
    watchedSeconds: number;
    addWatchedSeconds: (delta: number) => void;
};

const VslWatchContext = createContext<VslWatchContextValue | null>(null);

export function VslWatchProvider({ children }: { children: ReactNode }) {
    const [watchedSeconds, setWatchedSeconds] = useState(0);

    const addWatchedSeconds = useCallback((delta: number) => {
        if (delta <= 0) return;
        setWatchedSeconds((s) => s + delta);
    }, []);

    const value = useMemo(
        () => ({ watchedSeconds, addWatchedSeconds }),
        [watchedSeconds, addWatchedSeconds]
    );

    return <VslWatchContext.Provider value={value}>{children}</VslWatchContext.Provider>;
}

export function useVslWatch() {
    const ctx = useContext(VslWatchContext);
    if (!ctx) {
        throw new Error("useVslWatch deve ficar dentro de VslWatchProvider");
    }
    return ctx;
}
