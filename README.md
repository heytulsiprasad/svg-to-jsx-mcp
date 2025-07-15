# SVG to JSX MCP Server

A Model Context Protocol (MCP) server that converts SVG files to React JSX components using SVGR.

## Features

- Convert SVG code to React JSX components
- Configurable SVGR options (icon mode, TypeScript, accessibility props, etc.)
- Built-in SVGO optimization and Prettier formatting
- Support for custom component names

## Installation

```bash
pnpm install
pnpm run build
```

## Usage

The MCP server provides a `convert_svg_to_jsx` tool with the following parameters:

### Required Parameters
- `svgCode` (string): The SVG code to convert

### Optional Parameters
- `componentName` (string): Name for the React component (default: "SvgComponent")
- `config` (object): SVGR configuration options

### Configuration Options

#### Core Transformation Options
- `icon` (boolean): Optimize for icon usage (removes dimensions and adds default size)
- `typescript` (boolean): Generate TypeScript component with proper typing
- `expandProps` (boolean | "start" | "end"): Where to expand props on SVG element
- `dimensions` (boolean): Keep width and height attributes from SVG
- `svgo` (boolean): Optimize SVG using SVGO before conversion
- `prettier` (boolean): Format output code with Prettier

#### React-Specific Options
- `memo` (boolean): Wrap component with React.memo for performance
- `ref` (boolean): Forward ref to SVG element
- `native` (boolean): Generate React Native compatible component

#### Export Options
- `namedExport` (string): Name for named export (creates named export instead of default)
- `exportType` ("default" | "named"): Type of export to generate

#### JSX Runtime Configuration
- `jsxRuntime` ("classic" | "automatic"): JSX runtime to use
- `jsxRuntimeImport` (object): Custom JSX runtime import configuration
  - `source` (string): Import source
  - `namespace` (string): Import namespace
  - `defaultSpecifier` (string): Default import specifier

#### File Naming and Output
- `filenameCase` ("camel" | "kebab" | "pascal" | "snake"): Case convention for generated filenames
- `ext` (string): File extension for generated components (e.g., "tsx", "jsx")

#### Accessibility Options
- `titleProp` (boolean): Add title prop for accessibility
- `descProp` (boolean): Add description prop for accessibility

#### Advanced Customization
- `replaceAttrValues` (object): Replace attribute values in SVG (e.g., {"#000": "currentColor"})
- `svgProps` (object): Additional props to add to SVG element
- `runtimeConfig` (boolean): Enable runtime configuration support

#### Plugin Configurations
- `svgoConfig` (object): SVGO optimization configuration
- `prettierConfig` (object): Prettier formatting configuration

#### File Handling
- `index` (boolean): Generate index file for exports
- `ignoreExisting` (boolean): Ignore existing files when generating

## Example

Input SVG:
```xml
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
</svg>
```

Output JSX:
```jsx
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
export default SvgComponent;
```

## Running the Server

```bash
pnpm start
```

The server runs on stdio and can be integrated with any MCP-compatible client.