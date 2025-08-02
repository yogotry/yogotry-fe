"use client"

import {UserRound} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import styles from './Header.module.scss';

export function Header() {
  return (
    <>
      <Link
        href="/"
      >
        <Image
          src={"/images/logo.webp"}
          alt={"yogotry"}
          className={styles.logo}
          width={32}
          height={32}
        />
      </Link>

      <Link
        href="/profile"
      >
        <UserRound className={styles.profile}/>

      </Link>
    </>
  )
}
