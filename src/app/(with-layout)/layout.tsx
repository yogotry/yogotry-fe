import {ReactNode} from "react";

import {BottomTab} from "@/shared/ui/BottomTab";
import {Header} from "@/shared/ui/Header";

import styles from "./layout.module.scss";

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Header/>
      </header>

      <main className={styles.layoutContent}>{children}</main>

      <div className={styles.bottomTab}>
        <BottomTab/>
      </div>
    </div>
  )
}
