'use client'

import { Input } from '@/components/ui/input'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent } from 'react'

export function SearchForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const query = searchParams.get('q')?.toString() ?? ''

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const term = formData.get('q') as string

    router.push(`/?q=${term}`)
  }

  return (
    <form className="flex items-center" onSubmit={handleSubmit}>
      <Input
        defaultValue={query}
        name="q"
        type="number"
        placeholder="Digite o número do patrimônio"
        className="w-80"
      />
    </form>
  )
}
