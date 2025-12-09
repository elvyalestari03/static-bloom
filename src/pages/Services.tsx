import { Layout } from "@/components/layout/Layout";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
              Our Services
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Comprehensive digital solutions tailored to your business needs. From strategy to execution, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              How We Work
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our proven process ensures consistent results and a smooth experience for our clients.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { step: "01", title: "Discovery", description: "We start by understanding your goals, challenges, and vision." },
              { step: "02", title: "Strategy", description: "We develop a comprehensive plan tailored to your needs." },
              { step: "03", title: "Execution", description: "Our team brings the plan to life with precision and care." },
              { step: "04", title: "Delivery", description: "We launch, measure, and optimize for continued success." },
            ].map((item, index) => (
              <div
                key={item.step}
                className="text-center opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 text-4xl font-bold text-accent">{item.step}</div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
