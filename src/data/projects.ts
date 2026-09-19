export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  tag: string;
  year: string;
  image: string;
  featuredSize: "large" | "medium" | "tall" | "wide";
  summary: string;
  challenge: string;
  solution: string;
  deliverables: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "ai-video-campaign",
    number: "01",
    title: "AI VIDEO CAMPAIGN",
    category: "AI & Video",
    tag: "Next-Gen AI Film",
    year: "2026",
    image: "/assets/projects/ai_video_campaign.jpg",
    featuredSize: "large",
    summary: "A cinematic neo-noir narrative produced using generative AI workflows combined with live-action color grading and custom sound design.",
    challenge: "Deliver a high-budget cyberpunk aesthetic within a fraction of traditional production timelines and cost without sacrificing photographic quality.",
    solution: "Developed an in-house diffusion & neural video pipeline with custom character LoRAs, cinematic lighting rigs, and professional sound synthesis.",
    deliverables: ["AI Concept Art", "Neural Video Generation", "4K Mastering", "Social Cutdowns", "Sound Design"]
  },
  {
    id: "chayaco-cafe-identity",
    number: "02",
    title: "BRAND IDENTITY & STOREFRONT",
    category: "Branding",
    tag: "Chayaco Cafe",
    year: "2026",
    image: "/assets/chayaco_cafe_opt.jpg",
    featuredSize: "medium",
    summary: "Comprehensive physical & digital brand rollout for Chayaco Cafe, featuring custom retail signage, warm saffron-gold palette, and local launch campaign.",
    challenge: "Transform a high-footfall street corner into an unmistakable destination cafe with strong visual standout against adjacent retailers.",
    solution: "Engineered bold 3D acrylic signage, custom bilingual wordmark, striking storefront facade color blocking, and integrated launch promotion collateral.",
    deliverables: ["Exterior Facade Design", "3D Lettering Signage", "Bilingual Typography", "Promo Board Collateral", "Local Launch Strategy"]
  },
  {
    id: "cult-classic-social",
    number: "03",
    title: "SOCIAL MEDIA CAMPAIGN",
    category: "Social Media",
    tag: "Cult Classic Cinema",
    year: "2026",
    image: "/assets/projects/social_campaign.jpg",
    featuredSize: "medium",
    summary: "High-octane viral social campaign celebrating vintage film culture, featuring bold pop typography, creator-led reels, and interactive community challenges.",
    challenge: "Ignite enthusiastic organic engagement among Gen Z cinema lovers on Instagram and TikTok without standard ad fatigue.",
    solution: "Designed high-contrast editorial slate cards, short-form video hooks, and relatable pop-culture storytelling formats optimized for shares and saves.",
    deliverables: ["Editorial Reel Formats", "Graphic Slate Art", "Creator Direction", "Engagement Strategy", "Sound Bites"]
  },
  {
    id: "axis-creative-web",
    number: "04",
    title: "WEBSITE DESIGN & DEVELOPMENT",
    category: "Web & UI",
    tag: "Axis Creative Studio",
    year: "2026",
    image: "/assets/projects/website_design.jpg",
    featuredSize: "wide",
    summary: "An ultra-minimalist, editorial dark-mode digital platform featuring kinetic typography, smooth micro-interactions, and instant page transitions.",
    challenge: "Build a bespoke digital portfolio that feels like a luxury coffee-table monograph while maintaining sub-second load times.",
    solution: "Developed with React, Vite, and custom CSS fluid grids, combining bold serif typography with dark titanium atmospheric lighting.",
    deliverables: ["Custom Web Architecture", "Responsive Layouts", "Micro-Interactions", "SEO Optimization", "Fast CDN Deployment"]
  },
  {
    id: "apex-motion-commercial",
    number: "05",
    title: "PROMOTIONAL CONTENT",
    category: "AI & Video",
    tag: "Apex Motion",
    year: "2026",
    image: "/assets/projects/promotional_film.jpg",
    featuredSize: "tall",
    summary: "Adrenaline-fueled commercial launch video blending urban street speed with razor-sharp sound design and cinematic anamorphic flare treatments.",
    challenge: "Produce a 30-second brand anthem that stops social feeds in their tracks during the first 1.5 seconds.",
    solution: "Directed fast-cut editing with speed ramps, custom engine audio mixing, and high-contrast night palette featuring red tail-light trails.",
    deliverables: ["Director Cut Anthem", "9:16 Reel Adaptation", "Dynamic Motion Graphics", "Bespoke Sound Mix", "Paid Ad Formats"]
  },
  {
    id: "crimson-geometries",
    number: "06",
    title: "DIGITAL EXPERIENCE",
    category: "Web & UI",
    tag: "Crimson Geometries",
    year: "2026",
    image: "/assets/projects/digital_experience.jpg",
    featuredSize: "wide",
    summary: "An immersive 3D generative art installation and virtual museum experience celebrating geometric crimson forms and reflective obsidian spaces.",
    challenge: "Bring gallery-grade contemporary art into interactive digital space with full fluid responsiveness across devices.",
    solution: "Crafted a real-time responsive spatial gallery with reflective floor shaders, dynamic lighting nodes, and audio-reactive elements.",
    deliverables: ["3D Spatial Environment", "Interactive Shaders", "Audio-Reactive Triggers", "Virtual Tour Experience", "Social Assets"]
  }
];
