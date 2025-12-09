import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, Lightbulb, Globe, Palette, Cloud, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, services } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  strategy: Lightbulb,
  web: Globe,
  brand: Palette,
  cloud: Cloud,
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = iconMap[service.icon] || Lightbulb;
  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <Link
              to="/services"
              className="mb-6 inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground"
            >
              <ArrowLeft size={16} />
              Back to Services
            </Link>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
              <Icon size={32} />
            </div>
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
              {service.title}
            </h1>
            <p className="text-lg text-primary-foreground/80">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none text-muted-foreground">
                {service.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 shadow-card">
                <h3 className="mb-4 text-lg font-semibold text-foreground">Key Features</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 opacity-0 animate-slide-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-border pt-6">
                  <Button variant="accent" className="w-full" asChild>
                    <Link to="/contact">
                      Get Started
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container">
          <h2 className="mb-8 text-2xl font-bold text-foreground">Other Services</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {otherServices.map((s) => {
              const ServiceIcon = iconMap[s.icon] || Lightbulb;
              return (
                <Link
                  key={s.id}
                  to={`/services/${s.slug}`}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-accent/50 hover:shadow-card"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <ServiceIcon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{s.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">{s.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
