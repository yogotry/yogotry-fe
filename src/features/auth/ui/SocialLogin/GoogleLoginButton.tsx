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
    const handleClick = () => {
        if (isLoading) return;
        const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI;
        window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/oauth/google?redirect_uri=${redirectUri}`;
    };

    return (
        <Button
            className={cn(
                styles.button,
                iconOnly && styles.iconOnly,
                isLoading && styles.loading
            )}
            variant="outline"
            onClick={handleClick}
            disabled={isLoading}
        >
            <Image src="/icons/google-logo.svg" alt="Google Login" width={24} height={24} />
            <p>구글 계정으로 계속하기</p>
        </Button>
    );
};