import theGalleryImg1 from '../assets/The Gallery/Screenshot 2026-01-05 064548.png';
import tripHubImg1 from '../assets/Trip Hub/Screenshot 2026-01-05 152423.png';

export const journeyData = [
  {
    id: "01",
    title: "The Silent Comedy That Started Everything",
    description: "Growing up in Khulna, I was mesmerized by how Mr. Bean made me laugh without speaking a word. Later, as Game of Thrones streamed on my phone, I realized something profound: my relationship with media had shifted from passive consumption to active interaction.",
    subDescription: "On Facebook and Instagram, I wasn't just watching stories — I was shaping my own digital narrative. Every click, every share, every reaction was creating a feedback loop that personalized my experience. I had become a co-creator without realizing it.",
    icon: "📺→📱"
  },
  {
    id: "02",
    title: "\"The Medium Is the Message\"",
    description: "At Khulna University studying Mass Communication & Journalism, I memorized Marshall McLuhan's famous phrase without truly understanding it. It felt academic. Disconnected from reality.",
    subDescription: "Then came my master's thesis on Facebook's privacy policy. Suddenly, McLuhan's words exploded with meaning: Facebook isn't just a communication tool — it's an ecosystem that learns from users to redesign experiences. Every interaction trains the algorithm. We shape our tools, and they shape us back.",
    quote: "We become what we behold. We shape our tools, and thereafter our tools shape us.",
    quoteAuthor: "Marshall McLuhan",
    icon: "💡"
  },
  {
    id: "03",
    title: "From Theory to Practice",
    description: "Understanding Henry Jenkins' participatory culture — where audiences actively construct stories across platforms — I wanted to move beyond analysis. I needed to build these experiences myself.",
    subDescription: "I started with UX/UI design, exploring how interfaces influence perception and behavior. Then came the code: HTML, CSS, JavaScript, React, Tailwind.",
    skills: [
      { label: "Design Tools Mastered", items: "Figma, Canva, Adobe XD", color: "secondary" },
      { label: "Frontend Stack Built", items: "React, Tailwind, Firebase", color: "accent" },
      { label: "Backend Developed", items: "Node.js, Express, MongoDB", color: "charcoal" }
    ]
  },
  {
    id: "04",
    title: "Where I Am Today",
    description: "I'm a full-stack developer with a journalism degree — which means I think differently. I ask: \"Why does this feature exist?\" before \"How should we build it?\" I challenge assumptions in product meetings. I advocate for users who can't speak for themselves.",
    subDescription: "My superpower? Translating between technical teams and everyone else. I write code that's documented like a good article. I design interfaces informed by Don Norman's human-centered design principles.",
    quote: "I don't just write code. I architect human-centered communication systems."
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
