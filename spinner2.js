const spins = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let delay = 100;


for (let i = 0; i < spins.length; i++) {
  if (i === spins.length - 1) {
    setTimeout(() => {
      process.stdout.write(`\r${spins[i]}\n`);
    }, delay);
  } else {
    setTimeout(() => {
      process.stdout.write(`\r${spins[i]}   `);
    }, delay += 200);
  }
};