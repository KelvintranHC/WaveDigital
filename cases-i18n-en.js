/** English overlays for CASE_STUDIES — native professional copy */
window.CASE_STUDIES_EN = {
  'website-travel': {
    category: 'Conversion website',
    title: 'SEO-ready Next.js site for a travel brand',
    subtitle: 'From slow WordPress to a conversion landing that loads in under one second.',
    cardMetrics: ['+42% conversion', '<1s load'],
    client: 'Travel & experience brand (NDA)',
    industry: 'Travel / Hospitality',
    duration: '6 weeks',
    services: ['Discovery', 'UI/UX', 'Next.js 15', 'SEO & Analytics'],
    overview:
      'An inbound and outbound tour operator with strong paid traffic but a WordPress site that could not keep pace. Wave Digital redesigned the booking experience, strengthened local SEO, and built an AI-friendly foundation for discovery on ChatGPT and Claude.',
    problems: [
      'Heavy WordPress + plugins: LCP over 4s and high mobile bounce',
      'Fragmented booking forms with unclear funnel tracking',
      'Weak SEO: no schema, duplicate meta, slow indexing of new pages',
      'Marketing team could not ship campaign landings without developers',
    ],
    solution: [
      'Two discovery sessions: customer journey mapping with conversion and local SEO priorities',
      'Mobile-first Figma, A/B on hero and booking form layouts',
      'Next.js 15 App Router, ISR for destination pages, edge CDN',
      'GA4 + Meta Pixel with custom events per funnel step',
      'Handover playbook: client team updates content via headless CMS',
    ],
    process: [
      { step: 'Week 1', title: 'Discovery & audit', desc: 'WordPress audit, competitor benchmark, KPI baseline.' },
      { step: 'Weeks 2–3', title: 'Design & review', desc: 'Three Figma rounds, booking form prototype.' },
      { step: 'Weeks 4–5', title: 'Build & QA', desc: 'Next.js, CMS, SEO schema, performance tuning.' },
      { step: 'Week 6', title: 'Go-live', desc: 'DNS cutover, 72h monitoring, client training.' },
    ],
    results: [
      'Tour booking form conversion up 42% vs. 30-day pre-launch baseline',
      'Average LCP 0.9s on mobile; Core Web Vitals in Google’s “good” range',
      'Organic impressions 3× after 90 days via schema and internal linking',
      'Marketing publishes campaign landings in ~2 hours without engineering',
    ],
    quote: {
      text: 'The new site is remarkably fast and SEO-strong — a world away from our old WordPress setup. Tour bookings lifted clearly in the first month.',
      author: 'Marketing Director',
      company: 'Travel brand (NDA)',
    },
    metrics: [
      { value: '+42%', label: 'Tour form conversion' },
      { value: '<1s', label: 'Page load time' },
      { value: '95+', label: 'Lighthouse performance' },
      { value: '3×', label: 'Organic traffic (90 days)' },
    ],
  },

  'marketing-fmcg': {
    category: 'AI Marketing',
    title: 'AI content campaign for an FMCG brand',
    subtitle: '90-day master plan + 16 on-brand AI assets — 60% lower production cost.',
    cardMetrics: ['-60% content cost', '5× assets'],
    client: 'FMCG consumer brand (NDA)',
    industry: 'FMCG / Consumer goods',
    duration: '12 weeks',
    services: ['Master Plan', 'AI Content', 'Paid Media Setup', 'KPI Reporting'],
    overview:
      'A consumer brand launching a new line needed aligned imagery, social video, and brand films in three months — beyond what traditional studio budgets allowed. Wave Digital built the master plan, AI-produced assets with brand guardrails, and ran multi-channel paid media.',
    problems: [
      'Tight timeline: 16 assets (8 images, 8 videos) due in eight production weeks',
      'Traditional studio costs exceeded the marketing budget by ~60%',
      'No unified content pillars across Meta, TikTok, and retail',
      'Leadership lacked a real-time KPI dashboard',
    ],
    solution: [
      'Notion master plan: personas, messaging, 12-week content calendar',
      'Mood board and brand guardrails approved before AI generation',
      'Midjourney + Runway + ElevenLabs pipeline with two revision rounds per asset',
      'Meta & TikTok ads setup, standard UTMs, weekly CAC/ROAS reporting',
    ],
    process: [
      { step: 'Weeks 1–2', title: 'Strategy', desc: 'Workshop, competitor scan, content pillars.' },
      { step: 'Weeks 3–4', title: 'Pre-production', desc: 'Mood board, TVC storyboard, script approval.' },
      { step: 'Weeks 5–8', title: 'AI production', desc: 'Batch image/video, brand QA, HD/4K delivery.' },
      { step: 'Weeks 9–12', title: 'Launch & optimize', desc: 'Ads go-live, creative A/B, weekly optimization.' },
    ],
    results: [
      '60% lower production cost vs. traditional studio quotes',
      '5× more assets delivered in the same window as a four-person in-house team',
      'Launch campaign ROAS reached 2.1× in the first 30 days',
      'Leadership dashboard updated weekly with full KPI transparency',
    ],
    quote: {
      text: 'We used to juggle three agencies. Now Wave Digital handles it end to end — we save time and budget while staying on brand.',
      author: 'Brand Manager',
      company: 'FMCG (NDA)',
    },
    metrics: [
      { value: '-60%', label: 'Content production cost' },
      { value: '5×', label: 'Assets per timeline' },
      { value: '+38%', label: 'Avg. engagement rate' },
      { value: '2.1×', label: 'Launch campaign ROAS' },
    ],
  },

  'agent-fintech': {
    category: 'AI Agent',
    title: '24/7 customer agent for fintech',
    subtitle: 'Automated Facebook and Zalo inbox — 60%+ of messages handled by AI.',
    cardMetrics: ['60%+ AI handled', '-50% response time'],
    client: 'Fintech / e-wallet (NDA)',
    industry: 'Fintech',
    duration: '8 weeks',
    services: ['AI Agent', 'n8n Workflows', 'CRM Integration', 'Human Handoff'],
    overview:
      'A fast-scaling fintech’s 12-person CS team could not keep up with Facebook and Zalo OA volume, especially after hours. Wave Digital deployed a multi-channel AI agent with product knowledge, lead qualification, and human escalation when needed.',
    problems: [
      'Response SLA over 4 hours; users dropped off during wallet onboarding',
      '60% of questions were repetitive: fees, limits, KYC, promotions',
      'CRM and inbox were disconnected — data lost on handoff',
      'No measurement of chat-to-successful-registration conversion',
    ],
    solution: [
      'RAG knowledge base from FAQ, policy, and existing CS scripts',
      'Claude agent + n8n workflows: Facebook Messenger and Zalo OA webhooks',
      'Lead scoring, call scheduling, HubSpot CRM sync',
      'Human-in-the-loop for complex KYC, fraud, and complaints',
    ],
    process: [
      { step: 'Weeks 1–2', title: 'Audit & design', desc: 'Intent mapping, flow charts, compliance review.' },
      { step: 'Weeks 3–5', title: 'Build agent', desc: 'RAG, prompts, 200+ scenario tests.' },
      { step: 'Week 6', title: 'Pilot', desc: '20% traffic; monitor hallucination and CSAT.' },
      { step: 'Weeks 7–8', title: 'Scale', desc: 'Full inbox coverage, CS training, handoff playbook.' },
    ],
    results: [
      '60%+ of messages handled end-to-end by the agent',
      'Average response time down 50% (from 4h to under 2h)',
      'Qualified leads up 35%; sales pipeline synced in real time',
      'CSAT 4.7/5; CS team focused on complex cases instead of FAQ',
    ],
    quote: {
      text: 'Wave Digital’s AI agent automates about 70% of our customer care — including instant replies overnight.',
      author: 'Head of Customer Success',
      company: 'Fintech (NDA)',
    },
    metrics: [
      { value: '60%+', label: 'Messages handled by AI' },
      { value: '-50%', label: 'Response time' },
      { value: '+35%', label: 'Qualified leads / month' },
      { value: '4.7/5', label: 'CSAT post-launch' },
    ],
  },

  'custom-logistics': {
    category: 'Custom AI',
    title: 'CRM-integrated automation for logistics',
    subtitle: 'Agents and workflows — automated quoting and order tracking.',
    cardMetrics: ['-50% manual work', '85% scope expansion'],
    client: 'B2B logistics operator (NDA)',
    industry: 'Logistics / Supply chain',
    duration: '10 weeks',
    services: ['Custom Agent', 'API Integration', 'CRM Workflow', 'Ops Dashboard'],
    overview:
      'A logistics company received hundreds of RFQs daily via email and Zalo; manual CRM entry delayed quotes and caused tracking errors. Wave Digital built an AI pipeline to parse requests, price by rules, sync order status, and flag exceptions.',
    problems: [
      'Manual quotes took 2–4 hours per order; clients went to competitors',
      'Tracking updates lagged 1–2 days; B2B customers complained',
      'Data scattered across Excel, legacy CRM, and email — no single source',
      'Operations could not scale when volume doubled in peak season',
    ],
    solution: [
      'Agent parses RFQs from email/Zalo into structured quote requests',
      'Rules engine + pricing API: draft quotes in under 3 minutes',
      'CRM ↔ WMS sync: real-time tracking, exception webhooks',
      'Ops dashboard: queue, SLA, human approval above threshold',
    ],
    process: [
      { step: 'Weeks 1–2', title: 'Process mapping', desc: 'Shadow ops team, data model, API inventory.' },
      { step: 'Weeks 3–6', title: 'Integration', desc: 'CRM, WMS, n8n workflows, agent training.' },
      { step: 'Weeks 7–8', title: 'UAT', desc: 'Pilot 50 orders/day, accuracy tuning.' },
      { step: 'Weeks 9–10', title: 'Production', desc: 'Full rollout, SOP, two-week on-call.' },
    ],
    results: [
      '50% less manual order processing time for ops',
      'Automated quotes in under 3 minutes; 92% needed no edits',
      '99.2% tracking sync accuracy; fewer status inquiry tickets',
      '85% of clients expanded scope with additional modules within 6 months',
    ],
    quote: {
      text: 'Wave Digital mapped our logistics process accurately and built a system that held steady through peak season.',
      author: 'COO',
      company: 'B2B Logistics (NDA)',
    },
    metrics: [
      { value: '-50%', label: 'Manual order processing' },
      { value: '85%', label: 'Scope expansion (6 mo.)' },
      { value: '<3 min', label: 'Automated quoting' },
      { value: '99.2%', label: 'Tracking sync accuracy' },
    ],
  },

  'launching-startup': {
    category: 'Full Launch',
    title: 'Startup product launch in 30 days',
    subtitle: 'Website, master plan, AI content, and paid media — one partner, one timeline.',
    cardMetrics: ['30-day go-live', '1 partner'],
    client: 'B2B SaaS startup (NDA)',
    industry: 'Technology / SaaS',
    duration: '30 days',
    services: ['Full Launch', 'Website', 'AI Marketing', 'Go-live Ads'],
    overview:
      'A pre-seed startup needed an MVP landing live within one month before marketing runway ran out. Wave Digital delivered a full Launch package: discovery, Next.js site, eight AI content assets, ads setup, and end-to-end tracking — one timeline, one point of contact.',
    problems: [
      'Founder had no marketing team; only one full-time developer',
      'Separate web, content, and ads vendors exceeded budget',
      'Needed social proof and a professional landing for investor pitch',
      'Hard 30-day deadline before demo day',
    ],
    solution: [
      'Two discovery workshops: ICP, positioning, launch KPIs',
      'Next.js landing + waitlist + Cal.com demo booking',
      'Eight AI images + four videos; LinkedIn and Meta campaigns',
      'Weekly Loom updates so the founder always knew status',
    ],
    process: [
      { step: 'Days 1–7', title: 'Discovery', desc: 'Brief, personas, wireframes, tech spec.' },
      { step: 'Days 8–18', title: 'Build & content', desc: 'Website preview, AI content batch.' },
      { step: 'Days 19–25', title: 'Pre-launch', desc: 'QA, analytics, ads setup, soft launch.' },
      { step: 'Days 26–30', title: 'Go-live', desc: 'Public launch, report, 90-day roadmap.' },
    ],
    results: [
      'Go-live on day 30; landing Lighthouse performance score 96',
      '240+ qualified leads in month one; CAC down 40% after week-two optimization',
      '~55% cost savings vs. three separate vendor quotes',
      'Founder pitched demo day with real brand kit and metrics',
    ],
    quote: {
      text: 'As a startup CEO I needed an A-to-Z partner. Wave Digital saved us time and in-house cost — we hit demo day on schedule.',
      author: 'CEO & Co-founder',
      company: 'SaaS Startup (NDA)',
    },
    metrics: [
      { value: '30', label: 'Days to go-live' },
      { value: '1', label: 'Single partner' },
      { value: '240+', label: 'Qualified leads (month 1)' },
      { value: '-55%', label: 'Vs. three separate vendors' },
    ],
  },

  'website-ecommerce': {
    category: 'Conversion website',
    title: 'Next.js storefront upgrade for e-commerce',
    subtitle: 'Core Web Vitals in the green — checkout conversion up 28%.',
    cardMetrics: ['+28% checkout', 'SEO 95+'],
    client: 'D2C retail brand (NDA)',
    industry: 'E-commerce / Retail',
    duration: '8 weeks',
    services: ['Migration', 'Next.js', 'Checkout UX', 'SEO'],
    overview:
      'A D2C shop doing strong monthly revenue ran a bloated custom Shopify theme; checkout abandonment hit 78%. Wave Digital migrated to headless Next.js, optimized the funnel, and added product schema for SEO.',
    problems: [
      '78% mobile checkout abandonment; payment failures poorly logged',
      'Page speed hurt Google Shopping Quality Score',
      'Hard to A/B test layouts without Shopify developers',
      'Weak blog and collection SEO; keyword cannibalization',
    ],
    solution: [
      'Hotjar + GA4 funnel audit; one-page checkout redesign',
      'Headless commerce API + Next.js storefront',
      'Product, Review, and Breadcrumb schema for rich results',
      'Built-in A/B framework for hero and CTA',
    ],
    process: [
      { step: 'Weeks 1–2', title: 'Audit', desc: 'Funnel data, tech audit, migration plan.' },
      { step: 'Weeks 3–4', title: 'Design', desc: 'PDP, PLP, checkout in Figma.' },
      { step: 'Weeks 5–7', title: 'Build', desc: 'Next.js, API sync, payment gateway.' },
      { step: 'Week 8', title: 'Launch', desc: 'Staged rollout, 48h hypercare.' },
    ],
    results: [
      'Checkout conversion +28%; abandonment down 38%',
      'Mobile LCP 1.2s; Google Shopping CPC down 15%',
      'Non-brand organic visibility +42% in 60 days',
      'Marketing runs hero A/B tests without dev tickets',
    ],
    quote: {
      text: 'The new storefront looks professional, deployed fast, and stayed stable through sale season.',
      author: 'E-commerce Lead',
      company: 'D2C Retail (NDA)',
    },
    metrics: [
      { value: '+28%', label: 'Checkout conversion' },
      { value: '95+', label: 'SEO score' },
      { value: '-38%', label: 'Cart abandonment' },
      { value: '1.2s', label: 'Mobile LCP' },
    ],
  },

  'marketing-realestate': {
    category: 'AI Marketing',
    title: 'AI content and ads for real estate',
    subtitle: 'Aligned video, image, and copy — ROAS up 32%.',
    cardMetrics: ['-45% publish time', 'ROAS +32%'],
    client: 'Real estate developer (NDA)',
    industry: 'Real estate',
    duration: '10 weeks',
    services: ['AI Content', 'AI Brand Film', 'Meta/Google Ads', 'Landing support'],
    overview:
      'A premium apartment project needed high-volume multi-channel content (flyers, walkthrough video, ads) but traditional TVC quotes exceeded the first three months’ budget. Wave Digital produced luxury-grade AI content with brand control and ran performance ads.',
    problems: [
      'Traditional TVC at $3–5k+ per spot — over early-phase budget',
      'Sales needed fresh materials weekly per unit and promotion',
      'Ad creative fatigue after two weeks; CPC rising',
      'Landing visuals out of sync with social',
    ],
    solution: [
      '60s AI brand film + 15s cut-downs for Meta/TikTok',
      'Image templates: units, views, amenities — eight per month',
      'Copy framework by funnel stage: awareness → conversion',
      'Visual sync with Wave Digital landing pages',
    ],
    process: [
      { step: 'Weeks 1–2', title: 'Brand & story', desc: 'Luxury mood, script, storyboard approval.' },
      { step: 'Weeks 3–6', title: 'Production', desc: 'AI video/image, legal disclaimer review.' },
      { step: 'Weeks 7–8', title: 'Media', desc: 'Campaign structure, pixels, lead forms.' },
      { step: 'Weeks 9–10', title: 'Optimize', desc: 'Creative refresh, CPL tuning.' },
    ],
    results: [
      'ROAS +32% vs. previous campaign baseline',
      'Time-to-publish creative down 45%',
      '180+ quality leads per month; CPL down 22% after optimization',
      'Sales team had weekly refreshed assets without waiting on studio',
    ],
    quote: {
      text: 'Wave Digital’s AI TVC matched traditional studio quality and saved us significant budget in the launch phase.',
      author: 'Sales & Marketing Director',
      company: 'Real Estate (NDA)',
    },
    metrics: [
      { value: '+32%', label: 'ROAS' },
      { value: '-45%', label: 'Time to publish' },
      { value: '12', label: 'Video assets / month' },
      { value: '180+', label: 'Quality leads / month' },
    ],
  },

  'agent-education': {
    category: 'AI Agent',
    title: 'Course consultation agent for education',
    subtitle: '3× qualified leads — CRM and Zalo OA integrated.',
    cardMetrics: ['3× qualified leads', '24/7 online'],
    client: 'Training center / EdTech (NDA)',
    industry: 'Education',
    duration: '6 weeks',
    services: ['AI Agent', 'Zalo OA', 'CRM', 'Demo scheduling'],
    overview:
      'An eight-location training center was flooded with Zalo and Facebook messages; telesales chased cold leads. Wave Digital deployed an agent to advise on pathways, share tuition ranges, and book demos with instructors.',
    problems: [
      'Telesales overloaded with 400+ leads/week; follow-up delayed 2–3 days',
      'Inconsistent answers on pathways and tuition',
      'No campaign-level lead source tracking',
      'Parents messaging after hours received no reply',
    ],
    solution: [
      'RAG agent from syllabus, tuition, and class schedules',
      'Qualify by goals, level, budget → lead score',
      'Cal.com demo booking + CRM sync; notify telesales on hot leads',
      'Campaign reports: CPL, chat-to-enrollment conversion',
    ],
    process: [
      { step: 'Week 1', title: 'Content audit', desc: 'FAQ, consultation scripts, policies.' },
      { step: 'Weeks 2–4', title: 'Build & test', desc: 'Agent, Zalo, CRM, 150 test cases.' },
      { step: 'Week 5', title: 'Pilot', desc: 'Two locations; tune tone for parents/students.' },
      { step: 'Week 6', title: 'Rollout', desc: 'All eight locations; telesale handoff training.' },
    ],
    results: [
      'Qualified leads up 3× thanks to 24/7 instant replies',
      'Telesale cost down 40% — team focused on closing, not FAQ',
      'Enrollment rate from agent leads up 25%',
      'Clear lead-source dashboard by campaign',
    ],
    quote: {
      text: 'The agent answers pathways and tuition correctly; telesales only calls hot leads — conversion improved in the first month.',
      author: 'Operations Manager',
      company: 'EdTech (NDA)',
    },
    metrics: [
      { value: '3×', label: 'Qualified leads' },
      { value: '24/7', label: 'Instant response' },
      { value: '-40%', label: 'Telesale cost' },
      { value: '+25%', label: 'Enrollment rate' },
    ],
  },
};

window.mergeCaseStudyLocale = function (caseData, slug, lang) {
  if (lang !== 'en' || !window.CASE_STUDIES_EN?.[slug]) return caseData;
  const en = window.CASE_STUDIES_EN[slug];
  return Object.assign({}, caseData, en, {
    overview: en.overview || caseData.overview,
    problems: en.problems || caseData.problems,
    solution: en.solution || caseData.solution,
    process: en.process || caseData.process,
    results: en.results || caseData.results,
    quote: en.quote || caseData.quote,
    metrics: en.metrics || caseData.metrics,
    services: en.services || caseData.services,
  });
};
