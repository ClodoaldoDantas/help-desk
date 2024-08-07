import { getUser } from '@/actions/get-user'
import { Action, hasPermission } from '@/shared/permissions'
import { ReactNode } from 'react'

type CanProps = {
  children: ReactNode
  action: Action
}

export async function Can({ action, children }: CanProps) {
  const { user } = await getUser()
  const userCan = hasPermission(user!.role, action)

  if (!userCan) {
    return null
  }

  return <>{children}</>
}
