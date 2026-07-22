
interface EnvType {
    API_BASE_URL: string | undefined,
    SITE_URL?: string,
}

export  const env: EnvType = {
    API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
}