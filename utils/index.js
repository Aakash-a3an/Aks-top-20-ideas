import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

const sql = neon("postgresql://neondb_owner:ivOnyJQjY2V8@ep-small-paper-a1i8xmzr.ap-southeast-1.aws.neon.tech/top20Idea?sslmode=require");
export const db = drizzle(sql,{schema});
