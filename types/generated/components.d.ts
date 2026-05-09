import type { Schema, Struct } from '@strapi/strapi';

export interface BasicButton extends Struct.ComponentSchema {
  collectionName: 'components_basic_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
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
    imageUrl: Schema.Attribute.String & Schema.Attribute.Required;
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
    button: Schema.Attribute.Component<'basic.button', false>;
    certifications: Schema.Attribute.Relation<
      'oneToMany',
      'api::certification.certification'
    >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'basic.button': BasicButton;
      'basic.heading-with-image': BasicHeadingWithImage;
      'basic.title': BasicTitle;
      'basic.title-with-button': BasicTitleWithButton;
      'basic.title-with-image': BasicTitleWithImage;
      'filters.componenets': FiltersComponenets;
      'filters.filter-1': FiltersFilter1;
      'footer.image-link': FooterImageLink;
      'footer.link': FooterLink;
      'footer.link-group': FooterLinkGroup;
      'grids.grid-1': GridsGrid1;
      'hero.hero-1': HeroHero1;
      'hero.hero-2': HeroHero2;
      'pre-footer.pre-footer': PreFooterPreFooter;
      'relational.certifications': RelationalCertifications;
      'relational.logo-grid': RelationalLogoGrid;
      'relational.testimonials': RelationalTestimonials;
    }
  }
}
