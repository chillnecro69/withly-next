const { PrismaPg } = require('@prisma/adapter-pg');
try {
  const adapter = new PrismaPg({ connectionString: "postgres://..." });
  console.log("Success with object");
} catch(e) {
  console.error("Error with object:", e.message);
}
