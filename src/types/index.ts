export interface SvgrConfig {
  // Core options
  icon?: boolean;
  typescript?: boolean;
  expandProps?: boolean | 'start' | 'end';
  dimensions?: boolean;
  svgo?: boolean;
  prettier?: boolean;
  memo?: boolean;
  ref?: boolean;
  svgProps?: Record<string, any>;
  titleProp?: boolean;
  descProp?: boolean;
  componentName?: string;
  
  // Advanced options
  native?: boolean;
  namedExport?: string;
  exportType?: 'default' | 'named';
  jsxRuntime?: 'classic' | 'automatic';
  jsxRuntimeImport?: {
    source?: string;
    namespace?: string;
    defaultSpecifier?: string;
  };
  
  // Template and output options
  template?: string;
  index?: boolean;
  outDir?: string;
  ext?: string;
  filenameCase?: 'camel' | 'kebab' | 'pascal' | 'snake';
  
  // Styling and transformation
  runtimeConfig?: boolean;
  replaceAttrValues?: Record<string, string>;
  
  // Plugin configurations
  svgoConfig?: Record<string, any>;
  prettierConfig?: Record<string, any>;
  
  // File handling
  ignoreExisting?: boolean;
}

export interface ConvertSvgArgs {
  svgCode: string;
  componentName?: string;
  config?: SvgrConfig;
}