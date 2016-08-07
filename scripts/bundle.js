import run from './run';
import build from './build';

/**
 * Compiles the project from source files into a distributable
 * format and copies it to the output (build) folder.
 */
async function bundle() {
  await run(build);
  // await run(copy);
}

export default bundle;
