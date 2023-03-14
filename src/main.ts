#!/usr/bin/env node

import { program } from 'commander';
import * as path from 'path';
import * as fs from 'fs';

import info from '../package.json';
import encoder from './encoder';

// Options
program.version(info.name + ' v' + info.version)
  .requiredOption('-i, --input <file>', 'input file [Requeired]')
  .option('-o, --output <output>', 'output file name (default: "INPUT_NAME.aym.INPUT_EXTENSION")')
  .parse(process.argv);

const options = program.opts();

// Execute
try {
  const name: string = options.input;
  const rawScript = fs.readFileSync(name).toString()
  const result = encoder(rawScript);

  let outDir = "";
  if (options.output) {
    outDir = options.output;
  } else {
    const parsedPath = path.parse(name);
    outDir =
      (parsedPath.dir ? (parsedPath.dir + path.sep) : '') +
      parsedPath.name + '.aym' + parsedPath.ext;
  }
  fs.writeFileSync(outDir, result);
} catch (e) {
  // Modify the error message.
  // e.g.) ENOENT: no such file or directory, open 'hello.j'
  //    -> no such file or directory, open 'hello.j'
  fatal((e as Error).message.replace(/^[A-Z]+: /, ''), false);
}

/**
 * Raises a fatal exception. 
 */
function fatal(message: string, showHelp: boolean) {
  message = "[ERROR] " + message;
  process.stderr.write(message + '\n');
  if (showHelp) {
    program.outputHelp();
  }
  process.exit(1);
}