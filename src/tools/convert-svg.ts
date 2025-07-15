import { transform } from '@svgr/core';
import jsxPlugin from '@svgr/plugin-jsx';
import prettierPlugin from '@svgr/plugin-prettier';
import svgoPlugin from '@svgr/plugin-svgo';
import { ConvertSvgArgs } from '../types/index.js';

export async function convertSvgToJsx(args: ConvertSvgArgs) {
  const { svgCode, componentName = 'SvgComponent', config = {} } = args;

  if (!svgCode || typeof svgCode !== 'string') {
    throw new Error('svgCode is required and must be a string');
  }

  const plugins = [];
  if (config.svgo !== false) plugins.push(svgoPlugin);
  plugins.push(jsxPlugin);
  if (config.prettier !== false) plugins.push(prettierPlugin);

  // Filter config to only include supported SVGR options
  const svgrConfig: any = {
    plugins,
    icon: config.icon,
    typescript: config.typescript,
    expandProps: config.expandProps,
    dimensions: config.dimensions,
    memo: config.memo,
    ref: config.ref,
    svgProps: config.svgProps,
    titleProp: config.titleProp,
    descProp: config.descProp,
    native: config.native,
    namedExport: config.namedExport,
    exportType: config.exportType,
    jsxRuntime: config.jsxRuntime,
    jsxRuntimeImport: config.jsxRuntimeImport,
    replaceAttrValues: config.replaceAttrValues,
    runtimeConfig: config.runtimeConfig,
  };

  // Remove undefined values
  Object.keys(svgrConfig).forEach(key => {
    if (svgrConfig[key] === undefined) {
      delete svgrConfig[key];
    }
  });

  const jsxCode = await transform(
    svgCode,
    svgrConfig,
    { componentName }
  );

  return jsxCode;
}