# Adeyinka Peluola — portfolio site

A small Next.js site for writing, research, organic promotion, and customer support services. The design is intentionally editorial: warm paper background, one serif display face, one sans body face, and no placeholder stats or testimonials.

## Run locally

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

```bash
pnpm build
pnpm start
```

## Where things live

- `lib/site-config.ts` — name, bio, location, availability, nav links, contact details.
- `lib/data/services.ts` — services, descriptions, and section copy.
- `lib/data/skills.ts` — skill groups shown on the homepage.
- `lib/actions/inquiry.ts` — contact form validation. Delivery is not connected yet; the form prepares an email or WhatsApp message.

Empty contact fields are hidden rather than shown as "coming soon". Add a real email or WhatsApp number in `lib/site-config.ts` to enable those links.
