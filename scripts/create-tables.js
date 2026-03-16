const { Client } = require("pg");

const connectionString =
  "postgresql://postgres.makcyozqwhhxqglfimfo:%3F%2BcEQrTRr4kYuLn@aws-1-ap-northeast-2.pooler.supabase.com:6543/postgres";

const sql = `
CREATE TABLE IF NOT EXISTS "User" (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  name TEXT,
  email TEXT UNIQUE,
  "emailVerified" TIMESTAMPTZ,
  image TEXT,
  bio TEXT,
  interests TEXT,
  city TEXT DEFAULT 'Pune',
  "createdAt" TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "Account" (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "userId" TEXT NOT NULL REFERENCES "User"(id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  provider TEXT NOT NULL,
  "providerAccountId" TEXT NOT NULL,
  refresh_token TEXT,
  access_token TEXT,
  expires_at INT,
  token_type TEXT,
  scope TEXT,
  id_token TEXT,
  session_state TEXT,
  UNIQUE(provider, "providerAccountId")
);

CREATE TABLE IF NOT EXISTS "Session" (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "sessionToken" TEXT UNIQUE NOT NULL,
  "userId" TEXT NOT NULL REFERENCES "User"(id) ON DELETE CASCADE,
  expires TIMESTAMPTZ NOT NULL
);

CREATE TABLE IF NOT EXISTS "VerificationToken" (
  identifier TEXT NOT NULL,
  token TEXT UNIQUE NOT NULL,
  expires TIMESTAMPTZ NOT NULL,
  UNIQUE(identifier, token)
);

CREATE TABLE IF NOT EXISTS "Plan" (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  location TEXT NOT NULL,
  city TEXT DEFAULT 'Pune',
  "dateTime" TIMESTAMPTZ NOT NULL,
  "maxParticipants" INT DEFAULT 5,
  "hostId" TEXT NOT NULL REFERENCES "User"(id),
  "createdAt" TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "Participant" (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "planId" TEXT NOT NULL REFERENCES "Plan"(id) ON DELETE CASCADE,
  "userId" TEXT NOT NULL REFERENCES "User"(id) ON DELETE CASCADE,
  "joinedAt" TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE("planId", "userId")
);
`;

async function main() {
  const c = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });

  try {
    await c.connect();
    console.log("Connected to Supabase!");
    await c.query(sql);
    console.log("All tables created successfully!");
  } catch (e) {
    console.error("Error:", e.message);
  } finally {
    await c.end();
  }
}

main();
