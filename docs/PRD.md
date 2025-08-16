## Skill Exchange Platform PRD

### Introduction
A cross-platform marketplace where users exchange skills instead of money. Users earn Skill Points by helping others and spend them to request help. The platform supports web and mobile with real-time collaboration and extensible architecture.

### Problem Statement
Learning by doing requires collaborators with complementary skills. Traditional freelance platforms are money-first and high-friction. Communities lack structure for fair exchange and trust.

### Solution Overview
- Profiles list Offered Skills and Required Skills
- Matching system suggests complementary partners and projects
- In-app messaging and collaboration integrations
- Reputation and Feedback to build trust
- Skill Points economy for balanced exchanges
- Modular, scalable architecture to add AI matching, premium tiers, and forums later

### Core User Stories (MVP)
- As a user, I can sign up quickly (SSO/email) and select offered/required skills
- I can browse and post projects with skills needed and duration
- I receive matches for collaborators based on complementary skills
- I can chat via external providers (Discord/WhatsApp) in MVP
- I can earn Skill Points when I complete tasks; spend points to request help
- I can leave feedback and see reputation scores
- Admin can monitor join requests, abuse reports, and platform health

### Feature Breakdown (MVP)
- Auth: Google/GitHub OAuth + email/password (placeholder in MVP)
- Profiles: name, bio, offered skills, required skills, badges
- Projects: browse/search/filter, post, details, join requests
- Matching: rule-based matching from offered ↔ required skills (MVP); pluggable AI later
- Chat: deep-link to Discord/WhatsApp (MVP); in-app WebSocket chat later
- Skill Points: simple ledger and balances (MVP design only)
- Reputation: 1–5 rating + review with weight by points and recency
- Admin: moderation (join requests), dashboards, metrics

### Information Architecture
- Users
- Projects
- Skills
- Matches
- Messages (future)
- Transactions (Skill Points)
- Reviews/Reputation

### Data Model (simplified)
- User: id, name, username, bio, offeredSkills[], requiredSkills[], pointsBalance, badges[]
- Project: id, title, description, tech[], skillsNeeded[], creatorId, team[], status, duration, experience, expectedTeamSize
- Match: id, userAId, userBId, score, reason, createdAt
- Transaction: id, userId, deltaPoints, reason, projectId?, createdAt
- Review: id, reviewerId, revieweeId, rating, comment, projectId, createdAt

### Wireframes (low-fidelity)
See wireframes.md for ASCII mockups of:
- Onboarding & Skill Selection
- Profile (Offered + Required)
- Skill Match Dashboard
- Chat/Collaboration
- Reputation & Feedback
- Admin Dashboard

### Tech Stack (MVP)
- Web: Next.js 14 (App Router), TypeScript, Tailwind CSS
- Mobile: Expo/React Native (TypeScript)
- API: Next.js route handlers initially; plan Fastify microservices (Node 20) later
- DB: PostgreSQL (Prisma). Redis for caching/queues. Optionally Neon/Supabase hosted
- Realtime: Socket.IO or WebSocket (later). MVP uses external chat links
- Auth: NextAuth.js (later). MVP placeholders
- Infra: Vercel for web, Fly.io/Render for services, Railway/Neon for Postgres
- Observability: OpenTelemetry, Log drains, Sentry

### Scalability Approach
- Domain-driven modular services: users, projects, matches, chat, transactions, reviews
- Event-driven via message bus (e.g., NATS/Kafka) for decoupling
- Read models and caches for hot paths; CloudFront CDN for static assets
- Horizontal scaling with stateless services; sticky sessions only for WS if needed
- Pagination, rate-limiting, backpressure on queues

### Security Considerations
- OAuth 2.0/OpenID Connect; rotate secrets; secure cookie sessions; CSRF
- Input validation and output encoding; strict CSP; HTTPS everywhere; HSTS
- RBAC for admin endpoints; audit logs for sensitive actions
- Least-privilege DB roles; parameterized queries; secret management (e.g., Doppler)
- Abuse prevention: rate limits, bot detection, content moderation queues

### Roadmap
- Phase 1 (MVP, 2–3 weeks): Auth placeholder, Profiles, Projects, Browse, Matching (rule-based), External chat, Admin basics
- Phase 2: DB + Prisma, Auth integration, Points ledger, Reviews
- Phase 3: Realtime chat, AI matching, Premium memberships, Community forums