// Content for /free-postgresql-database.
//
// Rules for this page's copy (SEO brief, 18 Oct 2026; slug override 21 Oct):
//   - Price never appears in the title, meta description, H1 or closing CTA.
//   - Title tag and meta description are taken verbatim from the brief.
//   - All FAQ answers are rendered in the server HTML (the shared Faq
//     accordion already does that with Radix's `forceMount`).
//   - No em dashes or en dashes.
//   - Do not invent what happens at 2 GB of storage, or whether an upgrade
//     keeps the same connection string. Both questions stay off the page
//     until engineering answers them.
//
// Numbers are taken from apps/site/src/lib/pricing-data.ts and
// components/sections/pricing-spec-table.tsx. When the brief and those files
// disagree, the repo wins.

export const FREE_POSTGRES_PATH = "/free-postgresql-database";

export const FREE_POSTGRES_TITLE = "Free PostgreSQL database with 2 GB storage | Prisma Postgres";

export const FREE_POSTGRES_DESCRIPTION =
  "Create a free PostgreSQL database on Prisma Postgres. Managed PostgreSQL 17 with 2 GB of storage, 200,000 operations a month and up to 50 databases. No credit card and no time limit.";

export const FREE_POSTGRES_H1 = "Create a free PostgreSQL database";

export const FREE_POSTGRES_SUBHEADLINE =
  "2 GB of storage, 200,000 operations a month (one query each), and 50 databases. Prisma Postgres works with any Postgres client.";

/** Same copy as the hero subtitle, with the three allowances in bold. */
export const FREE_POSTGRES_MARKDOWN_SUBHEADLINE =
  "**2 GB** of storage, **200,000 operations** a month (one query each), and **50 databases**. Prisma Postgres works with any Postgres client.";

/** Check lines under the buttons. Cyan, then yellow. */
export const FREE_POSTGRES_HERO_CHECKS = [
  "Instant databases are deleted in 24 hours unless claimed.",
  "A claimed database, and a database created in the Prisma Console, has no time limit.",
] as const;

export const FREE_POSTGRES_LAST_MODIFIED = "2026-10-21";

export const CONSOLE_SIGN_UP_URL = "https://console.prisma.io/sign-up";
export const CREATE_DB_WEB_URL = "https://create-db.prisma.io";
export const CREATE_DB_COMMAND = "npx create-db";

export const DOCS_CREATE_DB = "/docs/postgres/npx-create-db";
export const DOCS_FREE_LIMIT =
  "/docs/postgres/faq#what-happens-if-i-exceed-the-included-queries-on-the-free-tier";
export const DOCS_CONNECT = "/docs/postgres/database/connecting-to-your-database";
export const DOCS_EXTENSIONS = "/docs/postgres/database/postgres-extensions";
export const DOCS_REGIONS = "/docs/postgres/faq#what-regions-is-prisma-postgres-available-in";
export const DOCS_POOLING = "/docs/postgres/database/connection-pooling";
export const COMPARE_SERVERLESS = "/blog/serverless-postgres";
export const COMPARE_NEON_PRICING = "/blog/prisma-postgres-vs-neon-pricing-2026";

export type FreeFaqItem = {
  question: string;
  // Shared Faq accordion syntax: `[text](/path)` for links and backticks for
  // inline code (see lib/faq-answer.tsx).
  answer: string;
};

// Visible FAQ. Every answer here also feeds FAQPage JSON-LD (see page.tsx).
// The brief's JSON-LD is the stripped form of these strings.
export const FREE_POSTGRES_FAQ: FreeFaqItem[] = [
  {
    question: "How do I create a free PostgreSQL database?",
    answer:
      "Run [`npx create-db`](/docs/postgres/npx-create-db), or create one in the browser. You get a Postgres database and its connection string in seconds, with no account and no credit card. Claim it within 24 hours to keep it in a Free workspace, which includes 200,000 operations a month, 2 GB of storage and up to 50 databases.",
  },
  {
    question: "Is Prisma Postgres really free?",
    answer:
      "Yes. The Free plan costs $0 a month, needs no credit card and has no time limit. It includes 200,000 operations a month, 2 GB of storage and up to 50 databases per workspace. Usage resets at the start of each calendar month. You only pay if you choose to upgrade.",
  },
  {
    question: "What does the free Postgres plan include?",
    answer:
      "Each Free workspace gets managed [PostgreSQL 17](/docs/postgres) with 200,000 operations a month, 2 GB of storage, up to 50 databases, 10 pooled and 10 direct connections, unlimited data transfer, [pgvector](/docs/postgres/database/postgres-extensions) and the other supported extensions, and a choice of [six regions](/docs/postgres/faq#what-regions-is-prisma-postgres-available-in). Backups and spend limits start on the Starter plan at $10 a month.",
  },
  {
    question: "What counts as an operation?",
    answer:
      "One query is one operation, whether it is a simple read, a write or a query that joins several tables. 200,000 operations a month is about 6,600 queries a day. Idle time is never billed, so a database nobody is using costs nothing.",
  },
  {
    question: "What happens when I reach the free limit?",
    answer:
      "When a Free workspace uses its 200,000 monthly operations, its databases stop accepting queries until the allowance resets on the 1st of the next month, or until you upgrade. If you need time to export your data first, you can [restore access for 24 hours](/docs/postgres/faq#what-happens-if-i-exceed-the-included-queries-on-the-free-tier) from the Console, once per workspace. Paid plans never stop: extra operations are billed at your plan's rate, with a spend limit you control.",
  },
  {
    question: "Does a free Postgres database pause when it is idle?",
    answer:
      "Idle databases scale to zero and cost nothing on the Free plan. You never have to wake one by hand: the next query wakes it, and databases that were used recently resume in milliseconds.",
  },
  {
    question: "Can I get a free Postgres database without signing up?",
    answer:
      "Yes. Run [`npx create-db`](/docs/postgres/npx-create-db) and you get a Postgres database and its connection string in seconds, with no account and no credit card. Add `--json` when a coding agent needs machine-readable output. The database is deleted after 24 hours unless you claim it: open the claim link from the output and sign in, and it moves into your workspace under that plan's limits.",
  },
  {
    question: "Can I use the Free plan in production?",
    answer:
      "For a small app, yes, with two things to know. The Free plan has no backups, and your databases stop accepting queries if you use all 200,000 monthly operations. For an app with paying users, Starter at $10 a month adds daily backups kept for 7 days and 1 million operations, and it never stops at the limit.",
  },
  {
    question: "Do I need a credit card for a free Postgres database?",
    answer:
      "No. You can sign up for the Free plan and create databases without a credit card. You only add payment details if you upgrade to Starter, Pro or Business.",
  },
  {
    question: "Can I host my app for free as well?",
    answer:
      "Yes. The same Free plan includes [Prisma Compute](/compute), which hosts Node.js, Bun and Next.js apps next to your database. Each month you get 1 million requests, 360 GB-hours of memory, 4 active vCPU-hours and 10 GB of outbound bandwidth. An idle app scales to zero and costs nothing.",
  },
  {
    question: "How does it compare with other free Postgres tiers?",
    answer:
      "Free tiers differ in storage, how many databases you get and what happens when you go idle or reach a limit. Prisma Postgres gives 2 GB of storage, up to 50 databases, unlimited data transfer and free app hosting on the same plan. For a side by side look at Neon, Supabase, Aiven and others, see our [comparison of free Postgres hosting](/blog/serverless-postgres).",
  },
  {
    question: "Is PostgreSQL itself free?",
    answer:
      "Yes. PostgreSQL is open source under the PostgreSQL License, so it is free to use, including commercially. What you pay a provider for is hosting it: running the server, backups, connection pooling and upgrades. Prisma Postgres hosts it for free within the Free plan limits.",
  },
];

export const FREE_PLAN_FACTS = [
  {
    label: "Operations",
    value: "200,000 a month (one query is one operation)",
  },
  {
    label: "Storage",
    value: "2 GB",
  },
  {
    label: "Databases",
    value: "Up to 50 per workspace",
  },
  {
    label: "Connections",
    value: "10 pooled and 10 direct per database",
  },
  {
    label: "Data transfer",
    value: "Unlimited",
  },
  {
    label: "Engine",
    value: "PostgreSQL 17, with SSL and built-in connection pooling",
  },
  {
    label: "Extensions",
    value: "pgvector and 46 other supported extensions",
  },
  {
    label: "Regions",
    value: "Six, in the US, Europe and Asia",
  },
  {
    label: "Tools",
    value: "Query Insights and Prisma Studio",
  },
  {
    label: "Payment",
    value: "No credit card, no time limit",
  },
  {
    label: "Usage reset",
    value: "The 1st of every month",
  },
  {
    label: "Backups",
    value: "None on Free. Daily backups start on Starter.",
  },
] as const;

export const BUILD_CARDS = [
  {
    title: "Side projects and prototypes",
    body: "A real Postgres for the weekend idea, not SQLite. Standard SQL and a connection string you can paste into any client.",
  },
  {
    title: "AI apps with embeddings",
    body: "pgvector is on the Free plan. Store embeddings and run similarity search without a separate vector database.",
  },
  {
    title: "Throwaway databases for coding agents",
    body: "Claude Code, Cursor and Codex can create them through MCP or `npx create-db --json`.",
  },
  {
    title: "Tests, demos and learning",
    body: "Give each experiment its own database. A Free workspace can hold up to 50.",
  },
] as const;

export const UPGRADE_POINTS = [
  {
    plan: "Starter, $10 a month",
    body: "1 million operations, 10 GB of storage, daily backups kept 7 days, a spend limit, and no stop at the limit.",
  },
  {
    plan: "Pro, $49 a month",
    body: "10 million operations, 50 GB of storage, and 500 pooled connections.",
  },
  {
    plan: "Business, $129 a month",
    body: "50 million operations, 100 GB of storage, 30-day backups, HIPAA with a BAA, SOC 2 Type II and ISO 27001.",
  },
] as const;

// The filled hero button is the action the window types. Get started stays
// the account path, as the outline button. The closer keeps its own label.
export const FREE_POSTGRES_HERO_PRIMARY_CTA = {
  label: "Create an instant database",
  href: CREATE_DB_WEB_URL,
} as const;

export const FREE_POSTGRES_HERO_SECONDARY_CTA = {
  label: "Get started",
  href: CONSOLE_SIGN_UP_URL,
} as const;

export const FREE_POSTGRES_PRIMARY_CTA = {
  label: "Create a free database",
  href: CONSOLE_SIGN_UP_URL,
} as const;

export const FREE_POSTGRES_PRICING_CTA = {
  label: "See pricing",
  href: "/pricing",
} as const;

// Hero window. First tab is a plain terminal. Then Claude, Codex, Cursor, and
// Copilot, each on the same light surface. Credentials are fake, not a live
// password or claim URL.
export const FREE_POSTGRES_TERMINAL_TABS = [
  "Terminal",
  "Claude",
  "Codex",
  "Cursor",
  "Copilot",
] as const;
export const FREE_POSTGRES_TERMINAL_STATUS = "Setting up a database";
export const FREE_POSTGRES_TERMINAL_CLAIM =
  "The database is deleted after 24 hours unless you claim it.";
export const FREE_POSTGRES_CLI_CONNECTION =
  "postgres://demo:sample@db.prisma.io:5432/postgres?sslmode=require";
export const FREE_POSTGRES_CLI_CLAIM_URL =
  "https://create-db.prisma.io/claim?projectID=proj_sample";

// Claude Code transcript. Region is one of the six documented regions, shown
// as this example run's result. The claim sentence matches the FAQ.
export const FREE_POSTGRES_CLAUDE = {
  product: "Claude Code",
  model: "Opus",
  directory: "~/app",
  tool: "Ran a shell command",
  created: "The database was created.",
  connectionLabel: "Connection string",
  region: "eu-central-1 (Frankfurt)",
  claim: FREE_POSTGRES_TERMINAL_CLAIM,
} as const;

// Codex CLI session. The model line names the product surface, not a version.
export const FREE_POSTGRES_CODEX = {
  product: "OpenAI Codex",
  model: "CLI",
  directory: "~/app",
  tool: "Ran a shell command",
  created: "The database was created.",
  connectionLabel: "Connection string",
  region: "eu-central-1 (Frankfurt)",
  claim: FREE_POSTGRES_TERMINAL_CLAIM,
} as const;

// Cursor agent panel. The user message is the command. The tool line is Terminal.
export const FREE_POSTGRES_CURSOR = {
  product: "Cursor",
  mode: "Agent",
  directory: "~/app",
  tool: "Terminal",
  created: "The database was created.",
  connectionLabel: "Connection string",
  region: "eu-central-1 (Frankfurt)",
  claim: FREE_POSTGRES_TERMINAL_CLAIM,
} as const;

// GitHub Copilot chat. The user message sits on the right. The reply runs the command.
export const FREE_POSTGRES_COPILOT = {
  product: "GitHub Copilot",
  mode: "Chat",
  directory: "~/app",
  tool: "Ran a terminal command",
  created: "The database was created.",
  connectionLabel: "Connection string",
  region: "eu-central-1 (Frankfurt)",
  claim: FREE_POSTGRES_TERMINAL_CLAIM,
} as const;

export const FREE_POSTGRES_PROBLEM_HEADLINE = "How the free limit works";

// The free-plan limit. The catch is the stop. The panel then says what a
// query counts as, the monthly and daily pace, and that idle is free.
// "about 6,600" is the page's round number for the daily pace. The docs FAQ
// is the source for the stop, the 1st, the upgrade, and the one-time restore.
// Nothing here says what happens at 2 GB of storage.
export const FREE_POSTGRES_LIMIT = {
  catch:
    "Queries stop at 200,000 operations until the 1st of the next month, or until you upgrade.",
  counts: "One query is one operation: a simple read, a write, or a join.",
  monthFigure: "200,000",
  monthLabel: "operations a month",
  dayFigure: "about 6,600",
  dayLabel: "queries a day",
  idle: "Idle is free. A quiet database costs nothing, and the next query wakes it.",
  restore: "Once, you can restore access for 24 hours in the Console and export first.",
  paid: `On a paid plan this stop does not happen. Extra operations are billed, and you set a spend limit. Read the [docs FAQ on the free limit](${DOCS_FREE_LIMIT}).`,
} as const;

// The next section. Three rough days, stepped up. "about" marks each figure
// as approximate. The restaurant is past about 6,600 a day, so it needs a
// paid plan. Not a measured workload.
export const FREE_POSTGRES_CASES_HEADLINE = "Roughly, in a day";

export const FREE_POSTGRES_CASES = [
  { name: "A personal blog", count: "about 40", tail: "a day." },
  { name: "An online shop for a local bakery", count: "about 300", tail: "a day." },
  {
    name: "A restaurant taking orders online",
    count: "about 10,000",
    tail: "a day. It needs a paid plan.",
  },
] as const;

export const STORAGE_CONFIRM = "What happens when a database reaches 2 GB of storage.";
export const CONNECTION_CONFIRM = "Whether upgrading a workspace keeps the same connection string.";

export const FREE_POSTGRES_FEATURES_HEADLINE = "What a free PostgreSQL database includes";

export type FreePostgresIncludedCard = {
  /** The amount, or the short name when the allowance is not a number. */
  title: string;
  detail: string;
  /** Footnote marker on this card. */
  note?: number;
};

// The three headline allowances. Rules sit in FREE_POSTGRES_INCLUDED_NOTES.
export const FREE_POSTGRES_INCLUDED_CARDS: readonly FreePostgresIncludedCard[] = [
  { title: "2 GB", detail: "of [storage](/pricing), enough for a real schema and sample rows." },
  {
    title: "200,000",
    detail: "[operations](/pricing) a month. One query is one operation.",
    note: 1,
  },
  {
    title: "Up to 50",
    detail: `[databases](/pricing). A fresh database per app, branch, or experiment with [npx create-db](${DOCS_CREATE_DB}).`,
  },
];

export type FreePostgresIncludedRow = {
  label: string;
  value: string;
};

export const FREE_POSTGRES_INCLUDED_ROWS: readonly FreePostgresIncludedRow[] = [
  {
    label: "Connections",
    value:
      "10 pooled for the app, and 10 direct for migrations, Studio, and pg_dump, per database.",
  },
  { label: "Data transfer", value: "No meter on what the database sends or receives." },
  {
    label: "Postgres",
    value: `Version 17, encrypted in transit, with a pooler and a [connection string](${DOCS_CONNECT}).`,
  },
  {
    label: "Extensions",
    value: `[pgvector](${DOCS_EXTENSIONS}) for similarity search, plus pg_search, pg_trgm, and pgcrypto.`,
  },
  {
    label: "Regions",
    value: `Put the database near the app, in [one of six](${DOCS_REGIONS}).`,
  },
  { label: "Query Insights", value: "Shows which queries are slow and why." },
  { label: "Prisma Studio", value: "A data browser for viewing and editing rows." },
  {
    label: "Prisma Compute",
    value:
      "Host a Node.js, Bun, or Next.js app next to this database: 1 million requests, 360 GB-hours of memory, and 4 active vCPU-hours a month.",
  },
  { label: "App outbound", value: "10 GB a month. Separate from the database." },
  {
    label: "Prisma ORM",
    value: "Any Postgres client works. The typed client, on this same database.",
  },
];

export const FREE_POSTGRES_INCLUDED_NOTES = [
  { n: 1, text: "Operations reset on the 1st of every month." },
  { n: 2, text: "No backups. Daily backups start on Starter and are kept for 7 days." },
] as const;

export const FREE_POSTGRES_FEATURE_ITEMS = [
  {
    name: "What developers build on it",
    description:
      "Side projects, agent experiments, and small apps. Prototypes, tests, and coding agents too.",
    illustration: "runApps",
  },
  {
    name: "When to upgrade",
    description:
      "Backups, a spend limit, or compliance. Paid plans take a daily snapshot on days the database is used. [HIPAA](/postgres/hipaa), SOC 2, and ISO 27001 are on Business. The plan grid is on [pricing](/pricing).",
    illustration: "compliance",
  },
] as const;

export const FREE_POSTGRES_PLATFORM_BODY =
  "Host your app for free, too. The same Free plan includes [Prisma Compute](/compute) for Node.js, Bun and Next.js apps: 1 million requests, 360 GB-hours of memory, 4 active vCPU-hours and 10 GB of outbound bandwidth a month. App and database live in one project, with one config. Declare the app and the database together. An idle app scales to zero.";

export const FREE_POSTGRES_COMPARE_INTRO =
  "Comparing free Postgres options? Free tiers differ in storage, how many databases you get, and what happens when you are idle or reach a limit.";

export const FREE_POSTGRES_COMPARE_NOTE = `For a longer look at serverless Postgres providers, read the [comparison of free Postgres hosting](${COMPARE_SERVERLESS}) and the [Prisma Postgres vs Neon pricing](${COMPARE_NEON_PRICING}) post. Extensions and regions are in the [extensions](${DOCS_EXTENSIONS}) and [regions](${DOCS_REGIONS}) docs. Connection pooling is [built in](${DOCS_POOLING}).`;

export const FREE_POSTGRES_CLOSER_HEADLINE = "Create your free database";

export const FREE_POSTGRES_CLOSER_BODY =
  "A managed PostgreSQL 17 database in seconds. Paste the connection string into any Postgres client, then claim it into a Free workspace when you want to keep it.";

export const FREE_POSTGRES_CLOSER_BENEFITS = [
  "npx create-db, no account needed",
  "Works with any Postgres client",
  "Claim it within 24 hours",
] as const;
