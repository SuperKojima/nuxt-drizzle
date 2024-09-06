import { $users } from '@/server/db/schema'

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        console.log(body)

        const newUser = await db
            .insert($users)
            .values(body)
            .returning()

        return newUser[0]
    } catch (e: any) {
        throw createError({
            statusCode: 500,
            statusMessage: e.message,
        })
    }
})