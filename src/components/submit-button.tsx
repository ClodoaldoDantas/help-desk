'use client'

import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button'
import { Loader2Icon, SaveIcon } from 'lucide-react'

export function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus()

  return (
    <Button disabled={pending} type="submit">
      {pending ? (
        <Loader2Icon className="size-5 mr-2 animate-spin" />
      ) : (
        <SaveIcon className="size-5 mr-2" />
      )}

      {label}
    </Button>
  )
}
