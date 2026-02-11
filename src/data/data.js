import theGalleryImg1 from '../assets/The Gallery/Screenshot 2026-01-05 064548.png';
import tripHubImg1 from '../assets/Trip Hub/Screenshot 2026-01-05 152423.png';

export const journeyData = [
  {
    id: 1,
    title: "The Interface Is The Message",
    description: "Four years studying journalism because I believed stories shape reality. Then I analyzed privacy related issue for my thesis—and discovered <strong>the interface was telling a story more powerful than any article</strong>. Every notification placement, color choice, and interaction pattern was shaping perception. Marshall McLuhan was right: we shape our tools, then our tools shape us.",
    quote: "That's when I stopped being a journalist who codes and became a communication designer who builds systems."
  },
  {
    id: 2,
    title: "Building Trust Through Visual Language",
    description: "After my thesis, I taught myself React and built a ticket booking platform. During user testing, I watched someone hover over 'Pay Now' for <strong>47 seconds</strong>. She wasn't evaluating my code—she was deciding whether to trust a stranger with her money. That moment clarified everything: <strong>design is not decoration. It's information architecture, interaction patterns, and visual hierarchy working together to build confidence</strong>.",
    quote: "Every pixel, color choice, and spacing decision was either reinforcing or weakening trust."
  },
  {
    id: 3,
    title: "The Sundarbans Project",
    description: "8 million Bangladeshis will lose their homes to rising seas by 2050. Despite its global significance, this crisis remains invisible in climate narratives. I'm building an interactive platform combining <strong>information design, geospatial data visualization, and documentary storytelling</strong> to make distant disaster tangible. Starting with Gabura village as a pilot—deep community documentation before scaling.",
    quote: "Can information architecture and multimedia production make a climate crisis feel as urgent as a flooded street?"
  },
  {
    id: 4,
    title: "Communication Design as Cultural Translation",
    description: "Designed a digital experience for Bengali wedding ceremonies—three days of ritual spanning continents. This wasn't about forms and RSVP buttons. It was about <strong>how information architecture, visual communication, and interaction design can translate cultural meaning</strong> to people unfamiliar with the tradition. How do you organize complex information while honoring emotional and cultural weight?"
  },
  {
    id: 5,
    title: "Why Graduate Study at Ball State CCIM",
    description: "I've been building the skill set piecemeal: documentary production, information design, data visualization, full-stack development. Graduate study is where these become a unified practice. Where I learn to rigorously validate what I've been testing through iteration. Where <strong>information architecture, narrative craft, visual communication, research methodology, and technical execution merge into a single discipline</strong>.",
    quote: "How do we design communication systems that are rigorous, ethical, and worthy of trust? That's the question I'm ready to explore through research and applied work."
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
