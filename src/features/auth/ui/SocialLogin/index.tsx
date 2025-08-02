import { ReactNode } from 'react';

import { GoogleLoginButton } from './GoogleLoginButton';
import styles from './SocialLogin.module.scss';

type Props = {
    children: ReactNode;
};

function SocialLoginRoot({ children }: Props) {
    return <div className={styles.wrapper}>{children}</div>;
}

export const SocialLogin = Object.assign(SocialLoginRoot, {
    Google: GoogleLoginButton,
});