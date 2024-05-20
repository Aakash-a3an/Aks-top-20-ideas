import { integer, pgTable, serial } from "drizzle-orm/pg-core";
import { varchar } from "drizzle-orm/pg-core";

export const Ideas = pgTable('ideas', {
  id: serial('id').primaryKey(),
  content: varchar('content').notNull(),
  username: varchar('username').notNull(),
  vote: integer('vote').default(0),
  createdAt: varchar('createdAt').notNull(),
});