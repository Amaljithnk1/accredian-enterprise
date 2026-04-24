# Accredian Enterprise Page (Assignment Submission)

Partial clone of [Accredian Enterprise](https://enterprise.accredian.com/) built with Next.js App Router using reusable, responsive components and a lead capture API.

## Live Demo

- [https://accredian-enterprise-chi.vercel.app](https://accredian-enterprise-chi.vercel.app)

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Framer Motion
- Next.js API Routes
- Vercel (deployment)

## Scope Implemented

- Landing page sections:
  - Navbar
  - Hero
  - Stats
  - Clients
  - Accredian Edge
  - Domain Expertise
  - Course Segmentation
  - How It Works
  - FAQs
  - Testimonials
  - Footer
- Smooth section navigation via anchor links
- Responsive UI across mobile, tablet, and desktop breakpoints
- Reusable component-based architecture
- Lead capture modal connected to `/api/leads`

## Setup Instructions

### Prerequisites

- Node.js 18+
- npm

### Run Locally

```bash
git clone <your-github-repo-url>
cd accredian-enterprise
npm install
npm run dev
```

Open `http://localhost:3000`.

### Production Build

```bash
npm run build
npm start
```

## Approach Taken

- Broke the page into independent reusable sections under `src/components`.
- Kept all static content centralized in `src/lib/constants.ts` for easy updates.
- Used utility-first Tailwind styling for consistency and faster iteration.
- Added Framer Motion transitions for subtle section-level polish.
- Implemented a simple API route (`src/app/api/leads/route.ts`) for lead submissions.

## AI Usage (Required)

AI tools were used during development to accelerate planning and implementation.

### Where AI Helped

- Generated initial component scaffolding and layout structure.
- Suggested responsive utility class patterns and animation variants.
- Helped with API route boilerplate and validation flow.
- Assisted README drafting and cleanup.

### What Was Modified/Improved Manually

- Refined section content, spacing, and visual hierarchy.
- Adjusted responsive behavior across breakpoints.
- Updated testimonial section to show all three cards, including Reliance.
- Verified build output and corrected mismatches between docs and implementation.
- Reviewed generated code and made iterative UX/content fixes.

## Improvements With More Time

- Persist leads to a real database instead of file storage.
- Add anti-spam/rate-limiting for the lead endpoint.
- Add automated tests (unit + integration + e2e).
- Improve accessibility audit (keyboard flow, contrast, ARIA review).
- Integrate analytics and conversion tracking.

## Project Structure

```text
accredian-enterprise/
├── src/
│   ├── app/
│   │   ├── api/leads/route.ts
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── Clients.tsx
│   │   ├── AccredianEdge.tsx
│   │   ├── DomainExpertise.tsx
│   │   ├── CourseSegmentation.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── FAQs.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Footer.tsx
│   │   ├── LeadModal.tsx
│   │   ├── CausticBackground.tsx
│   │   └── FloatingFish.tsx
│   └── lib/constants.ts
├── README.md
└── vercel.json
```
