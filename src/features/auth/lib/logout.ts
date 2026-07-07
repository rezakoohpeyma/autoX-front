import { routes } from '@/config/routes';
import { REFRESH_TOKEN, TOKEN } from './token';

export async function handleLogout() {
    if (typeof window === 'undefined') {
        const { cookies } = await import('next/headers');
        const { redirect } = await import('next/navigation');
        const cookiesStore = await cookies();
        cookiesStore.delete(TOKEN);
        cookiesStore.delete(REFRESH_TOKEN);
        redirect(routes.signIn);
    } else {
        const { default: cookies } = await import('js-cookie');
        cookies.remove(TOKEN);
        cookies.remove(REFRESH_TOKEN);
        window.location.assign(routes.signIn);
    }
}