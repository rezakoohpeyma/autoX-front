import { useMutation } from "@tanstack/react-query";
import { signIn as signInApi } from "../api/mutations";
import { useRouter } from "next/navigation";
import { routes } from "@/config/routes";
import { toast } from "react-toastify";
import { setTokens } from "../lib/token";

export default function useSignIn() {
    const router = useRouter();
    const { mutate, isPending } = useMutation({
        mutationKey: ['user'],
        mutationFn: signInApi,
        onSuccess(res){
            console.log(res)
            toast.success(`Welcome back, ${res.data.user.firstName}!`, {
                className: "capitalize"
            })
            setTokens(res.data.token,  res.data.refreshToken)
            router.push(routes.dashboard)
        },
        onError(error){
            toast.error(error.message)
            console.log(error.message)
        }
    })    

    return {
        signIn: mutate,
        isSignInLoading: isPending,
    }
}

