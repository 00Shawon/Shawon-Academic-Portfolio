import theGalleryImg1 from '../assets/The Gallery/Screenshot 2026-01-05 064548.png';
import tripHubImg1 from '../assets/Trip Hub/Screenshot 2026-01-05 152423.png';

export const journeyData = [
  {
    id: 1,
    title: "The Interface Is The Message",
    description: "Four years studying journalism because I believed stories shape reality. Then I analyzed Facebook privacy violations for my thesis—surveying 141 Bangladeshi university students and discovering that <strong>89.4% activated privacy settings yet 40.4% remained publicly exposed</strong>. The interface was telling a story more powerful than any article. Every notification placement, color choice, and interaction pattern was shaping perception—not due to user negligence, but structural interface complexity designed for different contexts.",
    quote: "That's when I stopped being a journalist who codes and became a researcher who builds systems to understand digital inequality."
  },
  {
    id: 2,
    title: "Building Trust Through Design",
    description: "After my thesis, I taught myself React and built a ticket booking platform. During user testing, I watched someone hover over 'Pay Now' for <strong>47 seconds</strong>. She wasn't evaluating my code—she was deciding whether to trust a stranger with her money. That moment clarified everything: <strong>design decisions influence user behavior at moments of vulnerability</strong>. Typography, color palettes, iconography, and interface feedback shape whether users feel informed and respected.",
    quote: "What makes a digital transaction feel trustworthy versus extractive? This gap between technical execution and emotional experience became central to my work."
  },
  {
    id: 3,
    title: "The Sundarbans Project",
    description: "Bangladesh produces <0.5% of global greenhouse gas emissions yet faces catastrophic climate vulnerability. I'm building an interactive platform documenting how <strong>Global North emissions materialize as Global South dispossession</strong>—combining geospatial data visualization, documentary storytelling, and field research conducted in Bangla with coastal communities. Starting with Gabura village, centering community voices as knowledge producers rather than extracting data for external consumption.",
    quote: "How do we communicate ecological crisis in ways that don't collapse tropical displacement into Western-centric narratives centered on Arctic ice?"
  },
  {
    id: 4,
    title: "Decolonial Design Practice",
    description: "Designed a digital experience for South Asian Muslim wedding ceremonies in four languages—Arabic, Urdu, Bangla, and English—where <strong>each carries equal visual and narrative weight</strong>. Instead of treating Arabic as RTL 'exception' or Bangla as 'translation,' the architecture positions each language as foundational design logic. This required systematic override of framework defaults that assume Latin-script primacy.",
    quote: "What does digital sovereignty look like at the interface level? What design methodologies emerge when we reject the assumption that English is primary?"
  },
  {
    id: 5,
    title: "Why Graduate Study",
    description: "My research began with analyzing how Western-designed interfaces systematically fail users in Global South contexts. Professional experience as frontend developer for UK-based tech company exposed the material reality of digital divides—<strong>applications loading in 2 seconds in London took 18 seconds in Khulna</strong>, not as technical failure but as infrastructural inequality. Graduate study is where these experiences become rigorous research—where <strong>critical platform analysis, decolonial design methodologies, and community-engaged inquiry</strong> merge into a unified practice.",
    quote: "How do technologies designed in Silicon Valley undergo spatial transformation when deployed elsewhere? That's the question I'm ready to explore through research."
  }
];

export const projectsData = [
  {
    title: "The Gallery",
    subtitle: "Artist Portfolio Platform",
    tag: "MERN Stack • Dec 2024",
    description: "Full-stack application enabling artists to showcase portfolios, curate favorites, and engage through social features. Built on the principle that creators need participatory tools, not just galleries.",
    image: theGalleryImg1,
    features: [
      { title: "Secure CRUD with JWT Authorization", desc: "User-specific galleries, pre-filled update modals, soft-delete flows" },
      { title: "Server-Side Search & Filtering", desc: "MongoDB aggregation pipelines for category filtering" },
      { title: "Real-Time Social Engagement", desc: "Atomic like updates using MongoDB $inc" }
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind"],
    colors: "from-accent/20 to-secondary/20"
  },
  {
    title: "Trip Hub",
    subtitle: "Online Ticket Booking Platform",
    tag: "MERN Stack • Jan 2025",
    description: "Comprehensive travel booking system featuring secure payments, fraud detection, and multi-role dashboards (Admin, Vendor, User). Designed for seamless participatory travel planning.",
    image: tripHubImg1,
    features: [
      { title: "Stripe Payment Integration", desc: "Secure transaction processing with automated booking confirmation" },
      { title: "Advanced Dashboard UI", desc: "Role-specific analytics and management systems for vendors and admins" },
      { title: "Real-time Availability", desc: "Optimistic booking updates and seat selection synchronization" }
    ],
    tech: ["React", "Node.js", "Stripe", "MongoDB", "Axios", "TanStack Query"],
    colors: "from-secondary/20 to-accent/20"
  }
];
