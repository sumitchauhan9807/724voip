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
    columnCount: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<2>;
    design: Schema.Attribute.Enumeration<
      ['design_type_1', 'design_type_2', 'design_type_3', 'design_type_4']
    >;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
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
      'manyToMany',
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
    backgroundGradient: Schema.Attribute.Text;
    backgroundImage: Schema.Attribute.Media<'images'>;
    buttons: Schema.Attribute.Component<'basic.button', true>;
    certifications: Schema.Attribute.Relation<
      'manyToMany',
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

export interface IndustryCard extends Struct.ComponentSchema {
  collectionName: 'components_industry_cards';
  info: {
    displayName: 'Industry Card';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface IndustryCardGrid extends Struct.ComponentSchema {
  collectionName: 'components_industry_card_grids';
  info: {
    displayName: 'Industry Card Grid';
    icon: 'grid';
  };
  attributes: {
    cards: Schema.Attribute.Component<'industry.card', true>;
    title: Schema.Attribute.Component<'basic.title', false>;
  };
}

export interface IndustryFeatures extends Struct.ComponentSchema {
  collectionName: 'components_industry_features';
  info: {
    displayName: 'Industry Features';
    icon: 'bulletList';
  };
  attributes: {
    cards: Schema.Attribute.Component<'industry.features-card', true>;
    heading: Schema.Attribute.String;
  };
}

export interface IndustryFeaturesCard extends Struct.ComponentSchema {
  collectionName: 'components_industry_features_cards';
  info: {
    displayName: 'Features Card';
    icon: 'bulletList';
  };
  attributes: {
    button: Schema.Attribute.Component<'basic.button', false>;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface IndustryFooterCta extends Struct.ComponentSchema {
  collectionName: 'components_industry_footer_ctas';
  info: {
    displayName: 'Industry Footer CTA';
    icon: 'rocket';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    buttons: Schema.Attribute.Component<'basic.button', true>;
    checklistItems: Schema.Attribute.Component<'basic.lists', true>;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.Component<'basic.title', false>;
    variant: Schema.Attribute.Enumeration<
      ['centered-description', 'checklist', 'large-heading']
    > &
      Schema.Attribute.DefaultTo<'centered-description'>;
  };
}

export interface IndustryImageTextSection extends Struct.ComponentSchema {
  collectionName: 'components_industry_image_text_sections';
  info: {
    displayName: 'Industry Image Text Section';
    icon: 'dashboard';
  };
  attributes: {
    type: Schema.Attribute.Enumeration<
      ['type_1', 'type_2', 'type_3', 'type_4']
    > &
      Schema.Attribute.DefaultTo<'type_1'>;
    type_1: Schema.Attribute.Component<'industry.type-1', false>;
    type_2: Schema.Attribute.Component<'industry.type-2', false>;
    type_3: Schema.Attribute.Component<'industry.type-3', false>;
    type_4: Schema.Attribute.Component<'industry.type-4', false>;
  };
}

export interface IndustryLogoCloud extends Struct.ComponentSchema {
  collectionName: 'components_industry_logo_clouds';
  info: {
    displayName: 'Industry Logo Cloud';
    icon: 'cloud';
  };
  attributes: {
    button: Schema.Attribute.Component<'basic.button', false>;
    logos: Schema.Attribute.Component<'industry.logo-item', true>;
    sectionClassName: Schema.Attribute.Text;
    title: Schema.Attribute.Component<'basic.title', false>;
  };
}

export interface IndustryLogoItem extends Struct.ComponentSchema {
  collectionName: 'components_industry_logo_items';
  info: {
    displayName: 'Industry Logo Item';
    icon: 'picture';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    url: Schema.Attribute.String;
  };
}

export interface IndustryMoreIndustries extends Struct.ComponentSchema {
  collectionName: 'components_industry_more_industries';
  info: {
    displayName: 'Industry More Industries';
    icon: 'bulletList';
  };
  attributes: {
    cards: Schema.Attribute.Component<'industry.more-industries-card', true>;
    heading: Schema.Attribute.String;
  };
}

export interface IndustryMoreIndustriesCard extends Struct.ComponentSchema {
  collectionName: 'components_industry_more_industries_cards';
  info: {
    displayName: 'More Industries Card';
    icon: 'bulletList';
  };
  attributes: {
    button: Schema.Attribute.Component<'basic.button', false>;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface IndustryRevenueCalculator extends Struct.ComponentSchema {
  collectionName: 'components_industry_revenue_calculators';
  info: {
    displayName: 'Industry Revenue Calculator';
    icon: 'chartBubble';
  };
  attributes: {
    annualBusinessDays: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<240>;
    annualLeadValue: Schema.Attribute.Decimal & Schema.Attribute.DefaultTo<785>;
    assumptions: Schema.Attribute.Component<'basic.lists', true>;
    assumptionsHeading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Our Assumptions'>;
    callsDefault: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<10>;
    callsLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'How many inbound calls does each location receive per day?'>;
    callsMax: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<500>;
    callsMin: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    locationsDefault: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<10>;
    locationsLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'How many locations does your business have?'>;
    locationsMax: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<250>;
    locationsMin: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<1>;
    missedCallRate: Schema.Attribute.Decimal & Schema.Attribute.DefaultTo<0.3>;
    newLeadRate: Schema.Attribute.Decimal & Schema.Attribute.DefaultTo<0.5>;
    noShowRevenueValue: Schema.Attribute.Decimal &
      Schema.Attribute.DefaultTo<167>;
    noShowsDefault: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<1>;
    noShowsLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'How many no-shows do you get per location each day?'>;
    noShowsMax: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<100>;
    noShowsMin: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    resultLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Annual Missed Revenue'>;
    title: Schema.Attribute.Component<'basic.title', false>;
  };
}

export interface IndustrySingleTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_industry_single_testimonials';
  info: {
    displayName: 'Industry Single Testimonial';
    icon: 'quote';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    logo: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    quote: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface IndustrySingleTestimonialSlider
  extends Struct.ComponentSchema {
  collectionName: 'components_industry_single_testimonial_sliders';
  info: {
    displayName: 'Single Testimonial Slider';
    icon: 'quote';
  };
  attributes: {
    testimonials: Schema.Attribute.Component<
      'industry.single-testimonial-slider-item',
      true
    >;
  };
}

export interface IndustrySingleTestimonialSliderItem
  extends Struct.ComponentSchema {
  collectionName: 'components_industry_single_testimonial_slider_items';
  info: {
    displayName: 'Single Testimonial Slider Item';
    icon: 'quote';
  };
  attributes: {
    name: Schema.Attribute.String;
    quote: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface IndustryStickyScrollItem extends Struct.ComponentSchema {
  collectionName: 'components_industry_sticky_scroll_items';
  info: {
    displayName: 'Sticky Scroll Item';
    icon: 'bulletList';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'basic.button', true>;
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface IndustryStickyScrollSection extends Struct.ComponentSchema {
  collectionName: 'components_industry_sticky_scroll_sections';
  info: {
    displayName: 'Industry Sticky Scroll Section';
    icon: 'bulletList';
  };
  attributes: {
    items: Schema.Attribute.Component<'industry.sticky-scroll-item', true>;
    title: Schema.Attribute.Component<'basic.title', false>;
  };
}

export interface IndustryTab extends Struct.ComponentSchema {
  collectionName: 'components_industry_tabs_items';
  info: {
    displayName: 'Industry Tab Item';
    icon: 'bulletList';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'basic.button', true>;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    lists: Schema.Attribute.Component<'basic.lists', true>;
    tabTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface IndustryTabs extends Struct.ComponentSchema {
  collectionName: 'components_industry_tabs';
  info: {
    displayName: 'Industry Tabs';
    icon: 'bulletList';
  };
  attributes: {
    tabs: Schema.Attribute.Component<'industry.tab', true>;
    title: Schema.Attribute.Component<'basic.title', false>;
  };
}

export interface IndustryTestimonialCard extends Struct.ComponentSchema {
  collectionName: 'components_industry_testimonial_cards';
  info: {
    displayName: 'Industry Testimonial Card';
    icon: 'quote';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'>;
    logoAlt: Schema.Attribute.String;
    name: Schema.Attribute.String;
    position: Schema.Attribute.String;
    quote: Schema.Attribute.Blocks;
  };
}

export interface IndustryTestimonialSlider extends Struct.ComponentSchema {
  collectionName: 'components_industry_testimonial_sliders';
  info: {
    displayName: 'Industry Testimonial Slider';
    icon: 'star';
  };
  attributes: {
    cards: Schema.Attribute.Component<'industry.testimonial-card', true>;
    heading: Schema.Attribute.String;
    sectionClassName: Schema.Attribute.Text;
    subHeading: Schema.Attribute.Text;
  };
}

export interface IndustryTrust extends Struct.ComponentSchema {
  collectionName: 'components_industry_trusts';
  info: {
    displayName: 'Industry Trust';
    icon: 'bulletList';
  };
  attributes: {
    cards: Schema.Attribute.Component<'industry.trust-card', true>;
    heading: Schema.Attribute.String;
  };
}

export interface IndustryTrustCard extends Struct.ComponentSchema {
  collectionName: 'components_industry_trust_cards';
  info: {
    displayName: 'Trust Card';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface IndustryType1 extends Struct.ComponentSchema {
  collectionName: 'components_industry_type_1s';
  info: {
    displayName: 'Type 1';
    icon: 'bulletList';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    sections: Schema.Attribute.Component<'industry.type-1-section', true>;
    smallTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface IndustryType1Section extends Struct.ComponentSchema {
  collectionName: 'components_industry_type_1_sections';
  info: {
    displayName: 'Type 1 Section';
    icon: 'bulletList';
  };
  attributes: {
    checklistItems: Schema.Attribute.Component<'basic.lists', true>;
    title: Schema.Attribute.String;
  };
}

export interface IndustryType2 extends Struct.ComponentSchema {
  collectionName: 'components_industry_type_2s';
  info: {
    displayName: 'Type 2';
    icon: 'bulletList';
  };
  attributes: {
    checklistItems: Schema.Attribute.Component<'basic.lists', true>;
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'right'>;
    title: Schema.Attribute.String;
  };
}

export interface IndustryType3 extends Struct.ComponentSchema {
  collectionName: 'components_industry_type_3s';
  info: {
    displayName: 'Type 3';
    icon: 'bulletList';
  };
  attributes: {
    button: Schema.Attribute.Component<'basic.button', false>;
    checklistItems: Schema.Attribute.Component<'basic.lists', true>;
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface IndustryType4 extends Struct.ComponentSchema {
  collectionName: 'components_industry_type_4s';
  info: {
    displayName: 'Type 4';
    icon: 'bulletList';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    sections: Schema.Attribute.Component<'industry.type-1-section', true>;
    smallTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MigrationCard extends Struct.ComponentSchema {
  collectionName: 'components_migration_cards';
  info: {
    displayName: 'Migration Card';
  };
  attributes: {
    content: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
  };
}

export interface MigrationCardGrid extends Struct.ComponentSchema {
  collectionName: 'components_migration_card_grids';
  info: {
    displayName: 'Migration Card Grid';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    cards: Schema.Attribute.Component<'migration.card', true>;
    sectionVariant: Schema.Attribute.Enumeration<['boxed', 'plain']> &
      Schema.Attribute.DefaultTo<'plain'>;
    title: Schema.Attribute.Component<'basic.title', false>;
  };
}

export interface MigrationComparisonCell extends Struct.ComponentSchema {
  collectionName: 'components_migration_comparison_cells';
  info: {
    displayName: 'Migration Comparison Cell';
  };
  attributes: {
    text: Schema.Attribute.String;
    value: Schema.Attribute.Enumeration<['included', 'not_included', 'text']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'text'>;
  };
}

export interface MigrationComparisonColumn extends Struct.ComponentSchema {
  collectionName: 'components_migration_comparison_columns';
  info: {
    displayName: 'Migration Comparison Column';
  };
  attributes: {
    highlighted: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MigrationComparisonRow extends Struct.ComponentSchema {
  collectionName: 'components_migration_comparison_rows';
  info: {
    displayName: 'Migration Comparison Row';
  };
  attributes: {
    cells: Schema.Attribute.Component<'migration.comparison-cell', true>;
    feature: Schema.Attribute.String & Schema.Attribute.Required;
    hidden: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface MigrationComparisonTable extends Struct.ComponentSchema {
  collectionName: 'components_migration_comparison_tables';
  info: {
    displayName: 'Migration Comparison Table';
  };
  attributes: {
    columns: Schema.Attribute.Component<'migration.comparison-column', true>;
    initialVisibleRows: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<4>;
    rows: Schema.Attribute.Component<'migration.comparison-row', true>;
    showLessLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'See Less'>;
    showMoreLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'See More'>;
    title: Schema.Attribute.Component<'basic.title', false>;
  };
}

export interface MigrationFooterCta extends Struct.ComponentSchema {
  collectionName: 'components_migration_footer_ctas';
  info: {
    displayName: 'Migration Footer CTA';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    backgroundImageUrl: Schema.Attribute.String;
    bottomImage: Schema.Attribute.Media<'images'>;
    bottomImageUrl: Schema.Attribute.String;
    buttons: Schema.Attribute.Component<'basic.button', true>;
    title: Schema.Attribute.Component<'basic.title', false>;
    topImage: Schema.Attribute.Media<'images'>;
    topImageUrl: Schema.Attribute.String;
  };
}

export interface MigrationHero extends Struct.ComponentSchema {
  collectionName: 'components_migration_heroes';
  info: {
    displayName: 'Migration Hero';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    backgroundImage: Schema.Attribute.Media<'images'>;
    backgroundImageUrl: Schema.Attribute.String;
    buttons: Schema.Attribute.Component<'basic.button', true>;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    title: Schema.Attribute.Component<'basic.title', false>;
  };
}

export interface MigrationPlatformGuideLink extends Struct.ComponentSchema {
  collectionName: 'components_migration_platform_guide_links';
  info: {
    displayName: 'Migration Platform Guide Link';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface MigrationPlatformGuides extends Struct.ComponentSchema {
  collectionName: 'components_migration_platform_guides';
  info: {
    displayName: 'Migration Platform Guides';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    links: Schema.Attribute.Component<'migration.platform-guide-link', true>;
    title: Schema.Attribute.Component<'basic.title', false>;
  };
}

export interface MigrationSupportSection extends Struct.ComponentSchema {
  collectionName: 'components_migration_support_sections';
  info: {
    displayName: 'Migration Support Section';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    buttons: Schema.Attribute.Component<'basic.button', true>;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'right'>;
    imageUrl: Schema.Attribute.String;
    kicker: Schema.Attribute.String;
    lists: Schema.Attribute.Component<'basic.lists', true>;
    note: Schema.Attribute.String;
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
    layout: Schema.Attribute.Enumeration<
      ['standard', 'sales_suite', 'ai_voice_agent']
    > &
      Schema.Attribute.DefaultTo<'standard'>;
    name: Schema.Attribute.String;
    pricePrefix: Schema.Attribute.String;
    prices: Schema.Attribute.Component<'pricing.plan-price', true>;
    priceSuffix: Schema.Attribute.String;
    suiteHeading: Schema.Attribute.String;
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
    accentBackground: Schema.Attribute.String;
    caseStudyUrl: Schema.Attribute.String;
    company: Schema.Attribute.String;
    headline: Schema.Attribute.String;
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
    excludedSuiteIdentifier: Schema.Attribute.String;
    featuredIdentifier: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    layout: Schema.Attribute.Enumeration<['standard', 'switch_cards']> &
      Schema.Attribute.DefaultTo<'standard'>;
    stats: Schema.Attribute.Component<'pricing.stat', true>;
    testimonials: Schema.Attribute.Component<'pricing.testimonial', true>;
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
      'manyToMany',
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

export interface SharedAwardsScroller extends Struct.ComponentSchema {
  collectionName: 'components_shared_awards_scrollers';
  info: {
    displayName: 'Awards Scroller';
    icon: 'star';
  };
  attributes: {
    direction: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'right'>;
    heading: Schema.Attribute.String;
    logos: Schema.Attribute.Media<'images', true>;
    speed: Schema.Attribute.Enumeration<['slow', 'medium', 'fast']> &
      Schema.Attribute.DefaultTo<'medium'>;
  };
}

export interface SharedCustomerLogosSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_customer_logos_sections';
  info: {
    displayName: 'Customer Logos Section';
    icon: 'apps';
  };
  attributes: {
    heading: Schema.Attribute.String;
    logos: Schema.Attribute.Component<'shared.logo-item', true>;
    secondRowLogos: Schema.Attribute.Component<'shared.logo-item', true>;
  };
}

export interface SharedLogoItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_logo_items';
  info: {
    displayName: 'Logo Item';
    icon: 'picture';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    url: Schema.Attribute.String;
  };
}

export interface TeamDetailFaq extends Struct.ComponentSchema {
  collectionName: 'components_team_detail_faqs';
  info: {
    displayName: 'Team Detail FAQ';
    icon: 'question';
  };
  attributes: {
    desktopImage: Schema.Attribute.Media<'images'>;
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'basic.heading-with-content', true>;
    mobileImage: Schema.Attribute.Media<'images'>;
  };
}

export interface TeamDetailFooterCta extends Struct.ComponentSchema {
  collectionName: 'components_team_detail_footer_ctas';
  info: {
    displayName: 'Team Detail Footer CTA';
    icon: 'rocket';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'basic.button', true>;
    leftImage: Schema.Attribute.Media<'images'>;
    rightImage: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.Component<'basic.title', false>;
  };
}

export interface TeamDetailIconCard extends Struct.ComponentSchema {
  collectionName: 'components_team_detail_icon_cards';
  info: {
    displayName: 'Team Detail Icon Card';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface TeamDetailIconGrid extends Struct.ComponentSchema {
  collectionName: 'components_team_detail_icon_grids';
  info: {
    displayName: 'Team Detail Icon Grid';
    icon: 'apps';
  };
  attributes: {
    cards: Schema.Attribute.Component<'team-detail.icon-card', true>;
    heading: Schema.Attribute.String;
  };
}

export interface TeamDetailImageTextSection extends Struct.ComponentSchema {
  collectionName: 'components_team_detail_image_text_sections';
  info: {
    displayName: 'Team Detail Image Text Section';
    icon: 'picture';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'basic.button', true>;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    imagePosition: Schema.Attribute.Enumeration<['right', 'left']> &
      Schema.Attribute.DefaultTo<'right'>;
    title: Schema.Attribute.Component<'basic.title', false>;
  };
}

export interface TeamDetailIntegrationLogoCloud extends Struct.ComponentSchema {
  collectionName: 'components_team_detail_integration_logo_clouds';
  info: {
    displayName: 'Team Detail Integration Logo Cloud';
    icon: 'dashboard';
  };
  attributes: {
    button: Schema.Attribute.Component<'basic.button', false>;
    columns: Schema.Attribute.Component<
      'team-detail.integration-logo-column',
      true
    >;
    title: Schema.Attribute.Component<'basic.title', false>;
  };
}

export interface TeamDetailIntegrationLogoColumn
  extends Struct.ComponentSchema {
  collectionName: 'components_team_detail_integration_logo_columns';
  info: {
    displayName: 'Team Detail Integration Logo Column';
    icon: 'grid';
  };
  attributes: {
    logos: Schema.Attribute.Media<'images', true>;
  };
}

export interface TeamDetailReadMoreTab extends Struct.ComponentSchema {
  collectionName: 'components_team_detail_read_more_tabs';
  info: {
    displayName: 'Team Detail Read More Tab';
    icon: 'file';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
  };
}

export interface TeamDetailReadMoreTabber extends Struct.ComponentSchema {
  collectionName: 'components_team_detail_read_more_tabbers';
  info: {
    displayName: 'Team Detail Read More Tabber';
    icon: 'bulletList';
  };
  attributes: {
    heading: Schema.Attribute.String;
    tabs: Schema.Attribute.Component<'team-detail.read-more-tab', true>;
  };
}

export interface TeamDetailTechStackGrid extends Struct.ComponentSchema {
  collectionName: 'components_team_detail_tech_stack_grids';
  info: {
    displayName: 'Team Detail Tech Stack Grid';
    icon: 'connector';
  };
  attributes: {
    button: Schema.Attribute.Component<'basic.button', false>;
    logos: Schema.Attribute.Component<'team-detail.tech-stack-logo', true>;
    title: Schema.Attribute.Component<'basic.title', false>;
  };
}

export interface TeamDetailTechStackLogo extends Struct.ComponentSchema {
  collectionName: 'components_team_detail_tech_stack_logos';
  info: {
    displayName: 'Team Detail Tech Stack Logo';
    icon: 'link';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    url: Schema.Attribute.String;
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
    subHeading: Schema.Attribute.String;
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
      'industry.card': IndustryCard;
      'industry.card-grid': IndustryCardGrid;
      'industry.features': IndustryFeatures;
      'industry.features-card': IndustryFeaturesCard;
      'industry.footer-cta': IndustryFooterCta;
      'industry.image-text-section': IndustryImageTextSection;
      'industry.logo-cloud': IndustryLogoCloud;
      'industry.logo-item': IndustryLogoItem;
      'industry.more-industries': IndustryMoreIndustries;
      'industry.more-industries-card': IndustryMoreIndustriesCard;
      'industry.revenue-calculator': IndustryRevenueCalculator;
      'industry.single-testimonial': IndustrySingleTestimonial;
      'industry.single-testimonial-slider': IndustrySingleTestimonialSlider;
      'industry.single-testimonial-slider-item': IndustrySingleTestimonialSliderItem;
      'industry.sticky-scroll-item': IndustryStickyScrollItem;
      'industry.sticky-scroll-section': IndustryStickyScrollSection;
      'industry.tab': IndustryTab;
      'industry.tabs': IndustryTabs;
      'industry.testimonial-card': IndustryTestimonialCard;
      'industry.testimonial-slider': IndustryTestimonialSlider;
      'industry.trust': IndustryTrust;
      'industry.trust-card': IndustryTrustCard;
      'industry.type-1': IndustryType1;
      'industry.type-1-section': IndustryType1Section;
      'industry.type-2': IndustryType2;
      'industry.type-3': IndustryType3;
      'industry.type-4': IndustryType4;
      'migration.card': MigrationCard;
      'migration.card-grid': MigrationCardGrid;
      'migration.comparison-cell': MigrationComparisonCell;
      'migration.comparison-column': MigrationComparisonColumn;
      'migration.comparison-row': MigrationComparisonRow;
      'migration.comparison-table': MigrationComparisonTable;
      'migration.footer-cta': MigrationFooterCta;
      'migration.hero': MigrationHero;
      'migration.platform-guide-link': MigrationPlatformGuideLink;
      'migration.platform-guides': MigrationPlatformGuides;
      'migration.support-section': MigrationSupportSection;
      'pre-footer.pre-footer': PreFooterPreFooter;
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
      'product.grid1': ProductGrid1;
      'relational.certifications': RelationalCertifications;
      'relational.logo-grid': RelationalLogoGrid;
      'relational.testimonials': RelationalTestimonials;
      'shared.awards-scroller': SharedAwardsScroller;
      'shared.customer-logos-section': SharedCustomerLogosSection;
      'shared.logo-item': SharedLogoItem;
      'team-detail.faq': TeamDetailFaq;
      'team-detail.footer-cta': TeamDetailFooterCta;
      'team-detail.icon-card': TeamDetailIconCard;
      'team-detail.icon-grid': TeamDetailIconGrid;
      'team-detail.image-text-section': TeamDetailImageTextSection;
      'team-detail.integration-logo-cloud': TeamDetailIntegrationLogoCloud;
      'team-detail.integration-logo-column': TeamDetailIntegrationLogoColumn;
      'team-detail.read-more-tab': TeamDetailReadMoreTab;
      'team-detail.read-more-tabber': TeamDetailReadMoreTabber;
      'team-detail.tech-stack-grid': TeamDetailTechStackGrid;
      'team-detail.tech-stack-logo': TeamDetailTechStackLogo;
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
