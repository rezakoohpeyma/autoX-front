import { useMutation } from "@tanstack/react-query";
import { signIn as signInApi } from "../api/mutations";
import { saveTokens } from "../lib/utils";
import { useRouter } from "next/navigation";
import { routes } from "@/config/routes";
import { toast } from "react-toastify";

export default function useSignIn() {
    const router = useRouter();
    const { mutate, isPending } = useMutation({
        mutationKey: ['user'],
        mutationFn: signInApi,
        onSuccess(data){
            toast.success(`Welcome back, ${data.user.firstName}!`, {
                className: "capitalize"
            })
            saveTokens(data.token, data.refreshToken)
            router.push(routes.dashboard)
        },
        onError(error){
            toast.error(error.message)
        }
    })    

    return {
        signIn: mutate,
        isSignInLoading: isPending,
    }
}

