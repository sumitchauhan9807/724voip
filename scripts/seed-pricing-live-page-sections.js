'use strict';

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');

const envPath = path.resolve(__dirname, '..', '.env');
const env = Object.fromEntries(
  fs
    .readFileSync(envPath, 'utf8')
    .split(/\r?\n/)
    .filter((line) => line && !line.startsWith('#') && line.includes('='))
    .map((line) => {
      const index = line.indexOf('=');
      return [line.slice(0, index), line.slice(index + 1)];
    }),
);

const planDefinitions = [
  {
    identifier: 'team',
    suiteIdentifier: 'ai-communication-suite',
    order: 1,
    name: 'Team',
    description: 'Business phone system with CRM integrations',
    annual: '29',
    monthly: '39',
    ctas: [
      { text: 'Get Started', url: '/signup', variant: 'filled' },
      { text: 'Talk to Us', url: '/demo', variant: 'outline' },
    ],
    groups: [
      {
        heading: 'Included Credits',
        items: [
          { label: 'Unlimited outbound minutes across Europe' },
          { label: 'Unlimited inbound minutes' },
          { label: 'Unlimited AI transcription minutes' },
          { value: '500', label: 'SMS segments across Europe' },
        ],
      },
      {
        heading: 'Features Included',
        items: [
          { label: 'Local number in 70+ countries' },
          { label: 'Messaging suite' },
          { label: '100+ CRM and data integrations' },
          { label: 'IVR and call menus setup' },
          { label: 'Team performance analytics and reporting' },
          { label: 'API access and workflows' },
        ],
      },
    ],
  },
  {
    identifier: 'pro',
    suiteIdentifier: 'ai-communication-suite',
    order: 2,
    name: 'Pro',
    description: 'Scale business communication with powerful workflow automations',
    badge: 'Recommended for you',
    highlighted: true,
    annual: '49',
    monthly: '69',
    ctas: [
      { text: 'Get Started', url: '/signup', variant: 'filled' },
      { text: 'Talk to Us', url: '/demo', variant: 'outline' },
    ],
    groups: [
      {
        heading: 'Included Credits',
        items: [
          { label: 'Unlimited outbound minutes across Europe' },
          { label: 'Unlimited inbound minutes' },
          { label: 'Unlimited AI transcription minutes' },
          { value: '1,000', label: 'SMS segments across Europe' },
        ],
      },
      {
        heading: 'Everything in Team and',
        items: [
          { label: 'Power dialer' },
          { label: 'Bulk SMS campaigns' },
          { label: 'Queue callback' },
          { label: 'Intelligent call routing' },
          { label: 'Salesforce CTI integration' },
          { label: 'Advanced roles and permissions' },
          { label: 'Advanced analytics and reporting' },
          { label: 'Higher API limits for scale' },
        ],
      },
    ],
  },
  {
    identifier: 'pro-plus',
    suiteIdentifier: 'ai-communication-suite',
    order: 3,
    name: 'Pro Plus',
    description: 'Scale your operations and team with AI coaching and tracking',
    annual: '89',
    monthly: '109',
    ctas: [
      { text: 'Get Started', url: '/signup', variant: 'filled' },
      { text: 'Talk to Us', url: '/demo', variant: 'outline' },
    ],
    groups: [
      {
        heading: 'Included Credits',
        items: [
          { label: 'Unlimited outbound minutes across Europe' },
          { label: 'Unlimited inbound minutes' },
          { label: 'Unlimited AI transcription minutes' },
          { value: '1,000', label: 'SMS segments across Europe' },
        ],
      },
      {
        heading: 'Everything in Pro and',
        items: [
          { label: 'AI Review Assist', value: 'Included' },
          { label: 'Multi-channel AI notetaker' },
          { label: 'SMS Co-pilot' },
          { label: 'Coaching comments' },
          { label: 'Real-time agent assist' },
          { label: 'AI-powered script compliance' },
          { label: 'AI call scoring' },
          { label: 'Sentiment analysis' },
        ],
      },
    ],
  },
  {
    identifier: 'business',
    suiteIdentifier: 'ai-communication-suite',
    order: 4,
    name: 'Business',
    description: 'For enterprise-grade security, compliance, and flexibility',
    annual: 'Custom',
    monthly: 'Custom',
    pricePrefix: 'Request a Quote',
    ctas: [{ text: 'Talk to Us', url: '/demo', variant: 'filled' }],
    groups: [
      {
        heading: 'Everything in Pro Plus and',
        items: [
          { label: 'Unlimited calling and SMS' },
          { label: 'Single sign-on' },
          { label: 'Enterprise-grade SLA' },
          { label: 'Enterprise-grade compliance (HIPAA, GDPR, etc.)' },
          { label: 'Personalized onboarding' },
          { label: 'Dedicated phone support line' },
          { label: 'Maximum API rate limits' },
        ],
      },
    ],
  },
  {
    identifier: 'salespro',
    suiteIdentifier: 'sales-suite',
    order: 5,
    name: 'SalesPro',
    description: 'High volume outreach via multi-line dialing with industry-leading connect rates',
    annual: 'Custom',
    monthly: 'Custom',
    pricePrefix: 'Request a Quote',
    ctas: [{ text: 'Get a Quote', url: '/demo', variant: 'filled' }],
    groups: [
      {
        heading: "What's included",
        items: [
          { label: 'Unlimited outbound calling' },
          { label: 'Call transcription and summary' },
          { label: 'Predictive dialer (up to 10 lines)' },
          { label: 'Power and Dynamic dialer' },
          { label: 'Number Health' },
          { label: 'Workflows and automation' },
          { label: 'Voicemail automation suite' },
          { label: 'Dedicated success manager' },
          { label: 'Personalized onboarding' },
        ],
      },
    ],
  },
];

const comparisonPlans = [
  { id: 'team', suiteId: 'ai-communication-suite', name: 'Team' },
  { id: 'pro', suiteId: 'ai-communication-suite', name: 'Pro', highlighted: true },
  { id: 'pro-plus', suiteId: 'ai-communication-suite', name: 'Pro Plus' },
  { id: 'business', suiteId: 'ai-communication-suite', name: 'Business' },
  { id: 'salespro', suiteId: 'sales-suite', name: 'SalesPro', highlighted: true },
  { id: 'payg', suiteId: 'ai-voice-agent', name: 'PAYG' },
  { id: 'agent-lite', suiteId: 'ai-voice-agent', name: 'Agent Lite', highlighted: true },
  { id: 'agent-max', suiteId: 'ai-voice-agent', name: 'Agent Max' },
];

const comparisonCategories = [
  {
    title: 'Included credits',
    suiteId: 'ai-communication-suite',
    rows: [
      { feature: 'Outbound calling', values: { team: 'Unlimited', pro: 'Unlimited', 'pro-plus': 'Unlimited', business: 'Unlimited' } },
      { feature: 'Inbound calling', values: { team: 'Unlimited', pro: 'Unlimited', 'pro-plus': 'Unlimited', business: 'Unlimited' } },
      { feature: 'SMS segments', values: { team: '500', pro: '1,000', 'pro-plus': '1,000', business: 'Unlimited' } },
      { feature: 'AI transcription minutes', values: { team: 'Unlimited', pro: 'Unlimited', 'pro-plus': 'Unlimited', business: 'Unlimited' } },
    ],
  },
  {
    title: 'Core platform',
    suiteId: 'ai-communication-suite',
    rows: [
      { feature: 'Local number in 70+ countries', values: { team: true, pro: true, 'pro-plus': true, business: true } },
      { feature: '100+ CRM and data integrations', values: { team: true, pro: true, 'pro-plus': true, business: true } },
      { feature: 'Power dialer', values: { team: false, pro: true, 'pro-plus': true, business: true } },
      { feature: 'Bulk SMS campaigns', values: { team: false, pro: true, 'pro-plus': true, business: true } },
      { feature: 'Advanced analytics and reporting', values: { team: false, pro: true, 'pro-plus': true, business: true } },
      { feature: 'Single sign-on', values: { team: false, pro: false, 'pro-plus': false, business: true } },
    ],
  },
  {
    title: 'AI coaching and automation',
    suiteId: 'ai-communication-suite',
    rows: [
      { feature: 'AI Review Assist', values: { team: 'Add-on', pro: 'Add-on', 'pro-plus': 'Included', business: 'Included' } },
      { feature: 'Real-time agent assist', values: { team: false, pro: false, 'pro-plus': true, business: true } },
      { feature: 'AI call scoring', values: { team: false, pro: false, 'pro-plus': true, business: true } },
      { feature: 'AI-powered script compliance', values: { team: false, pro: false, 'pro-plus': true, business: true } },
    ],
  },
  {
    title: 'Sales dialer',
    suiteId: 'sales-suite',
    rows: [
      { feature: 'Unlimited outbound calling', values: { salespro: true } },
      { feature: 'Predictive dialer (up to 10 lines)', values: { salespro: true } },
      { feature: 'Power and Dynamic dialer', values: { salespro: true } },
      { feature: 'Workflows and automation', values: { salespro: true } },
      { feature: 'Dedicated success manager', values: { salespro: true } },
    ],
  },
  {
    title: 'AI Voice Agent',
    suiteId: 'ai-voice-agent',
    rows: [
      { feature: 'Starting price', values: { payg: '$0.99/minute', 'agent-lite': '$99/month', 'agent-max': '$249/month' } },
      { feature: 'Included minutes', values: { payg: '-', 'agent-lite': '100 minutes', 'agent-max': '300 minutes' } },
      { feature: 'CRM logging', values: { payg: false, 'agent-lite': true, 'agent-max': true } },
      { feature: 'Custom actions', values: { payg: false, 'agent-lite': false, 'agent-max': true } },
      { feature: 'Outbound calling', values: { payg: false, 'agent-lite': false, 'agent-max': 'Beta' } },
    ],
  },
];

const customerLogoRows = [
  [
    ['Bearing Point', 'https://cdn.justcall.io/assets-marketing/images/temp/customer-bearingpoint-logo.webp'],
    ['Hire EZ', 'https://cdn.justcall.io/assets-marketing/images/temp/customer-hireez-logo.webp'],
    ['Galt', 'https://cdn.justcall.io/assets-marketing/images/temp/customer-galt-logo.webp'],
    ['Hostinger', 'https://cdn.justcall.io/assets-marketing/images/temp/customer-hostinger-logo.webp'],
    ['Headspace', 'https://cdn.justcall.io/assets-marketing/images/temp/customer-headspace-logo.webp'],
    ['FilterBuy', 'https://cdn.justcall.io/assets-marketing/images/temp/customer-filterbuy-logo.webp'],
    ['Reply', 'https://cdn.justcall.io/assets-marketing/images/temp/customer-reply-logo.webp'],
    ['Anyroad', 'https://cdn.justcall.io/assets-marketing/images/temp/customer-anyroad-logo.webp'],
    ['Aurora', 'https://cdn.justcall.io/assets-marketing/images/temp/customer-aurora-logo.webp'],
    ['Leap', 'https://cdn.justcall.io/assets-marketing/images/temp/customer-leap-logo.webp'],
  ],
  [
    ['Statista', 'https://cdn.justcall.io/assets-marketing/images/temp/customer-statista-logo.webp'],
    ['Upgrad', 'https://cdn.justcall.io/assets-marketing/images/temp/customer-upgrad-logo.webp'],
    ['Alteactive', 'https://cdn.justcall.io/assets-marketing/images/temp/customer-alteactive-logo.webp'],
    ['Group Mercure', 'https://cdn.justcall.io/assets-marketing/images/temp/customer-groupmercure-logo.webp'],
    ['Gogolook', 'https://cdn.justcall.io/assets-marketing/images/temp/customer-gogolook-logo.webp'],
    ['Profitroom', 'https://cdn.justcall.io/assets-marketing/images/temp/customer-profitroom-logo.webp'],
    ['Loan Market', 'https://cdn.justcall.io/assets-marketing/images/temp/customer-loanmarket-logo.webp'],
    ['Grab', 'https://cdn.justcall.io/assets-marketing/images/temp/customer-grab-logo.webp'],
    ['LSSI', 'https://cdn.justcall.io/assets-marketing/images/temp/customer-lssi-logo.webp'],
  ],
];

const businessTestimonials = [
  {
    identifier: 'betr',
    company: 'Betr',
    quote: 'By consolidating communication channels into a single, mobile-friendly platform, JustCall eliminated the need for us to have multiple mobile devices and resulted in significant cost savings for Betr.',
    person: 'Caitlin Bird',
    role: 'Head of Customer Operations, Betr',
    logoWidth: 106,
    logoHeight: 38,
    logo: ['Betr logo', 'https://cdn.justcall.io/assets-marketing/images/temp/betr-logo.webp', 106, 38],
    image: ['Betr', 'https://cdn.justcall.io/assets-marketing/images/temp/betr-testi-image.webp', 380, 380],
    caseStudyUrl: '/customers/betr/',
  },
  {
    identifier: 'ava',
    company: 'Ava',
    quote: "JustCall's user-friendly interface made setting up easy and new additions to our team are up and running in no time.",
    person: 'Sukhman Babra',
    role: 'Operations Team Lead, Ava Industries',
    logoWidth: 78,
    logoHeight: 35,
    logo: ['Ava logo', 'https://cdn.justcall.io/assets-marketing/images/temp/ava-logo.webp', 78, 35],
    image: ['Ava', 'https://cdn.justcall.io/assets-marketing/images/temp/ava-testi-image.webp', 380, 380],
    caseStudyUrl: '/customers/ava-industries/',
  },
  {
    identifier: 'pinnacle',
    company: 'Pinnacle',
    quote: 'We are getting so much value from the various tools in JustCall - call recording, the sales dialer, SMS messaging, analytics, and the HubSpot integration.',
    person: 'Bayleigh Vick',
    role: 'Remote Admissions Manager, Pinnacle Career Institute',
    logoWidth: 157,
    logoHeight: 38,
    logo: ['Pinnacle logo', 'https://cdn.justcall.io/assets-marketing/images/temp/pinnacle.png', 157, 38],
    caseStudyUrl: '/customers/pinnacle-career-institute/',
  },
  {
    identifier: 'ams',
    company: 'AMS',
    quote: 'Thanks to JustCall, we now have real insight into our communications. The Call Analytics reporting is flexible enough to view communications by employee or by client.',
    person: 'Paul Chalker',
    role: 'CEO and Owner, Ability Mentor Solutions',
    logoWidth: 55,
    logoHeight: 55,
    logo: ['AMS logo', 'https://cdn.justcall.io/assets-marketing/images/temp/ams-logo.png', 55, 55],
    caseStudyUrl: '/customers/ability-mentor-solutions/',
  },
];

const aiTestimonials = [
  {
    identifier: 'ellie-lott',
    suiteIdentifier: 'ai-voice-agent',
    company: 'SnapADU',
    quote: 'Our AI agent helps potential clients get immediate answers, screens out unqualified leads, and gathers key details so our team can focus on high-intent follow-ups.',
    person: 'Ellie Lott',
    role: 'SnapADU',
    image: ['Ellie Lott', 'https://cdn.justcall.io/assets-marketing/images/temp/ellie-lott-testimonial.webp', 190, 420],
  },
  {
    identifier: 'kenneth-griffin',
    suiteIdentifier: 'ai-voice-agent',
    company: 'JustSayHello.com',
    quote: "JustCall's AI Voice Agent handles every inbound call with empathy and helped us move to 24/7 availability without adding staff, saving over $200K in the first year.",
    person: 'Kenneth Griffin',
    role: 'CEO, JustSayHello.com',
    image: ['Kenneth Griffin', 'https://cdn.justcall.io/assets-marketing/images/temp/kenneth-griffin-testimonial.webp', 190, 420],
  },
  {
    identifier: 'joshua-padilla',
    suiteIdentifier: 'ai-voice-agent',
    company: 'Solar Industry Professional',
    quote: 'We never miss a call now, and our AI agent handles about 75-80% without needing a human. Our team spends more time supporting clients where it matters.',
    person: 'Joshua Padilla',
    role: 'Solar Industry Professional',
    image: ['Joshua Padilla', 'https://cdn.justcall.io/assets-marketing/images/temp/joshua-padilla-testimonial.webp', 190, 420],
  },
  {
    identifier: 'kennedy-tartaglia',
    suiteIdentifier: 'ai-voice-agent',
    company: 'Dental Assisting Academy',
    quote: 'AI Voice Agent instantly handles our most common questions and manages critical scenarios with automatic emergency transfers.',
    person: 'Kennedy Tartaglia',
    role: 'Dental Assisting Academy',
    image: ['Kennedy Tartaglia', 'https://cdn.justcall.io/assets-marketing/images/temp/kennedy-tartaglia-testimonial.webp', 190, 420],
  },
];

const businessStats = [
  ['62%', 'Higher connect rate'],
  ['8x', 'ROI within a year'],
  ['57%', 'Increase in sales close rate'],
  ['4x', 'Increase in outbound activity/rep'],
];

const randomDocumentId = () => crypto.randomBytes(12).toString('hex');

const fileMeta = (url) => {
  const pathname = new URL(url).pathname;
  const ext = path.extname(pathname).toLowerCase() || '.webp';
  const name = path.basename(pathname);
  const mime = ext === '.png' ? 'image/png' : ext === '.svg' ? 'image/svg+xml' : 'image/webp';

  return { ext, name, mime, hash: name.replace(/[^a-z0-9]+/gi, '_').replace(/^_|_$/g, '').toLowerCase() };
};

async function ensureFile(conn, [alt, url, width, height]) {
  const [existing] = await conn.query('SELECT id FROM files WHERE url = ? LIMIT 1', [url]);
  if (existing[0]) return existing[0].id;

  const meta = fileMeta(url);
  const [result] = await conn.query(
    `INSERT INTO files
      (document_id, name, alternative_text, width, height, formats, hash, ext, mime, size, url, provider, folder_path, created_at, updated_at, published_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(6), NOW(6), NOW(6))`,
    [randomDocumentId(), meta.name, alt, width, height, null, meta.hash, meta.ext, meta.mime, 0.01, url, 'local', '/'],
  );

  return result.insertId;
}

async function linkFile(conn, testimonialId, field, file) {
  if (!file) return;
  const fileId = await ensureFile(conn, file);

  await conn.query(
    'DELETE FROM files_related_mph WHERE related_id = ? AND related_type = ? AND field = ?',
    [testimonialId, 'pricing.testimonial', field],
  );
  await conn.query(
    'INSERT INTO files_related_mph (file_id, related_id, related_type, field, `order`) VALUES (?, ?, ?, ?, ?)',
    [fileId, testimonialId, 'pricing.testimonial', field, 1],
  );
}

async function insertTitle(conn, tableName, relationTable, entityId, heading, subHeading = null) {
  await conn.query(`DELETE FROM ${relationTable} WHERE entity_id = ? AND field = ?`, [entityId, 'title']);
  const [titleResult] = await conn.query(
    'INSERT INTO components_basic_titles (heading, sub_heading) VALUES (?, ?)',
    [heading, subHeading],
  );
  await conn.query(
    `INSERT INTO ${relationTable} (entity_id, cmp_id, component_type, field, \`order\`) VALUES (?, ?, ?, ?, ?)`,
    [entityId, titleResult.insertId, 'basic.title', 'title', null],
  );
}

async function ensureLinkedComponent(conn, pricingId, componentType, createComponent, desiredOrder) {
  const [existing] = await conn.query(
    'SELECT cmp_id FROM pricings_cmps WHERE entity_id = ? AND component_type = ? AND field = ? LIMIT 1',
    [pricingId, componentType, 'content'],
  );

  const componentId = existing[0]?.cmp_id || await createComponent();

  if (!existing[0]) {
    await conn.query(
      'INSERT INTO pricings_cmps (entity_id, cmp_id, component_type, field, `order`) VALUES (?, ?, ?, ?, ?)',
      [pricingId, componentId, componentType, 'content', desiredOrder],
    );
  }

  await conn.query(
    'UPDATE pricings_cmps SET `order` = ? WHERE entity_id = ? AND component_type = ? AND cmp_id = ? AND field = ?',
    [desiredOrder, pricingId, componentType, componentId, 'content'],
  );

  return componentId;
}

async function upsertPlan(conn, pricingCardsId, plan) {
  const [existing] = await conn.query(
    `SELECT p.id
     FROM components_pricing_plans p
     INNER JOIN components_pricing_pricing_cards_cmps c ON c.cmp_id = p.id
     WHERE c.entity_id = ? AND c.component_type = ? AND c.field = ? AND p.identifier = ? AND p.suite_identifier = ?
     LIMIT 1`,
    [pricingCardsId, 'pricing.plan', 'plans', plan.identifier, plan.suiteIdentifier],
  );

  let planId = existing[0]?.id;
  if (!planId) {
    const [result] = await conn.query(
      `INSERT INTO components_pricing_plans
        (identifier, suite_identifier, name, description, badge, highlighted, price_prefix, price_suffix, add_on_callout)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [plan.identifier, plan.suiteIdentifier, plan.name, plan.description, plan.badge || null, Boolean(plan.highlighted), plan.pricePrefix || null, null, null],
    );
    planId = result.insertId;
    await conn.query(
      'INSERT INTO components_pricing_pricing_cards_cmps (entity_id, cmp_id, component_type, field, `order`) VALUES (?, ?, ?, ?, ?)',
      [pricingCardsId, planId, 'pricing.plan', 'plans', plan.order],
    );
  } else {
    await conn.query(
      `UPDATE components_pricing_plans
       SET name = ?, description = ?, badge = ?, highlighted = ?, price_prefix = ?, price_suffix = ?, add_on_callout = ?
       WHERE id = ?`,
      [plan.name, plan.description, plan.badge || null, Boolean(plan.highlighted), plan.pricePrefix || null, null, null, planId],
    );
    await conn.query(
      'UPDATE components_pricing_pricing_cards_cmps SET `order` = ? WHERE entity_id = ? AND cmp_id = ? AND component_type = ? AND field = ?',
      [plan.order, pricingCardsId, planId, 'pricing.plan', 'plans'],
    );
  }

  await conn.query('DELETE FROM components_pricing_plans_cmps WHERE entity_id = ?', [planId]);

  const [priceResult] = await conn.query(
    'INSERT INTO components_pricing_plan_prices (region_identifier, annual, monthly, suffix) VALUES (?, ?, ?, ?)',
    [null, plan.annual, plan.monthly, 'per user/month, billed annually'],
  );
  await conn.query(
    'INSERT INTO components_pricing_plans_cmps (entity_id, cmp_id, component_type, field, `order`) VALUES (?, ?, ?, ?, ?)',
    [planId, priceResult.insertId, 'pricing.plan-price', 'prices', 1],
  );

  for (const [index, button] of plan.ctas.entries()) {
    const [buttonResult] = await conn.query(
      'INSERT INTO components_basic_buttons (text, url, variant, background_color, border_color, text_color) VALUES (?, ?, ?, ?, ?, ?)',
      [button.text, button.url, button.variant || null, null, null, null],
    );
    await conn.query(
      'INSERT INTO components_pricing_plans_cmps (entity_id, cmp_id, component_type, field, `order`) VALUES (?, ?, ?, ?, ?)',
      [planId, buttonResult.insertId, 'basic.button', 'ctas', index + 1],
    );
  }

  for (const [groupIndex, group] of plan.groups.entries()) {
    const [groupResult] = await conn.query(
      'INSERT INTO components_pricing_feature_groups (heading) VALUES (?)',
      [group.heading],
    );
    await conn.query(
      'INSERT INTO components_pricing_plans_cmps (entity_id, cmp_id, component_type, field, `order`) VALUES (?, ?, ?, ?, ?)',
      [planId, groupResult.insertId, 'pricing.feature-group', 'featureGroups', groupIndex + 1],
    );

    for (const [itemIndex, item] of group.items.entries()) {
      const [featureResult] = await conn.query(
        'INSERT INTO components_pricing_features (label, tooltip, value, muted) VALUES (?, ?, ?, ?)',
        [item.label, item.tooltip || null, item.value || null, Boolean(item.muted)],
      );
      await conn.query(
        'INSERT INTO components_pricing_feature_groups_cmps (entity_id, cmp_id, component_type, field, `order`) VALUES (?, ?, ?, ?, ?)',
        [groupResult.insertId, featureResult.insertId, 'pricing.feature', 'items', itemIndex + 1],
      );
    }
  }

  return planId;
}

async function updatePricingCards(conn, pricingCardsId) {
  for (const plan of planDefinitions) {
    await upsertPlan(conn, pricingCardsId, plan);
  }

  await conn.query(
    'UPDATE components_pricing_pricing_cards SET fair_usage_notes = ? WHERE id = ?',
    [
      JSON.stringify([
        { type: 'paragraph', children: [{ type: 'text', text: 'Fair usage policy' }] },
        { type: 'paragraph', children: [{ type: 'text', text: 'Calling includes outbound mobile and landline calls within your selected region, and inbound calls on supported routes. It excludes toll-free, premium-rate, international calls, call forwards, and Sales Dialer traffic.' }] },
        { type: 'paragraph', children: [{ type: 'text', text: 'SMS includes messages to numbers in your selected region. It excludes SMS sent via workflows, bulk campaigns, and CRM automations.' }] },
      ]),
      pricingCardsId,
    ],
  );
}

async function updateComparisonTable(conn, comparisonTableId) {
  await conn.query(
    'UPDATE components_pricing_comparison_tables SET search_placeholder = ?, empty_state = ?, default_expanded = ?, plans = ?, categories = ? WHERE id = ?',
    ['Search features', 'No results found!', false, JSON.stringify(comparisonPlans), JSON.stringify(comparisonCategories), comparisonTableId],
  );
  await insertTitle(conn, 'components_pricing_comparison_tables', 'components_pricing_comparison_tables_cmps', comparisonTableId, 'Compare all plans');
}

async function updateCustomerLogos(conn, logoSectionId) {
  await conn.query('UPDATE components_shared_customer_logos_sections SET heading = ? WHERE id = ?', ['Trusted by 6,000+ customers', logoSectionId]);
  await conn.query('DELETE FROM components_shared_customer_logos_sections_cmps WHERE entity_id = ?', [logoSectionId]);

  for (const [rowIndex, row] of customerLogoRows.entries()) {
    for (const [logoIndex, [alt, url]] of row.entries()) {
      const [itemResult] = await conn.query(
        'INSERT INTO components_shared_logo_items (alt, url) VALUES (?, ?)',
        [alt, url],
      );
      await conn.query(
        'INSERT INTO components_shared_customer_logos_sections_cmps (entity_id, cmp_id, component_type, field, `order`) VALUES (?, ?, ?, ?, ?)',
        [logoSectionId, itemResult.insertId, 'shared.logo-item', rowIndex === 0 ? 'logos' : 'secondRowLogos', logoIndex + 1],
      );
    }
  }
}

async function updateTestimonialStats(conn, testimonialStatsId, testimonials, stats = []) {
  await conn.query('UPDATE components_pricing_testimonial_stats SET heading = ? WHERE id = ?', ["Don't just take our word for it", testimonialStatsId]);
  await conn.query('DELETE FROM components_pricing_testimonial_stats_cmps WHERE entity_id = ?', [testimonialStatsId]);

  for (const [index, testimonial] of testimonials.entries()) {
    const [result] = await conn.query(
      `INSERT INTO components_pricing_testimonials
        (identifier, suite_identifier, company, quote, person, role, case_study_url, logo_width, logo_height)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        testimonial.identifier,
        testimonial.suiteIdentifier || null,
        testimonial.company,
        testimonial.quote,
        testimonial.person,
        testimonial.role,
        testimonial.caseStudyUrl || null,
        testimonial.logoWidth || null,
        testimonial.logoHeight || null,
      ],
    );

    await linkFile(conn, result.insertId, 'logo', testimonial.logo);
    await linkFile(conn, result.insertId, 'image', testimonial.image);

    await conn.query(
      'INSERT INTO components_pricing_testimonial_stats_cmps (entity_id, cmp_id, component_type, field, `order`) VALUES (?, ?, ?, ?, ?)',
      [testimonialStatsId, result.insertId, 'pricing.testimonial', 'testimonials', index + 1],
    );
  }

  for (const [index, [value, label, suiteIdentifier]] of stats.entries()) {
    const [statResult] = await conn.query(
      'INSERT INTO components_pricing_stats (value, label, suite_identifier) VALUES (?, ?, ?)',
      [value, label, suiteIdentifier || null],
    );
    await conn.query(
      'INSERT INTO components_pricing_testimonial_stats_cmps (entity_id, cmp_id, component_type, field, `order`) VALUES (?, ?, ?, ?, ?)',
      [testimonialStatsId, statResult.insertId, 'pricing.stat', 'stats', index + 1],
    );
  }
}

async function createRow(conn, table, defaults = {}) {
  const columns = Object.keys(defaults);
  if (!columns.length) {
    const [result] = await conn.query(`INSERT INTO ${table} () VALUES ()`);
    return result.insertId;
  }

  const placeholders = columns.map(() => '?').join(', ');
  const [result] = await conn.query(
    `INSERT INTO ${table} (${columns.join(', ')}) VALUES (${placeholders})`,
    Object.values(defaults),
  );
  return result.insertId;
}

async function seedPricing(conn, pricingId) {
  const [pricingCardsRows] = await conn.query(
    'SELECT cmp_id FROM pricings_cmps WHERE entity_id = ? AND component_type = ? AND field = ? LIMIT 1',
    [pricingId, 'pricing.pricing-cards', 'content'],
  );
  if (pricingCardsRows[0]) await updatePricingCards(conn, pricingCardsRows[0].cmp_id);

  const comparisonTableId = await ensureLinkedComponent(
    conn,
    pricingId,
    'pricing.comparison-table',
    () => createRow(conn, 'components_pricing_comparison_tables', {
      search_placeholder: 'Search features',
      empty_state: 'No results found!',
      default_expanded: false,
      plans: JSON.stringify(comparisonPlans),
      categories: JSON.stringify(comparisonCategories),
    }),
    4,
  );
  await updateComparisonTable(conn, comparisonTableId);

  const logoSectionId = await ensureLinkedComponent(
    conn,
    pricingId,
    'shared.customer-logos-section',
    () => createRow(conn, 'components_shared_customer_logos_sections', { heading: 'Trusted by 6,000+ customers' }),
    5,
  );
  await updateCustomerLogos(conn, logoSectionId);

  const [primaryTestimonialRows] = await conn.query(
    'SELECT cmp_id FROM pricings_cmps WHERE entity_id = ? AND component_type = ? AND field = ? ORDER BY `order` LIMIT 1',
    [pricingId, 'pricing.testimonial-stats', 'content'],
  );
  const primaryTestimonialStatsId = primaryTestimonialRows[0]?.cmp_id || await ensureLinkedComponent(
    conn,
    pricingId,
    'pricing.testimonial-stats',
    () => createRow(conn, 'components_pricing_testimonial_stats', { heading: "Don't just take our word for it" }),
    6,
  );

  await updateTestimonialStats(conn, primaryTestimonialStatsId, businessTestimonials, businessStats);
  await conn.query(
    'UPDATE pricings_cmps SET `order` = ? WHERE entity_id = ? AND component_type = ? AND cmp_id = ? AND field = ?',
    [6, pricingId, 'pricing.testimonial-stats', primaryTestimonialStatsId, 'content'],
  );

  const [aiTestimonialRows] = await conn.query(
    `SELECT pc.cmp_id
     FROM pricings_cmps pc
     INNER JOIN components_pricing_testimonial_stats_cmps tc ON tc.entity_id = pc.cmp_id
     INNER JOIN components_pricing_testimonials t ON t.id = tc.cmp_id
     WHERE pc.entity_id = ? AND pc.component_type = ? AND pc.field = ? AND t.suite_identifier = ?
     LIMIT 1`,
    [pricingId, 'pricing.testimonial-stats', 'content', 'ai-voice-agent'],
  );
  let aiTestimonialStatsId = aiTestimonialRows[0]?.cmp_id;
  if (!aiTestimonialStatsId) {
    aiTestimonialStatsId = await createRow(conn, 'components_pricing_testimonial_stats', { heading: "Don't just take our word for it" });
    await conn.query(
      'INSERT INTO pricings_cmps (entity_id, cmp_id, component_type, field, `order`) VALUES (?, ?, ?, ?, ?)',
      [pricingId, aiTestimonialStatsId, 'pricing.testimonial-stats', 'content', 7],
    );
  }
  await updateTestimonialStats(conn, aiTestimonialStatsId, aiTestimonials);
  await conn.query(
    'UPDATE pricings_cmps SET `order` = ? WHERE entity_id = ? AND component_type = ? AND cmp_id = ? AND field = ?',
    [7, pricingId, 'pricing.testimonial-stats', aiTestimonialStatsId, 'content'],
  );

  await conn.query(
    'UPDATE pricings_cmps SET `order` = CASE component_type WHEN ? THEN 8 WHEN ? THEN 9 ELSE `order` END WHERE entity_id = ? AND field = ? AND component_type IN (?, ?)',
    ['common.faq', 'pricing.cta-banner', pricingId, 'content', 'common.faq', 'pricing.cta-banner'],
  );

  await conn.query('UPDATE pricings SET updated_at = NOW(6) WHERE id = ?', [pricingId]);
}

async function main() {
  const conn = await mysql.createConnection({
    host: env.DATABASE_HOST || 'localhost',
    port: Number(env.DATABASE_PORT || 3306),
    user: env.DATABASE_USERNAME,
    password: env.DATABASE_PASSWORD,
    database: env.DATABASE_NAME,
  });

  await conn.beginTransaction();
  try {
    const [pricingRows] = await conn.query('SELECT id FROM pricings ORDER BY id');
    for (const row of pricingRows) {
      await seedPricing(conn, row.id);
    }

    await conn.commit();
    console.log(`Seeded live pricing page sections for ${pricingRows.length} pricing row(s).`);
  } catch (error) {
    await conn.rollback();
    throw error;
  } finally {
    await conn.end();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
