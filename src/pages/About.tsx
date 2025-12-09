import { Layout } from "@/components/layout/Layout";
import { company, mission, vision, values, stats } from "@/data/company";
import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
              About {company.name}
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Learn about our journey, our values, and the team behind our success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Target size={24} />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">Our Mission</h2>
              <p className="text-muted-foreground">{mission}</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Eye size={24} />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">Our Vision</h2>
              <p className="text-muted-foreground">{vision}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-foreground md:text-4xl">
              Our Story
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Founded in {company.founded}, {company.name} began with a simple vision: to help businesses navigate the complexities of digital transformation with confidence and clarity.
              </p>
              <p>
                What started as a small team of passionate technologists has grown into a full-service digital consultancy, serving clients across industries and continents. Our journey has been marked by continuous learning, bold innovation, and an unwavering commitment to our clients' success.
              </p>
              <p>
                Today, we're proud to be trusted partners for businesses ranging from ambitious startups to established enterprises. Our team brings together diverse expertise in strategy, development, design, and technology to deliver solutions that truly make a difference.
              </p>
              <p>
                As we look to the future, we remain focused on what matters most: helping our clients thrive in an ever-evolving digital landscape while staying true to the values that have guided us from the beginning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Heart size={24} />
              </div>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Our Values
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              These core principles guide everything we do and define who we are as a company.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-card opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="mb-3 text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-hero py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl font-bold text-accent md:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
