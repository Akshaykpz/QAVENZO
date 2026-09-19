export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  deliverables: string[];
  accentColor: string;
  category: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "content",
    number: "01",
    title: "CONTENT",
    shortDesc: "High-retention narratives, cinematic reels, and AI-accelerated visuals designed to capture eyes and trigger organic momentum.",
    deliverables: [
      "Social content",
      "Reels & Shorts",
      "AI video production",
      "Campaign creatives",
      "Editorial copywriting"
    ],
    accentColor: "#E51920",
    category: "Production"
  },
  {
    id: "design",
    number: "02",
    title: "DESIGN",
    shortDesc: "Unapologetically bold graphic direction, poster art, and design systems crafted to make your brand unmistakable in every medium.",
    deliverables: [
      "Social media design",
      "Posters & Art Direction",
      "Campaign creatives",
      "UI/UX product design",
      "Visual systems"
    ],
    accentColor: "#FFD200",
    category: "Visuals"
  },
  {
    id: "web",
    number: "03",
    title: "WEB",
    shortDesc: "Fast, immersive, modern web experiences engineered to convert visitors into die-hard clients and brand advocates.",
    deliverables: [
      "Business websites",
      "High-converting landing pages",
      "Portfolio websites",
      "E-commerce storefronts",
      "Interactive 3D web experiences"
    ],
    accentColor: "#E51920",
    category: "Engineering"
  },
  {
    id: "marketing",
    number: "04",
    title: "MARKETING",
    shortDesc: "Data-informed paid campaigns and growth architectures across Meta and Google that turn creative attention into revenue.",
    deliverables: [
      "Social media management",
      "Meta advertising (FB & IG)",
      "Google ads & search intent",
      "Local marketing & geo-targeting",
      "Omnichannel campaign strategy"
    ],
    accentColor: "#FFD200",
    category: "Growth"
  },
  {
    id: "branding",
    number: "05",
    title: "BRANDING",
    shortDesc: "Strategic positioning, iconic wordmarks, and visual identity guidelines built to command authority and outlast trends.",
    deliverables: [
      "Logo design & typography",
      "Full brand identity systems",
      "Visual language & guidelines",
      "Brand books & style guides",
      "Packaging & physical collateral"
    ],
    accentColor: "#E51920",
    category: "Identity"
  },
  {
    id: "social-media",
    number: "06",
    title: "SOCIAL MEDIA",
    shortDesc: "End-to-end feed strategy, viral formats, daily posting, and community stewardship built specifically for maximum platform algorithm favor.",
    deliverables: [
      "Instagram feed management",
      "Content planning & editorial calendar",
      "Daily stories & interactive polls",
      "High-velocity reels strategy",
      "Active community & DM engagement"
    ],
    accentColor: "#FFD200",
    category: "Engagement"
  }
];
