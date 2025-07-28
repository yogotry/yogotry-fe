"use client"

import Image from "next/image";
import Link from "next/link";
import {usePathname} from 'next/navigation';

import styles from './BottomTab.module.scss';

// tab 개수 변경 시 CSS의 --tab-item-count 변경 필요
const tabs = [
  {name: '그래프', href: '/graph', icon: 'graph-gray.svg', activeIcon: 'graph-black.svg'},
  {name: '탐색', href: '/explore', icon: 'compass-gray.svg', activeIcon: 'compass-black.svg'},
  {name: '아카이브', href: '/archive', icon: 'folder-gray.svg', activeIcon: 'folder-black.svg'},
]

export function BottomTab() {
  const pathname = usePathname()
  // 현재 활성화된 탭
  const activeIndex = tabs.findIndex(tab => pathname.startsWith(tab.href))

  // 인디케이터 X 좌표 계산
  const indicatorX = `calc(${activeIndex} * var(--tab-item-width) + var(--tab-spacing) * ${activeIndex})`

  return (
    <nav className={styles.tabBar}>
      <div className={styles.indicator} style={{transform: `translateX(${indicatorX})`}}/>
      {tabs.map((tab, index) => {
        const isActive = activeIndex === index
        return <Link
          href={tab.href}
          key={tab.name}
          className={`${styles.tabBarItem} ${isActive ? styles.active : ""}`}
        >
          <Image src={`/icons/${isActive ? tab.activeIcon : tab.icon}`} alt={tab.name} width={28} height={28}/>
          {isActive && <span className={styles.tabName}>{tab.name}</span>}
        </Link>
      })}
    </nav>
  )
}
