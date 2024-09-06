import { eq } from 'drizzle-orm'
import { $users } from '@/server/db/schema'

export default defineEventHandler(async (event) => {
    try {
        const { name } = getQuery<{ name: string }>(event)

        const users = await db
            .select()
            .from($users)
            .where(name ? eq($users.name, name) : undefined)

        return users
    } catch (e: any) {
        throw createError({
            statusCode: 400,
            statusMessage: e.message,
        })
    }
})