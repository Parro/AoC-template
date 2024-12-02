import { promises as fs } from 'fs';

// import first from './first';

async function execute() {
  try {
    const args = process.argv.slice(2);
    const dayToSolve = args[0];

    const stepToSolve = args[1];

    if (!dayToSolve) {
      throw new Error('Please provide a day to solve.');
    }

    if (!stepToSolve) {
      throw new Error('Please provide a step to solve.');
    }

    const inputFileName = `./data/day-${dayToSolve}/input.txt`;
    const input = await fs.readFile(inputFileName);

    const { main } = await import(
      `./day-${dayToSolve}/${stepToSolve}.js`
    );

    const output = main(input.toString());

    console.log('output', output);
  } catch (err) {
    console.error(err);
  }
}
execute();
