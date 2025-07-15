#!/usr/bin/env node

import { startServer } from './server/index.js';

async function main() {
  try {
    await startServer();
  } catch (error) {
    console.error('Fatal error in main():', error);
    process.exit(1);
  }
}

main();