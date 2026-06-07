import type { Schema, Struct } from '@strapi/strapi';

export interface BasicButton extends Struct.ComponentSchema {
  collectionName: 'components_basic_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    borderColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    text: Schema.Attribute.String;
    textColor: Schema.Attribute.Enumeration<['black', 'white']>;
    url: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['filled', 'outline']> &
      Schema.Attribute.DefaultTo<'filled'>;
  };
}

export interface BasicHeadingWithContent extends Struct.ComponentSchema {
  collectionName: 'components_basic_heading_with_contents';
  info: {
    displayName: 'Heading With Content';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
  };
}

export interface BasicHeadingWithImage extends Struct.ComponentSchema {
  collectionName: 'components_basic_heading_with_images';
  info: {
    displayName: 'Heading With Image';
    icon: 'command';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BasicLists extends Struct.ComponentSchema {
  collectionName: 'components_basic_lists';
  info: {
    displayName: 'lists';
  };
  attributes: {
    item: Schema.Attribute.String;
  };
}

export interface BasicTitle extends Struct.ComponentSchema {
  collectionName: 'components_basic_titles';
  info: {
    displayName: 'Title';
    icon: 'apps';
  };
  attributes: {
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.String;
  };
}

export interface BasicTitleWithButton extends Struct.ComponentSchema {
  collectionName: 'components_basic_title_with_buttons';
  info: {
    displayName: 'Title With Button';
    icon: 'connector';
  };
  attributes: {
    button: Schema.Attribute.Component<'basic.button', false>;
    testimonials: Schema.Attribute.Relation<
      'oneToMany',
      'api::testinonial.testinonial'
    >;
    title: Schema.Attribute.Component<'basic.title', false>;
  };
}

export interface BasicTitleWithImage extends Struct.ComponentSchema {
  collectionName: 'components_basic_title_with_images';
  info: {
    displayName: 'Title With Image';
    icon: 'chartBubble';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subHeading: Schema.Attribute.String;
  };
}

export interface CommonCta extends Struct.ComponentSchema {
  collectionName: 'components_common_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    button: Schema.Attribute.Component<'basic.button', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    lists: Schema.Attribute.Component<'basic.lists', true>;
    title: Schema.Attribute.Component<'basic.title', false>;
  };
}

export interface CommonFaq extends Struct.ComponentSchema {
  collectionName: 'components_common_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    design: Schema.Attribute.Enumeration<['design_type_1', 'design_type_2']>;
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'basic.heading-with-content', true>;
  };
}

export interface CommonTable extends Struct.ComponentSchema {
  collectionName: 'components_common_tables';
  info: {
    displayName: 'Table';
  };
  attributes: {
    table: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<'plugin::table-field.table'>;
    title: Schema.Attribute.Component<'basic.title', false>;
  };
}

export interface FiltersComponenets extends Struct.ComponentSchema {
  collectionName: 'components_filters_componenets';
  info: {
    displayName: 'Componenets';
  };
  attributes: {
    contents: Schema.Attribute.Component<'basic.title-with-button', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface FiltersFilter1 extends Struct.ComponentSchema {
  collectionName: 'components_filters_filter_1s';
  info: {
    displayName: 'Filter 1';
    icon: 'chartCircle';
  };
  attributes: {
    items: Schema.Attribute.Component<'filters.componenets', true>;
    title: Schema.Attribute.Component<'basic.title', false>;
  };
}

export interface FooterImageLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_image_links';
  info: {
    displayName: 'Footer Image Link';
  };
  attributes: {
    className: Schema.Attribute.String;
    height: Schema.Attribute.Integer;
    imageUrl: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface FooterLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_links';
  info: {
    displayName: 'Footer Link';
  };
  attributes: {
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterLinkGroup extends Struct.ComponentSchema {
  collectionName: 'components_footer_link_groups';
  info: {
    displayName: 'Footer Link Group';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    links: Schema.Attribute.Component<'footer.link', true>;
  };
}

export interface GridsGrid1 extends Struct.ComponentSchema {
  collectionName: 'components_grids_grid_1s';
  info: {
    displayName: 'Grid 1';
    icon: 'apps';
  };
  attributes: {
    lists: Schema.Attribute.Component<'basic.heading-with-image', true>;
    title: Schema.Attribute.Component<'basic.title', false>;
  };
}

export interface HeroHero1 extends Struct.ComponentSchema {
  collectionName: 'components_hero_hero_1s';
  info: {
    displayName: 'Hero 1';
  };
  attributes: {
    certifications: Schema.Attribute.Relation<
      'oneToMany',
      'api::certification.certification'
    >;
    title: Schema.Attribute.Component<'basic.title', false>;
  };
}

export interface HeroHero2 extends Struct.ComponentSchema {
  collectionName: 'components_hero_hero_2s';
  info: {
    displayName: 'Hero 2';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'> &
      Schema.Attribute.DefaultTo<'#FFFEF8'>;
    backgroundImage: Schema.Attribute.Media<'images'>;
    buttons: Schema.Attribute.Component<'basic.button', true>;
    certifications: Schema.Attribute.Relation<
      'oneToMany',
      'api::certification.certification'
    >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    integrationBadge: Schema.Attribute.Media<'images'>;
    integrationBadgeAlt: Schema.Attribute.String;
    lists: Schema.Attribute.Component<'basic.lists', true>;
    showTrialForm: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    textColor: Schema.Attribute.Enumeration<['black', 'white']> &
      Schema.Attribute.DefaultTo<'black'>;
    title: Schema.Attribute.Component<'basic.title', false>;
    trialButtonLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Start Free Trial'>;
    trialButtonUrl: Schema.Attribute.String;
    trialInputPlaceholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Work email address'>;
  };
}

export interface HeroHero3 extends Struct.ComponentSchema {
  collectionName: 'components_hero_hero_3s';
  info: {
    displayName: 'Hero 3';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    buttons: Schema.Attribute.Component<'basic.button', true>;
    featureCapsules: Schema.Attribute.Component<
      'basic.heading-with-image',
      true
    >;
    leftFeatures: Schema.Attribute.Component<'basic.heading-with-image', true>;
    rightFeatures: Schema.Attribute.Component<'basic.heading-with-image', true>;
    title: Schema.Attribute.Component<'basic.title', false>;
  };
}

export interface HeroSearchIntegration extends Struct.ComponentSchema {
  collectionName: 'components_hero_search_integrations';
  info: {
    displayName: 'Search Integration';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'> &
      Schema.Attribute.DefaultTo<'#001233'>;
    backgroundImage: Schema.Attribute.Media<'images'>;
    ratingImage: Schema.Attribute.Media<'images'>;
    ratingImageAlt: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'G2 Review Stars'>;
    ratingText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'from 1,450+ reviews'>;
    searchInputId: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'search-integrations'>;
    searchPlaceholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Search integrations...'>;
    title: Schema.Attribute.Component<'basic.title', false>;
  };
}

export interface PreFooterPreFooter extends Struct.ComponentSchema {
  collectionName: 'components_pre_footer_pre_footers';
  info: {
    displayName: 'Pre Footer';
  };
  attributes: {
    preFooter: Schema.Attribute.Component<'basic.title-with-image', false>;
  };
}

export interface PricingAiVoiceAgent extends Struct.ComponentSchema {
  collectionName: 'components_pricing_ai_voice_agents';
  info: {
    displayName: 'Pricing AI Voice Agent';
  };
  attributes: {
    ctas: Schema.Attribute.Component<'basic.button', true>;
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'pricing.feature', true>;
    heading: Schema.Attribute.String;
    payAsYouGoLabel: Schema.Attribute.String;
    priceLabel: Schema.Attribute.String;
    suiteIdentifier: Schema.Attribute.String;
    usageSteps: Schema.Attribute.Component<'pricing.usage-step', true>;
  };
}

export interface PricingBillingOption extends Struct.ComponentSchema {
  collectionName: 'components_pricing_billing_options';
  info: {
    displayName: 'Pricing Billing Option';
  };
  attributes: {
    badge: Schema.Attribute.String;
    identifier: Schema.Attribute.Enumeration<['annual', 'monthly']>;
    label: Schema.Attribute.String;
  };
}

export interface PricingComparisonTable extends Struct.ComponentSchema {
  collectionName: 'components_pricing_comparison_tables';
  info: {
    displayName: 'Pricing Comparison Table';
  };
  attributes: {
    categories: Schema.Attribute.JSON;
    defaultExpanded: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    emptyState: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'No results found.'>;
    plans: Schema.Attribute.JSON;
    searchPlaceholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Search features'>;
    title: Schema.Attribute.Component<'basic.title', false>;
  };
}

export interface PricingCtaBanner extends Struct.ComponentSchema {
  collectionName: 'components_pricing_cta_banners';
  info: {
    displayName: 'Pricing CTA Banner';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    buttons: Schema.Attribute.Component<'basic.button', true>;
    leftImage: Schema.Attribute.Media<'images'>;
    rightImage: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.Component<'basic.title', false>;
  };
}

export interface PricingFeature extends Struct.ComponentSchema {
  collectionName: 'components_pricing_features';
  info: {
    displayName: 'Pricing Feature';
  };
  attributes: {
    label: Schema.Attribute.String;
    muted: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    tooltip: Schema.Attribute.Text;
    value: Schema.Attribute.String;
  };
}

export interface PricingFeatureGroup extends Struct.ComponentSchema {
  collectionName: 'components_pricing_feature_groups';
  info: {
    displayName: 'Pricing Feature Group';
  };
  attributes: {
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'pricing.feature', true>;
  };
}

export interface PricingHero extends Struct.ComponentSchema {
  collectionName: 'components_pricing_heroes';
  info: {
    displayName: 'Pricing Hero';
  };
  attributes: {
    title: Schema.Attribute.Component<'basic.title', false>;
  };
}

export interface PricingPlan extends Struct.ComponentSchema {
  collectionName: 'components_pricing_plans';
  info: {
    displayName: 'Pricing Plan';
  };
  attributes: {
    addOnCallout: Schema.Attribute.String;
    badge: Schema.Attribute.String;
    ctas: Schema.Attribute.Component<'basic.button', true>;
    description: Schema.Attribute.Text;
    featureGroups: Schema.Attribute.Component<'pricing.feature-group', true>;
    highlighted: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    identifier: Schema.Attribute.String;
    name: Schema.Attribute.String;
    pricePrefix: Schema.Attribute.String;
    prices: Schema.Attribute.Component<'pricing.plan-price', true>;
    priceSuffix: Schema.Attribute.String;
    suiteIdentifier: Schema.Attribute.String;
  };
}

export interface PricingPlanPrice extends Struct.ComponentSchema {
  collectionName: 'components_pricing_plan_prices';
  info: {
    displayName: 'Pricing Plan Price';
  };
  attributes: {
    annual: Schema.Attribute.String;
    monthly: Schema.Attribute.String;
    regionIdentifier: Schema.Attribute.String;
    suffix: Schema.Attribute.String;
  };
}

export interface PricingPlanSelector extends Struct.ComponentSchema {
  collectionName: 'components_pricing_plan_selectors';
  info: {
    displayName: 'Pricing Plan Selector';
  };
  attributes: {
    billingOptions: Schema.Attribute.Component<'pricing.billing-option', true>;
    defaultBilling: Schema.Attribute.Enumeration<['annual', 'monthly']> &
      Schema.Attribute.DefaultTo<'annual'>;
    defaultRegion: Schema.Attribute.String;
    defaultSuite: Schema.Attribute.String;
    regions: Schema.Attribute.Component<'pricing.region', true>;
    suites: Schema.Attribute.Component<'pricing.suite', true>;
  };
}

export interface PricingPricingCards extends Struct.ComponentSchema {
  collectionName: 'components_pricing_pricing_cards';
  info: {
    displayName: 'Pricing Cards';
  };
  attributes: {
    aiVoiceAgent: Schema.Attribute.Component<'pricing.ai-voice-agent', false>;
    fairUsageNotes: Schema.Attribute.Blocks;
    plans: Schema.Attribute.Component<'pricing.plan', true>;
    title: Schema.Attribute.Component<'basic.title', false>;
  };
}

export interface PricingRegion extends Struct.ComponentSchema {
  collectionName: 'components_pricing_regions';
  info: {
    displayName: 'Pricing Region';
  };
  attributes: {
    currency: Schema.Attribute.String;
    flag: Schema.Attribute.Media<'images'>;
    identifier: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface PricingStat extends Struct.ComponentSchema {
  collectionName: 'components_pricing_stats';
  info: {
    displayName: 'Pricing Stat';
  };
  attributes: {
    label: Schema.Attribute.String;
    suiteIdentifier: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface PricingSuite extends Struct.ComponentSchema {
  collectionName: 'components_pricing_suites';
  info: {
    displayName: 'Pricing Suite';
  };
  attributes: {
    badgeIcon: Schema.Attribute.Media<'images'>;
    badgeLabel: Schema.Attribute.String;
    description: Schema.Attribute.String;
    eyebrow: Schema.Attribute.String;
    hideBillingOptions: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    hideRegionSelector: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    identifier: Schema.Attribute.String;
    label: Schema.Attribute.String;
    lockedBilling: Schema.Attribute.Enumeration<['annual', 'monthly']>;
  };
}

export interface PricingTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_pricing_testimonials';
  info: {
    displayName: 'Pricing Testimonial';
  };
  attributes: {
    caseStudyUrl: Schema.Attribute.String;
    company: Schema.Attribute.String;
    identifier: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    logo: Schema.Attribute.Media<'images'>;
    logoHeight: Schema.Attribute.Integer;
    logoWidth: Schema.Attribute.Integer;
    person: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
    role: Schema.Attribute.String;
    suiteIdentifier: Schema.Attribute.String;
  };
}

export interface PricingTestimonialStats extends Struct.ComponentSchema {
  collectionName: 'components_pricing_testimonial_stats';
  info: {
    displayName: 'Pricing Testimonial Stats';
  };
  attributes: {
    heading: Schema.Attribute.String;
    stats: Schema.Attribute.Component<'pricing.stat', true>;
    testimonials: Schema.Attribute.Component<'pricing.testimonial', true>;
  };
}

export interface PricingUsageStep extends Struct.ComponentSchema {
  collectionName: 'components_pricing_usage_steps';
  info: {
    displayName: 'Pricing Usage Step';
  };
  attributes: {
    ctaLabel: Schema.Attribute.String;
    ctaUrl: Schema.Attribute.String;
    customQuote: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    identifier: Schema.Attribute.String;
    label: Schema.Attribute.String;
    minutes: Schema.Attribute.String;
    prices: Schema.Attribute.Component<'pricing.usage-step-price', true>;
  };
}

export interface PricingUsageStepPrice extends Struct.ComponentSchema {
  collectionName: 'components_pricing_usage_step_prices';
  info: {
    displayName: 'Pricing Usage Step Price';
  };
  attributes: {
    originalPrice: Schema.Attribute.String;
    price: Schema.Attribute.String;
    regionIdentifier: Schema.Attribute.String;
  };
}

export interface ProductGrid1 extends Struct.ComponentSchema {
  collectionName: 'components_product_grid1s';
  info: {
    displayName: 'Grid1';
  };
  attributes: {
    items: Schema.Attribute.Component<'common.cta', true>;
    title: Schema.Attribute.Component<'basic.title', false>;
  };
}

export interface RelationalCertifications extends Struct.ComponentSchema {
  collectionName: 'components_relational_certifications';
  info: {
    displayName: 'Certifications Grid';
  };
  attributes: {
    certifications: Schema.Attribute.Relation<
      'oneToMany',
      'api::certification.certification'
    >;
    title: Schema.Attribute.Component<'basic.title', false>;
  };
}

export interface RelationalLogoGrid extends Struct.ComponentSchema {
  collectionName: 'components_relational_logo_grids';
  info: {
    displayName: 'Logo Grid';
  };
  attributes: {
    logo_grid_1: Schema.Attribute.Relation<'oneToMany', 'api::logo.logo'>;
    logo_grid_2: Schema.Attribute.Relation<'oneToMany', 'api::logo.logo'>;
    title: Schema.Attribute.Component<'basic.title', false>;
    type: Schema.Attribute.Enumeration<['two_way', 'one_way']>;
  };
}

export interface RelationalTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_relational_testimonials';
  info: {
    displayName: 'Testimonials';
    icon: 'cloud';
  };
  attributes: {
    testimonials: Schema.Attribute.Relation<
      'oneToMany',
      'api::testinonial.testinonial'
    >;
  };
}

export interface TeamsAwardsScroller extends Struct.ComponentSchema {
  collectionName: 'components_teams_awards_scrollers';
  info: {
    displayName: 'Teams Awards Scroller';
    icon: 'star';
  };
  attributes: {
    logos: Schema.Attribute.Media<'images', true>;
  };
}

export interface TeamsHero extends Struct.ComponentSchema {
  collectionName: 'components_teams_heroes';
  info: {
    displayName: 'Teams Hero';
    icon: 'layout';
  };
  attributes: {
    lists: Schema.Attribute.Component<'basic.lists', true>;
    title: Schema.Attribute.Component<'basic.title', false>;
    trialButtonLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Start Free Trial'>;
    trialButtonUrl: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'https://justcall.io/signup'>;
    trialInputPlaceholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Work email address'>;
  };
}

export interface TeamsSolutionCard extends Struct.ComponentSchema {
  collectionName: 'components_teams_solution_cards';
  info: {
    displayName: 'Teams Solution Card';
    icon: 'grid';
  };
  attributes: {
    button: Schema.Attribute.Component<'basic.button', false>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface TeamsSolutionGrid extends Struct.ComponentSchema {
  collectionName: 'components_teams_solution_grids';
  info: {
    displayName: 'Teams Solution Grid';
    icon: 'apps';
  };
  attributes: {
    cards: Schema.Attribute.Component<'teams.solution-card', true>;
    title: Schema.Attribute.Component<'basic.title', false>;
  };
}

export interface TeamsTestimonialCard extends Struct.ComponentSchema {
  collectionName: 'components_teams_testimonial_cards';
  info: {
    displayName: 'Teams Testimonial Card';
    icon: 'quote';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    position: Schema.Attribute.String;
    quote: Schema.Attribute.Blocks;
  };
}

export interface TeamsTestimonialSlider extends Struct.ComponentSchema {
  collectionName: 'components_teams_testimonial_sliders';
  info: {
    displayName: 'Teams Testimonial Slider';
    icon: 'message';
  };
  attributes: {
    cards: Schema.Attribute.Component<'teams.testimonial-card', true>;
    heading: Schema.Attribute.String;
  };
}

export interface UpdatesUpdateCard extends Struct.ComponentSchema {
  collectionName: 'components_updates_update_cards';
  info: {
    displayName: 'Update Card';
  };
  attributes: {
    day: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 31;
          min: 1;
        },
        number
      >;
    month: Schema.Attribute.String;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface UpdatesUpdateMarquee extends Struct.ComponentSchema {
  collectionName: 'components_updates_update_marquees';
  info: {
    displayName: 'Update Marquee';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    cards: Schema.Attribute.Component<'updates.update-card', true>;
    heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Built with customer feedback, shipped fast'>;
    rows: Schema.Attribute.Component<'updates.update-row', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
  };
}

export interface UpdatesUpdateRow extends Struct.ComponentSchema {
  collectionName: 'components_updates_update_rows';
  info: {
    displayName: 'Update Row';
  };
  attributes: {
    cards: Schema.Attribute.Component<'updates.update-card', true>;
    reverse: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    speed: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1000;
        },
        number
      > &
      Schema.Attribute.DefaultTo<5000>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'basic.button': BasicButton;
      'basic.heading-with-content': BasicHeadingWithContent;
      'basic.heading-with-image': BasicHeadingWithImage;
      'basic.lists': BasicLists;
      'basic.title': BasicTitle;
      'basic.title-with-button': BasicTitleWithButton;
      'basic.title-with-image': BasicTitleWithImage;
      'common.cta': CommonCta;
      'common.faq': CommonFaq;
      'common.table': CommonTable;
      'filters.componenets': FiltersComponenets;
      'filters.filter-1': FiltersFilter1;
      'footer.image-link': FooterImageLink;
      'footer.link': FooterLink;
      'footer.link-group': FooterLinkGroup;
      'grids.grid-1': GridsGrid1;
      'hero.hero-1': HeroHero1;
      'hero.hero-2': HeroHero2;
      'hero.hero-3': HeroHero3;
      'hero.search-integration': HeroSearchIntegration;
      'pre-footer.pre-footer': PreFooterPreFooter;
      'pricing.ai-voice-agent': PricingAiVoiceAgent;
      'pricing.billing-option': PricingBillingOption;
      'pricing.comparison-table': PricingComparisonTable;
      'pricing.cta-banner': PricingCtaBanner;
      'pricing.feature': PricingFeature;
      'pricing.feature-group': PricingFeatureGroup;
      'pricing.hero': PricingHero;
      'pricing.plan': PricingPlan;
      'pricing.plan-price': PricingPlanPrice;
      'pricing.plan-selector': PricingPlanSelector;
      'pricing.pricing-cards': PricingPricingCards;
      'pricing.region': PricingRegion;
      'pricing.stat': PricingStat;
      'pricing.suite': PricingSuite;
      'pricing.testimonial': PricingTestimonial;
      'pricing.testimonial-stats': PricingTestimonialStats;
      'pricing.usage-step': PricingUsageStep;
      'pricing.usage-step-price': PricingUsageStepPrice;
      'product.grid1': ProductGrid1;
      'relational.certifications': RelationalCertifications;
      'relational.logo-grid': RelationalLogoGrid;
      'relational.testimonials': RelationalTestimonials;
      'teams.awards-scroller': TeamsAwardsScroller;
      'teams.hero': TeamsHero;
      'teams.solution-card': TeamsSolutionCard;
      'teams.solution-grid': TeamsSolutionGrid;
      'teams.testimonial-card': TeamsTestimonialCard;
      'teams.testimonial-slider': TeamsTestimonialSlider;
      'updates.update-card': UpdatesUpdateCard;
      'updates.update-marquee': UpdatesUpdateMarquee;
      'updates.update-row': UpdatesUpdateRow;
    }
  }
}
