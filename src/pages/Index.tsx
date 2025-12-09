import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { company, stats } from "@/data/company";
import { services } from "@/data/services";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground opacity-0 animate-fade-in md:text-5xl lg:text-6xl">
              {company.tagline}
            </h1>
            <p className="mb-8 text-lg text-primary-foreground/80 opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
              {company.description}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 opacity-0 animate-fade-in sm:flex-row" style={{ animationDelay: "200ms" }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-border bg-card py-12">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl font-bold text-accent md:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We offer comprehensive digital solutions to help your business thrive in the modern marketplace.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Why Choose {company.name}?
              </h2>
              <p className="mb-8 text-muted-foreground">
                With years of experience and a passionate team, we deliver results that matter. Our commitment to excellence sets us apart.
              </p>
              <ul className="space-y-4">
                {[
                  "Expert team with diverse skill sets",
                  "Transparent communication throughout",
                  "Agile methodology for faster delivery",
                  "Long-term partnership approach",
                  "Proven track record of success",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 opacity-0 animate-slide-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="h-5 w-5 shrink-0 text-accent" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8">
                <div className="flex h-full flex-col items-center justify-center text-center text-primary-foreground">
                  <div className="mb-4 text-6xl font-bold">{new Date().getFullYear() - company.founded}+</div>
                  <div className="text-xl font-medium">Years of Excellence</div>
                  <div className="mt-2 text-primary-foreground/70">Trusted by businesses worldwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mb-8 text-muted-foreground">
              Let's discuss how we can help you achieve your digital goals. Schedule a free consultation today.
            </p>
            <Button variant="accent" size="xl" asChild>
              <Link to="/contact">
                Contact Us Today
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
