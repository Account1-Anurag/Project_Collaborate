import Fastify from 'fastify';

const app = Fastify();

// Mock: offered=csv, required=csv -> score by intersection size
app.get('/match', async (req, reply) => {
  const query = req.query as any;
  const offered = (query.offered?.split(',') ?? []).map((s: string) => s.trim().toLowerCase());
  const required = (query.required?.split(',') ?? []).map((s: string) => s.trim().toLowerCase());
  const set = new Set(offered);
  const overlap = required.filter((r: string) => set.has(r));
  const score = Math.min(100, overlap.length * 20);
  return { score, overlap };
});

app.listen({ port: 4001, host: '0.0.0.0' })
  .then((addr) => console.log('match service on', addr))
  .catch((err) => { console.error(err); process.exit(1); });