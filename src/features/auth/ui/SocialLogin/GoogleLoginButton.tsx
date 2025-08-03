"use client"

import Image from "next/image";

import {cn} from "@/shared/lib/cn";
import {Button} from "@/shared/ui/Button";

import styles from './SocialLogin.module.scss';

type Props = {
    iconOnly?: boolean;
    isLoading?: boolean;
};

export const GoogleLoginButton = ({ iconOnly = false, isLoading = false }: Props) => {
    const redirectToGoogle = () => {
        const params = new URLSearchParams({
            client_id: `${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`,
            redirect_uri: `${process.env.NEXT_PUBLIC_FE_URL}/login/google/callback`,
            response_type: 'code',
            scope: 'openid email profile',
        })

        window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`
    }

    return (
        <Button
            className={cn(
                styles.button,
                iconOnly && styles.iconOnly,
                isLoading && styles.loading
            )}
            variant="outline"
            onClick={redirectToGoogle}
            disabled={isLoading}
        >
            <Image src="/icons/google-logo.svg" alt="Google Login" width={24} height={24} />
            <p>구글 계정으로 계속하기</p>
        </Button>
    );
};