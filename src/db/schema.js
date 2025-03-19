import { integer, pgTable, varchar, timestamp, boolean, text } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
    pid: integer().primaryKey().generatedAlwaysAsIdentity(),
    handle: varchar({length: 50 }).notNull().unique(),
    knownas: varchar({ length: 50 }).notNull(),
    accentcolor: varchar({length: 10}),
    group: varchar({ length: 50 }),
    email: varchar({ length: 255 }).notNull().unique(),
    avatar: varchar({ length: 355 }),
    avatarlong: varchar({ length: 355 }),
    bio: varchar({ length: 500 }),
    biolong: text(),
    links: text(),
    chzzkid: varchar({length:100}),
    bskyhandle: varchar({length:100}),
    createdat: timestamp().notNull(),
    lastlogin: timestamp(),
})

export const videos = pgTable('videos', {
    pid: integer().primaryKey().generatedAlwaysAsIdentity(),
    url: varchar({length: 100 }).notNull(),
    title: varchar({ length: 100 }).notNull(),
    owner: integer().notNull(),
    category: varchar({length: 10}),
})
