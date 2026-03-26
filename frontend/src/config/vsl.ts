/**
 * VSL o mais “travado” possível no browser: use MP4/WebM + LockedPortraitVideo.
 * Fontes suportadas (ordem de prioridade):
 * 1) NEXT_PUBLIC_VSL_DIRECT_VIDEO_URL — URL completa (qualquer host, inclusive link “Copy URL” do Cloudinary)
 * 2) Cloudinary — cloud name + public id (+ transformações opcionais), sem SDK no front
 *
 * O player usa apenas <video src="...">; não é obrigatório usar o SDK da Cloudinary.
 */

function trimEnv(key: string): string {
    if (typeof process === "undefined" || !process.env[key]) return "";
    return String(process.env[key]).trim();
}

/** Monta URL de entrega de vídeo (upload resource). Documentação: video/upload */
function buildCloudinaryVslUrl(): string {
    const cloud = trimEnv("NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME");
    const publicId = trimEnv("NEXT_PUBLIC_VSL_CLOUDINARY_PUBLIC_ID");
    if (!cloud || !publicId) return "";

    const transform = trimEnv("NEXT_PUBLIC_VSL_CLOUDINARY_TRANSFORM");
    const transformSeg = transform
        ? `${transform.replace(/^\/+|\/+$/g, "")}/`
        : "";

    const id = publicId.replace(/^\/+/, "");

    return `https://res.cloudinary.com/${encodeURIComponent(cloud)}/video/upload/${transformSeg}${id}`;
}

/** URL do arquivo de vídeo linear (MP4 recomendado). */
export function resolveVslDirectVideoUrl(): string {
    const direct = trimEnv("NEXT_PUBLIC_VSL_DIRECT_VIDEO_URL");
    if (direct) return direct;
    return buildCloudinaryVslUrl();
}

export const VSL_DIRECT_VIDEO_URL = resolveVslDirectVideoUrl();

/**
 * VSL em iframe (YouTube, Vimeo, etc.): o usuário pode pular — limitação do provedor.
 * Só é usada se não houver URL de vídeo direto nem Cloudinary resolvida.
 */
export const VSL_EMBED_URL = trimEnv("NEXT_PUBLIC_VSL_EMBED_URL");
