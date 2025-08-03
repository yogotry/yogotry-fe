'use client'

import {useRouter, useSearchParams} from 'next/navigation'

import { useEffect } from 'react'

import {fetcher} from "@/shared/lib/fetcher";
import {LoadingIndicator} from "@/shared/ui/LoadingIndicator";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams()
  const code = searchParams.get('code')

  useEffect(() => {
    const login = async () => {
      const response = await fetcher('/auth/login/google', {
        body: JSON.stringify({
          code
        }),
      })
      console.log(response)

      if (response) {
        router.replace('/');
      }
    }

    if (code) {
      login()
    }
  }, [code])

  return <LoadingIndicator />
}