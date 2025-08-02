import Image from "next/image";

import {SocialLogin} from "@/features/auth/ui/SocialLogin";
import {CountUp} from "@/shared/ui/CountUp";

import styles from "./page.module.scss";

export default function Page() {
    return (
        <div className={styles.root}>
            <Image
                src="/images/logo.webp"
                alt="Logo"
                width={100}
                height={100}
                className={styles.logo}
            />
            <h1 className={styles.title}>Yogotry</h1>
            <h2 className={styles.subtitle}>
                로그인 하시고<br />
                <CountUp target={100000} />개 이상의 컨텐츠를<br />
                추천받아보세요.
            </h2>

            <hr className={styles.hr} />
            <SocialLogin>
                <SocialLogin.Google/>
            </SocialLogin>
        </div>
    )
}