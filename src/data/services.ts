export interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  content: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 1,
    title: "Digital Strategy",
    slug: "digital-strategy",
    description: "Transform your business with data-driven digital strategies that drive growth and innovation.",
    content: `Our Digital Strategy service helps businesses navigate the complex digital landscape with confidence. We analyze your current position, identify opportunities, and create a comprehensive roadmap for digital transformation.

Our team of strategists works closely with your leadership to understand your unique challenges and goals. We leverage industry best practices, competitive analysis, and emerging trends to craft strategies that position your business for long-term success.

From digital marketing optimization to technology stack recommendations, we provide actionable insights that drive measurable results.`,
    icon: "strategy",
    features: [
      "Market & Competitive Analysis",
      "Digital Roadmap Development",
      "Technology Assessment",
      "Change Management Planning",
    ],
  },
  {
    id: 2,
    title: "Web Development",
    slug: "web-development",
    description: "Build stunning, high-performance websites and web applications that engage users and drive conversions.",
    content: `Our Web Development team creates modern, responsive websites and web applications that deliver exceptional user experiences. We combine cutting-edge technologies with proven design principles to build solutions that look great and perform flawlessly.

Whether you need a corporate website, e-commerce platform, or custom web application, we have the expertise to bring your vision to life. Our development process emphasizes clean code, accessibility, and scalability.

We use the latest frameworks and tools to ensure your web presence is fast, secure, and future-proof.`,
    icon: "web",
    features: [
      "Responsive Design",
      "Custom CMS Solutions",
      "E-commerce Platforms",
      "Progressive Web Apps",
    ],
  },
  {
    id: 3,
    title: "Brand Identity",
    slug: "brand-identity",
    description: "Create a memorable brand that resonates with your audience and sets you apart from competitors.",
    content: `Your brand is more than a logo—it's the complete experience people have with your company. Our Brand Identity service helps you define and express what makes your business unique.

We start with deep discovery to understand your values, audience, and competitive landscape. From there, we develop a cohesive visual identity system including logos, color palettes, typography, and brand guidelines.

Our goal is to create a brand that not only looks professional but authentically represents your company's personality and builds lasting connections with your customers.`,
    icon: "brand",
    features: [
      "Logo & Visual Identity",
      "Brand Guidelines",
      "Messaging Framework",
      "Brand Asset Library",
    ],
  },
  {
    id: 4,
    title: "Cloud Solutions",
    slug: "cloud-solutions",
    description: "Leverage the power of cloud computing to scale your operations and reduce infrastructure costs.",
    content: `Cloud technology offers unprecedented flexibility and efficiency for modern businesses. Our Cloud Solutions service helps you migrate, optimize, and manage cloud infrastructure with confidence.

We work with leading cloud providers to design architectures that meet your specific needs—whether that's improved performance, cost reduction, or enhanced security. Our certified engineers handle everything from initial migration to ongoing optimization.

With our managed cloud services, you can focus on your core business while we ensure your infrastructure runs smoothly 24/7.`,
    icon: "cloud",
    features: [
      "Cloud Migration",
      "Architecture Design",
      "Cost Optimization",
      "24/7 Managed Services",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}
