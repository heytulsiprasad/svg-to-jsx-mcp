export const convertSvgToolSchema = {
  name: 'convert_svg_to_jsx',
  description: 'Convert SVG code to React JSX component using SVGR',
  inputSchema: {
    type: 'object',
    properties: {
      svgCode: {
        type: 'string',
        description: 'The SVG code to convert to React JSX'
      },
      componentName: {
        type: 'string',
        description: 'Name for the React component (optional, defaults to SvgComponent)',
        default: 'SvgComponent'
      },
      config: {
        type: 'object',
        description: 'SVGR configuration options - comprehensive settings for SVG to React conversion',
        properties: {
          // Core transformation options
          icon: {
            type: 'boolean',
            description: 'Optimize for icon usage (removes dimensions and adds default size)',
            default: false
          },
          typescript: {
            type: 'boolean',
            description: 'Generate TypeScript component with proper typing',
            default: false
          },
          expandProps: {
            oneOf: [
              { type: 'boolean' },
              { type: 'string', enum: ['start', 'end'] }
            ],
            description: 'Where to expand props on SVG element (true, false, "start", "end")',
            default: true
          },
          dimensions: {
            type: 'boolean',
            description: 'Keep width and height attributes from SVG',
            default: true
          },
          
          // Output and formatting
          svgo: {
            type: 'boolean',
            description: 'Optimize SVG using SVGO before conversion',
            default: true
          },
          prettier: {
            type: 'boolean',
            description: 'Format output code with Prettier',
            default: true
          },
          
          // React-specific options
          memo: {
            type: 'boolean',
            description: 'Wrap component with React.memo for performance',
            default: false
          },
          ref: {
            type: 'boolean',
            description: 'Forward ref to SVG element',
            default: false
          },
          native: {
            type: 'boolean',
            description: 'Generate React Native compatible component',
            default: false
          },
          
          // Export options
          namedExport: {
            type: 'string',
            description: 'Name for named export (creates named export instead of default)'
          },
          exportType: {
            type: 'string',
            enum: ['default', 'named'],
            description: 'Type of export to generate',
            default: 'default'
          },
          
          // JSX Runtime configuration
          jsxRuntime: {
            type: 'string',
            enum: ['classic', 'automatic'],
            description: 'JSX runtime to use (classic or automatic)',
            default: 'classic'
          },
          jsxRuntimeImport: {
            type: 'object',
            description: 'Custom JSX runtime import configuration',
            properties: {
              source: { type: 'string', description: 'Import source' },
              namespace: { type: 'string', description: 'Import namespace' },
              defaultSpecifier: { type: 'string', description: 'Default import specifier' }
            }
          },
          
          // File naming and output
          filenameCase: {
            type: 'string',
            enum: ['camel', 'kebab', 'pascal', 'snake'],
            description: 'Case convention for generated filenames',
            default: 'pascal'
          },
          ext: {
            type: 'string',
            description: 'File extension for generated components (e.g., "tsx", "jsx")'
          },
          
          // Accessibility options
          titleProp: {
            type: 'boolean',
            description: 'Add title prop for accessibility',
            default: false
          },
          descProp: {
            type: 'boolean',
            description: 'Add description prop for accessibility',
            default: false
          },
          
          // Advanced customization
          replaceAttrValues: {
            type: 'object',
            description: 'Replace attribute values in SVG (e.g., {"#000": "currentColor"})',
            additionalProperties: { type: 'string' }
          },
          svgProps: {
            type: 'object',
            description: 'Additional props to add to SVG element',
            additionalProperties: true
          },
          
          // Plugin configurations
          svgoConfig: {
            type: 'object',
            description: 'SVGO optimization configuration',
            properties: {
              plugins: {
                type: 'array',
                description: 'SVGO plugins configuration',
                items: {
                  type: 'object',
                  properties: {
                    name: { type: 'string' },
                    params: { type: 'object', additionalProperties: true }
                  },
                  required: ['name']
                }
              }
            }
          },
          prettierConfig: {
            type: 'object',
            description: 'Prettier formatting configuration',
            additionalProperties: true
          },
          
          // Runtime options
          runtimeConfig: {
            type: 'boolean',
            description: 'Enable runtime configuration support',
            default: false
          },
          
          // Template customization
          template: {
            type: 'string',
            description: 'Custom template for component generation'
          },
          
          // File handling
          index: {
            type: 'boolean',
            description: 'Generate index file for exports',
            default: false
          },
          ignoreExisting: {
            type: 'boolean',
            description: 'Ignore existing files when generating',
            default: false
          }
        }
      }
    },
    required: ['svgCode']
  }
};