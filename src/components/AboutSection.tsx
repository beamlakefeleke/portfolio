import React from 'react';
import { motion } from 'framer-motion';

const disciplines = [
  {
    title: 'Mobile',
    detail: 'Flutter — production apps on iOS & Android, BLoC/Provider/GetX, offline-first architecture.',
  },
  {
    title: 'Frontend',
    detail: 'React, Next.js, Vue — component systems, performance budgets, accessibility.',
  },
  {
    title: 'Backend',
    detail: 'Spring Boot, Node.js, NestJS, Express — REST & GraphQL APIs, authentication, webhook systems.',
  },
  {
    title: 'Data',
    detail: 'MongoDB, PostgreSQL, Firebase, Supabase — schema design, real-time sync, migrations.',
  },
];

export function AboutSection() {
  return (
    <section className="py-28 relative z-10" id="about">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section label */}
        <p className="reveal text-xs font-mono text-amber uppercase tracking-widest mb-4">
          About
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — bio */}
          <div>
            <h2 className="reveal font-display text-5xl md:text-6xl text-paper leading-tight mb-8">
              Fullstack developer<br />
              <span className="italic text-amber">who ships.</span>
            </h2>
            <div className="reveal space-y-4 text-muted font-body leading-relaxed text-base max-w-prose">
              <p>
                I've been writing software professionally since 2022, starting with Flutter
                mobile apps and expanding into full-stack web work. Right now I'm embedded
                at <span className="text-paper">Safaricom Ethiopia</span> building and owning
                the commercial trade application — a Flutter/BLoC app used by their field
                sales teams.
              </p>
              <p>
                I'm equally comfortable in a Node/NestJS backend or a Next.js frontend.
                When I say fullstack I mean I've shipped the DB schema, the API, and the
                React components in the same sprint.
              </p>
              <p>
                Degree: BSc Computer Science & Engineering —{' '}
                <span className="text-paper">Adama Science and Technology University</span>,
                3.6 CGPA.
              </p>
            </div>
          </div>

          {/* Right — discipline list */}
          <div className="reveal space-y-0">
            {disciplines.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45, ease: 'easeOut' }}
                className="flex gap-6 py-6 border-b border-muted/20 last:border-0 group"
              >
                <span className="text-xs font-mono text-amber uppercase tracking-widest pt-1 w-20 shrink-0">
                  {d.title}
                </span>
                <p className="text-muted font-body text-sm leading-relaxed group-hover:text-paper transition-colors duration-200">
                  {d.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
