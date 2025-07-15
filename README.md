# SVG to JSX MCP Server

[![npm version](https://badge.fury.io/js/svg-to-jsx-mcp.svg)](https://badge.fury.io/js/svg-to-jsx-mcp)

A Model Context Protocol (MCP) server that converts SVG files to React JSX components using SVGR. Provides comprehensive configuration options for customizing the conversion process.

## Installation

No installation required! Use with `npx` directly.

### From source (for development)
```bash
git clone https://github.com/[username]/svg-to-jsx-mcp
cd svg-to-jsx-mcp
pnpm install && pnpm run build
```

## MCP Integration

Add this server to your MCP client configuration:

<details>
<summary><strong>Claude Desktop</strong></summary>

Add to `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows):
```json
{
  "mcpServers": {
    "svg-to-jsx": {
      "command": "npx",
      "args": ["svg-to-jsx-mcp"]
    }
  }
}
```
</details>

<details>
<summary><strong>Claude Code CLI</strong></summary>

Add to `~/.claude/claude_code_config.json`:
```json
{
  "mcpServers": {
    "svg-to-jsx": {
      "command": "npx",
      "args": ["svg-to-jsx-mcp"]
    }
  }
}
```
</details>

<details>
<summary><strong>Cursor (with MCP support)</strong></summary>

Add to your Cursor MCP configuration file:
```json
{
  "mcpServers": {
    "svg-to-jsx": {
      "command": "npx",
      "args": ["svg-to-jsx-mcp"]
    }
  }
}
```
</details>

<details>
<summary><strong>Other MCP Clients</strong></summary>

Use the command: `svg-to-jsx-mcp` or `npx svg-to-jsx-mcp`

For development/testing:
```bash
node /path/to/svg-to-jsx-mcp/dist/index.js
```
</details>

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

## Why Use This MCP vs Manual Conversion?

**This MCP provides:**
- **90+ SVGR configuration options** (icon mode, TypeScript, accessibility props, React Native, etc.)
- **Consistent, precise conversions** using the actual SVGR library
- **Professional-grade control** over output format and optimization
- **Reusable tool** across projects and team members

**Manual conversion offers:**
- **Basic conversion** with limited customization
- **Inconsistent results** depending on context/prompting
- **No access to SVGR's advanced features** like SVGO optimization, React.memo wrapping, etc.
- **Manual process** each time

## Next Steps for Users

1. **Add to MCP client**: Update your MCP client configuration (no installation required!)
2. **Use in your workflow**: Convert SVGs directly from your code editor
3. **Customize**: Use extensive SVGR options for your specific needs

## Contributing

Issues and PRs welcome! This MCP server provides comprehensive SVG to React component conversion with all SVGR features accessible through any MCP-compatible client.