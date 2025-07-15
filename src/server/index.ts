import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';
import { convertSvgToJsx } from '../tools/convert-svg.js';
import { convertSvgToolSchema } from '../tools/tool-schemas.js';
import { ConvertSvgArgs } from '../types/index.js';

export function createServer() {
  const server = new Server(
    {
      name: 'svg-to-jsx-mcp',
      version: '1.0.0',
    },
    {
      capabilities: {
        tools: {},
      },
    }
  );

  server.setRequestHandler(ListToolsRequestSchema, async () => {
    console.error('Received ListTools request');
    return {
      tools: [convertSvgToolSchema]
    };
  });

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    console.error(`Received CallTool request for: ${name}`);

    if (name === 'convert_svg_to_jsx') {
      try {
        const typedArgs = args as unknown as ConvertSvgArgs;
        console.error(`Converting SVG for component: ${typedArgs.componentName || 'SvgComponent'}`);
        const jsxCode = await convertSvgToJsx(typedArgs);

        console.error(`Successfully converted SVG to JSX`);
        return {
          content: [
            {
              type: 'text',
              text: `Successfully converted SVG to React component "${typedArgs.componentName || 'SvgComponent'}":\n\n\`\`\`jsx\n${jsxCode}\n\`\`\``
            }
          ]
        };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        console.error(`Error converting SVG: ${errorMessage}`);
        return {
          content: [
            {
              type: 'text',
              text: `Error converting SVG to JSX: ${errorMessage}`
            }
          ],
          isError: true
        };
      }
    }

    throw new Error(`Unknown tool: ${name}`);
  });

  return server;
}

export async function startServer() {
  const server = createServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('SVG to JSX MCP server running on stdio');
}