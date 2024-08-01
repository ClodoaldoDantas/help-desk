import db from '@/lib/db'
import { auth } from '@clerk/nextjs/server'

export async function getUser() {
  const { userId } = auth()

  if (!userId) {
    return { user: null }
  }

  const user = await db.user.findFirst({
    where: {
      clerkUserId: userId,
    },
  })

  if (!user) {
    return { user: null }
  }

  return { user }
}
