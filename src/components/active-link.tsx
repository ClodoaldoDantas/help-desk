'use client'

import { cn } from '@/lib/utils'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface ActiveLinkProps extends LinkProps {
  className?: string
  children: ReactNode
}

export function ActiveLink({ className, children, ...props }: ActiveLinkProps) {
  const { href } = props
  const pathname = usePathname()

  const isActive = pathname === href

  return (
    <Link
      className={cn(
        className,
        { 'text-primary': isActive },
        { 'text-muted-foreground hover:text-primary': !isActive }
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
