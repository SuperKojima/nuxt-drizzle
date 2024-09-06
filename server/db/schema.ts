import { pgTable, text, integer, timestamp, serial } from 'drizzle-orm/pg-core'

export const $users = pgTable('users', {
    id: integer('id').primaryKey().notNull(),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    password: text('password').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
})
