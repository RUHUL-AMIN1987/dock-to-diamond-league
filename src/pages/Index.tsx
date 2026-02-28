import { Anchor, Trophy, Calendar, Users, Camera, Gavel, Globe, Zap, Shield, Mail, Phone, ArrowRight, CheckCircle2 } from "lucide-react";

const ProposalHero = () => (
  <header className="relative overflow-hidden bg-primary px-6 py-20 md:py-28">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-10 left-10 text-primary-foreground"><Anchor size={120} strokeWidth={1} /></div>
      <div className="absolute bottom-10 right-10 text-primary-foreground"><Trophy size={100} strokeWidth={1} /></div>
    </div>
    <div className="relative mx-auto max-w-4xl text-center">
      <p className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
        Freelance Web Development Proposal
      </p>
      <h1 className="mb-6 font-display text-4xl font-800 leading-tight text-primary-foreground md:text-6xl">
        ShippingBaseball.com
      </h1>
      <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-primary-foreground/80">
        A complete digital home for the world's first semi-pro baseball league where shipping crews compete port to port — united by the mission of <span className="font-semibold text-secondary">"World Peace Through Baseball."</span>
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-primary-foreground/60">
        <span>Prepared for <strong className="text-primary-foreground">Ruhul</strong></span>
        <span className="hidden md:inline">•</span>
        <span>February 28, 2026</span>
        <span className="hidden md:inline">•</span>
        <span>By Alex Mitchell, Senior Web Developer</span>
      </div>
    </div>
  </header>
);

const SectionHeading = ({ icon: Icon, title, subtitle }: { icon: any; title: string; subtitle?: string }) => (
  <div className="mb-8 flex items-start gap-4">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
      <Icon size={24} />
    </div>
    <div>
      <h2 className="font-display text-2xl font-700 text-foreground md:text-3xl">{title}</h2>
      {subtitle && <p className="mt-1 font-body text-muted-foreground">{subtitle}</p>}
    </div>
  </div>
);

const FeatureCard = ({ title, items }: { title: string; items: string[] }) => (
  <div className="rounded-xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
    <h3 className="mb-3 font-display text-lg font-600 text-foreground">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const TimelineItem = ({ week, title, details }: { week: string; title: string; details: string }) => (
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-body text-xs font-bold text-primary-foreground">
        {week}
      </div>
      <div className="w-px flex-1 bg-border" />
    </div>
    <div className="pb-8">
      <h4 className="font-display text-lg font-600 text-foreground">{title}</h4>
      <p className="mt-1 text-sm text-muted-foreground">{details}</p>
    </div>
  </div>
);

const PricingTier = ({ name, range, features, highlighted }: { name: string; range: string; features: string[]; highlighted?: boolean }) => (
  <div className={`rounded-xl border-2 p-6 ${highlighted ? 'border-secondary bg-secondary/5 shadow-lg' : 'border-border bg-card'}`}>
    {highlighted && <p className="mb-2 text-xs font-bold uppercase tracking-wider text-secondary">Recommended</p>}
    <h3 className="font-display text-xl font-700 text-foreground">{name}</h3>
    <p className="mt-1 font-display text-3xl font-800 text-primary">{range}</p>
    <ul className="mt-4 space-y-2">
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
          <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-accent" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <ProposalHero />

      <main className="mx-auto max-w-4xl space-y-16 px-6 py-16">
        {/* Greeting */}
        <section>
          <SectionHeading icon={Mail} title="Dear Ruhul," />
          <div className="prose max-w-none space-y-4 text-muted-foreground">
            <p>
              Thank you for sharing the vision behind <strong className="text-foreground">ShippingBaseball.com</strong>. The concept of shipping crews competing in a semi-pro baseball league — all under the banner of <em>"World Peace Through Baseball"</em> — is genuinely one of the most compelling and original projects I've come across. The combination of maritime culture, competitive sport, and a unifying global message is the kind of story that practically markets itself.
            </p>
            <p>
              I've read your brief carefully and I'm confident I can deliver a website that does this league justice: one that's easy for your crew to manage, engaging for fans worldwide, and built to grow as the league scales from 15 inaugural franchises toward something much bigger.
            </p>
          </div>
        </section>

        {/* Project Understanding */}
        <section>
          <SectionHeading icon={Globe} title="Project Understanding" subtitle="Here's what I'm hearing — let me know if anything's off." />
          <div className="grid gap-4 md:grid-cols-2">
            <FeatureCard title="Content & Information Hub" items={[
              "News/blog for steady league updates and press",
              "Full game schedules with dates, locations (ports), and matchups",
              "Scores, standings, and results after each series",
              "Team profiles and individual player pages with stats",
            ]} />
            <FeatureCard title="Real-Time Fan Engagement" items={[
              "Live game-update feed (real-time scoring/play-by-play)",
              "Moderated discussion forum for fan community",
              "Photo and video galleries — dockside and on-diamond highlights",
            ]} />
            <FeatureCard title="Pre-Launch Auction" items={[
              "Dedicated landing section for 15 franchise slots",
              "Individual team showcase cards with details",
              "Clear bidding rules and process explanation",
              "Seamless funnel/link to your external auction platform",
            ]} />
            <FeatureCard title="Operations & Handoff" items={[
              "Clean, mobile-first responsive design",
              "Intuitive CMS your small team can manage independently",
              "Strong SEO foundation from day one",
              "Comprehensive hand-off documentation and training",
            ]} />
          </div>
        </section>

        {/* Tech Stack */}
        <section>
          <SectionHeading icon={Zap} title="Recommended Tech Stack" subtitle="WordPress at the core — here's why and what powers each feature." />
          <div className="overflow-x-auto rounded-xl border bg-card">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="px-4 py-3 font-display font-600 text-foreground">Layer</th>
                  <th className="px-4 py-3 font-display font-600 text-foreground">Tool / Plugin</th>
                  <th className="px-4 py-3 font-display font-600 text-foreground">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y text-muted-foreground">
                {[
                  ["CMS", "WordPress 6.x", "Battle-tested, your team already knows it or learns fast"],
                  ["Page Builder", "Elementor Pro", "Drag-and-drop design; no code needed for future edits"],
                  ["Sports Data", "SportsPress Pro", "Schedules, scores, standings, team & player profiles out of the box"],
                  ["Live Feed", "Custom REST API + WP Webhooks", "Real-time game updates via lightweight polling or WebSocket layer"],
                  ["Forum", "bbPress", "Moderated fan discussions, tightly integrated with WP users"],
                  ["Galleries", "Modula Pro", "Responsive photo/video galleries with lightbox & lazy loading"],
                  ["SEO", "Rank Math Pro", "Schema markup, sitemaps, on-page SEO scoring"],
                  ["Performance", "WP Rocket + Cloudflare", "Caching, CDN, image optimization for global audience"],
                  ["Hosting", "Cloudways or SiteGround", "Managed WordPress hosting with staging environments"],
                ].map(([layer, tool, purpose], i) => (
                  <tr key={i}>
                    <td className="px-4 py-3 font-semibold text-foreground">{layer}</td>
                    <td className="px-4 py-3 font-medium text-primary">{tool}</td>
                    <td className="px-4 py-3">{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            <strong className="text-foreground">Why WordPress?</strong> Your small in-house crew needs a platform they can update without calling a developer. WordPress powers 43% of the web, has the richest ecosystem of sports plugins, and offers the lowest learning curve for content editors. Combined with SportsPress Pro, you get league-grade data management without custom development.
          </p>
        </section>

        {/* Features Delivery */}
        <section>
          <SectionHeading icon={Shield} title="How I'll Deliver Each Feature" />
          <div className="space-y-6">
            {[
              { title: "📰 News & Updates", desc: "WordPress's native post system with custom categories (League News, Team Updates, Press Releases). Elementor-designed archive and single-post templates ensure visual consistency. RSS feed included for syndication." },
              { title: "📅 Schedules, Scores & Standings", desc: "SportsPress Pro handles the heavy lifting — season calendars, match results, automatic standings calculations, and stat tables. Each team and player gets a dedicated profile page with career stats, bio, and photo." },
              { title: "⚡ Live Game-Update Feed", desc: "I'll build a custom lightweight module that polls a REST endpoint (or receives webhook pushes) from your scoring data source. Updates render in a dedicated \"Live Now\" ticker/feed on the homepage and individual game pages. If you don't have a data provider yet, I'll design the admin interface so your crew can manually post play-by-play updates in real time." },
              { title: "💬 Moderated Fan Forum", desc: "bbPress integrates natively with WordPress user accounts. I'll set up topic categories per team, moderation queues, user reputation badges, and anti-spam via Akismet. Clean, mobile-friendly forum templates styled to match the site." },
              { title: "📸 Photo & Video Galleries", desc: "Modula Pro for responsive, filterable galleries with lightbox. Video embeds from YouTube/Vimeo with lazy loading. Organized by event, team, or season. Your team uploads media through the familiar WordPress media library." },
              { title: "🏆 Pre-Launch Auction Landing", desc: "A high-impact, conversion-focused landing section showcasing all 15 franchise slots with individual team cards, logos (or placeholders), port locations, and key details. Clear bidding rules section with FAQ accordion. Prominent CTA buttons linking directly to your external auction platform — no friction, just a seamless handoff." },
            ].map((item, i) => (
              <div key={i} className="rounded-lg border-l-4 border-primary bg-card p-5 shadow-sm">
                <h3 className="font-display text-lg font-600 text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Design Approach */}
        <section>
          <SectionHeading icon={Camera} title="Design & UX Approach" subtitle="Mobile-first, bold, and unmistakably baseball." />
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>The design will draw from the visual language of professional baseball — <strong className="text-foreground">deep navy, crisp white, warm gold accents, and a touch of ballpark red</strong> — blended with maritime elements (anchor motifs, port city photography, nautical typography touches) to reflect the league's unique shipping roots.</p>
            <ul className="grid gap-3 md:grid-cols-2">
              {[
                "Mobile-first responsive layouts tested across devices",
                "Bold hero sections with action photography",
                "Card-based team/player profiles for easy scanning",
                "Sticky navigation with live-score ticker integration",
                "Accessibility-first: WCAG 2.1 AA compliance",
                "Fast load times — target under 3 seconds globally",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ArrowRight size={14} className="mt-1 shrink-0 text-secondary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SEO */}
        <section>
          <SectionHeading icon={Globe} title="SEO & Performance" />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: "Technical SEO", items: ["XML sitemaps & robots.txt", "Schema markup (SportsEvent, Organization)", "Clean URL structure", "Mobile-first indexing ready"] },
              { title: "On-Page SEO", items: ["Rank Math Pro integration", "Meta title/description templates", "Image alt-text workflows", "Internal linking strategy"] },
              { title: "Performance", items: ["WP Rocket caching", "Cloudflare CDN", "WebP image conversion", "Lazy loading media assets"] },
            ].map((col, i) => (
              <FeatureCard key={i} title={col.title} items={col.items} />
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section>
          <SectionHeading icon={Calendar} title="Timeline & Milestones" subtitle="10–12 weeks from kickoff to launch." />
          <div className="ml-1">
            <TimelineItem week="1–2" title="Discovery & Auction Landing (Priority)" details="Kickoff call, brand assets collection, sitemap & wireframes. The pre-launch auction landing page goes live first so you can start driving bidder traffic immediately." />
            <TimelineItem week="3–5" title="Design & Core Development" details="Elementor theme customization, homepage, news/blog templates, team & player profile pages. Design review checkpoint at end of Week 4." />
            <TimelineItem week="6–8" title="Integrations & Interactive Features" details="SportsPress configuration, live-feed module development, bbPress forum setup, Modula gallery templates. Integration testing throughout." />
            <TimelineItem week="9–10" title="Content, QA & Handoff Docs" details="Content population support, cross-browser/device testing, performance optimization, and comprehensive documentation + video walkthrough for your team." />
            <TimelineItem week="11–12" title="Launch & Post-Launch Support" details="Staged rollout, DNS/SSL configuration, launch-day monitoring, and 2 weeks of complimentary post-launch bug fixes and support." />
          </div>
        </section>

        {/* Pricing */}
        <section>
          <SectionHeading icon={Users} title="Investment" subtitle="Two tiers to match your priorities." />
          <div className="grid gap-6 md:grid-cols-2">
            <PricingTier
              name="Base Package"
              range="$4,000 – $6,000"
              features={[
                "Full WordPress site with Elementor Pro",
                "SportsPress Pro: schedules, scores, standings, profiles",
                "News/blog with custom templates",
                "bbPress moderated fan forum",
                "Photo & video galleries (Modula Pro)",
                "Pre-launch auction landing section",
                "SEO setup (Rank Math Pro)",
                "Mobile-first responsive design",
                "Hand-off documentation + 1-hour training",
                "2 weeks post-launch support",
              ]}
            />
            <PricingTier
              name="Premium Package"
              range="$5,500 – $8,500"
              highlighted
              features={[
                "Everything in Base, plus:",
                "Custom live game-update feed (API/webhook)",
                "Real-time scoring ticker on homepage",
                "Advanced SportsPress customizations",
                "Enhanced auction page with team showcase cards",
                "Cloudflare + WP Rocket performance stack",
                "Extended 30-day post-launch support",
                "2 additional design revision rounds",
                "Video training library for your team",
              ]}
            />
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            <strong>Not included:</strong> Premium hosting fees (est. $25–50/mo), stock photography, third-party plugin licenses (SportsPress Pro ~$149/yr, Elementor Pro ~$59/yr), and ongoing content creation. Domain registration assumed to be handled by client.
          </p>
        </section>

        {/* Next Steps */}
        <section className="rounded-2xl bg-primary px-8 py-10 text-center">
          <h2 className="font-display text-2xl font-700 text-primary-foreground md:text-3xl">Let's Get This League Online</h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
            I'd love to hop on a 30-minute Zoom call to walk through this proposal, align on priorities, and lock in a start date. The auction landing page can be live within two weeks of kickoff.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:alex@webdev.pro" className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 font-body text-sm font-600 text-secondary-foreground transition-opacity hover:opacity-90">
              <Mail size={16} /> Schedule a Call
            </a>
            <a href="tel:+15551234567" className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 px-6 py-3 font-body text-sm font-600 text-primary-foreground transition-colors hover:bg-primary-foreground/10">
              <Phone size={16} /> (555) 123-4567
            </a>
          </div>
        </section>

        {/* Closing */}
        <section className="text-center">
          <p className="text-muted-foreground">
            Ruhul, I genuinely believe ShippingBaseball.com has the potential to become something iconic — and I want to help you build the digital foundation it deserves. Looking forward to connecting.
          </p>
          <div className="mt-6">
            <p className="font-display text-xl font-700 text-foreground">Alex Mitchell</p>
            <p className="text-sm text-muted-foreground">Senior Web Developer & Project Manager</p>
            <p className="mt-1 text-xs text-muted-foreground">10+ years · WordPress · Sports & Community Sites</p>
          </div>
          <div className="mx-auto mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground/60">
            <Anchor size={14} />
            <span>⚾ World Peace Through Baseball ⚾</span>
            <Anchor size={14} />
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/30 px-6 py-6 text-center text-xs text-muted-foreground">
        This proposal is valid for 30 days from the date above. All prices in USD.
      </footer>
    </div>
  );
};

export default Index;
