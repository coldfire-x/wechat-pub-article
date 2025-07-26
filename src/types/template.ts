export interface TypographyConfig {
  fontFamily: string;
  fontSize: {
    base: string;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    small: string;
  };
  lineHeight: {
    base: number;
    heading: number;
  };
  fontWeight: {
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
  };
  letterSpacing: {
    normal: string;
    tight: string;
    wide: string;
  };
}

export interface ColorPalette {
  primary: string;
  text: {
    primary: string;
    secondary: string;
    muted: string;
  };
  background: {
    primary: string;
    secondary: string;
    accent: string;
  };
  border: {
    primary: string;
    secondary: string;
  };
  link: {
    primary: string;
    hover: string;
  };
  code: {
    background: string;
    text: string;
    border?: string;
  };
  blockquote: {
    background: string;
    border: string;
    text: string;
  };
}

export interface StyleTemplate {
  id: string;
  name: string;
  description: string;
  author?: string;
  preview?: string;
  typography: TypographyConfig;
  colors: ColorPalette;
  spacing: {
    paragraph: string;
    heading: string;
    list: string;
    blockquote: string;
    code: string;
  };
  generateCSS: () => string;
}

export type TemplateId = 'classic' | 'medium' | 'wikipedia';