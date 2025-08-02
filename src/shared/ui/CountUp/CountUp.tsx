"use client"

import { useEffect, useRef, useState } from 'react';

export function CountUp({ target }: { target: number }) {
    const [count, setCount] = useState(0);
    const frame = useRef<number>(null);

    useEffect(() => {
        const duration = 1000; // 애니메이션 시간 (ms)
        const start = performance.now();

        const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = easeOutQuad(progress);
            const current = Math.floor(eased * target);
            setCount(current);

            if (progress < 1) {
                frame.current = requestAnimationFrame(animate);
            }
        };

        frame.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame.current!);
    }, [target]);

    const formatNumber = (num: number) => num.toLocaleString();

    return <span>{formatNumber(count)}</span>;
}

// 부드러운 감속 효과
function easeOutQuad(t: number) {
    return t * (2 - t);
}