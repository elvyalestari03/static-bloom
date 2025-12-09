import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Globe, Palette, Cloud } from "lucide-react";
import { Service } from "@/data/services";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  strategy: Lightbulb,
  web: Globe,
  brand: Palette,
  cloud: Cloud,
};

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Lightbulb;

  return (
    <Link
      to={`/services/${service.slug}`}
      className={cn(
        "group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-elevated",
        "opacity-0 animate-fade-in"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
        <Icon size={24} />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-foreground">{service.title}</h3>
      <p className="mb-4 flex-1 text-sm text-muted-foreground">{service.description}</p>
      <div className="flex items-center gap-2 text-sm font-medium text-accent">
        Learn more
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
