# SVG to JSX MCP Server

A Model Context Protocol (MCP) server that converts SVG files to React JSX components using SVGR. Provides comprehensive configuration options for customizing the conversion process.

## Installation

### Via npm (recommended)
```bash
npm install -g svg-to-jsx-mcp
```

### From source
```bash
git clone https://github.com/[username]/svg-to-jsx-mcp
cd svg-to-jsx-mcp
pnpm install && pnpm run build
```

## MCP Integration

Add this server to your MCP client configuration:

### Claude Desktop
Add to `~/Library/Application Support/Claude/claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "svg-to-jsx": {
      "command": "svg-to-jsx-mcp"
    }
  }
}
```

### Other MCP Clients
Use the command: `svg-to-jsx-mcp` or `npx svg-to-jsx-mcp`

## Usage

The server provides a `convert_svg_to_jsx` tool:

### Parameters
- `svgCode` (string, required): SVG code to convert
- `componentName` (string, optional): Component name (default: "SvgComponent")  
- `config` (object, optional): SVGR configuration options

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

## Implementation Details

- **Built with**: TypeScript, @svgr/core, MCP SDK
- **Architecture**: Modular structure with separate tools, types, and server components
- **Plugins**: SVGO optimization, JSX transformation, Prettier formatting
- **Protocol**: Model Context Protocol (MCP) over stdio

## Development

```bash
git clone https://github.com/[username]/svg-to-jsx-mcp
cd svg-to-jsx-mcp
pnpm install
pnpm run dev    # Watch mode
pnpm run build  # Production build
pnpm start      # Run server
```

## Next Steps for Users

1. **Install globally**: `npm install -g svg-to-jsx-mcp`
2. **Add to MCP client**: Update your MCP client configuration
3. **Use in your workflow**: Convert SVGs directly from your code editor
4. **Customize**: Use extensive SVGR options for your specific needs

## Contributing

Issues and PRs welcome! This MCP server provides comprehensive SVG to React component conversion with all SVGR features accessible through any MCP-compatible client.