/**
 * URL base da API do backend.
 * Na Vercel: defina NEXT_PUBLIC_API_URL (ex: https://seu-backend.railway.app).
 * Em desenvolvimento: usa http://localhost:8000 se não estiver definido.
 */
export const API_BASE =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
