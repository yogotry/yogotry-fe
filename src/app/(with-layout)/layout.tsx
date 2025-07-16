import {ReactNode} from "react";

import {BottomTab} from "@/shared/ui/BottomTab";
import {Header} from "@/shared/ui/Header";

import styles from "./layout.module.scss";

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Header/>
      </div>

      <main className={styles.layoutContent}>{children}</main>

      <div className={styles.bottomTab}>
        <BottomTab/>
      </div>
    </div>
  )
}
