const parseArgs = () => {
    const args = process.argv.slice(2);
  const parsedArguments = {};
  for (let i = 0; i < args.length; i += 2) {
    const propName = args[i].slice(2); 
    const value = args[i + 1];
    parsedArguments[propName] = value;
  }
  for (const [propName, value] of Object.entries(parsedArguments)) {
    console.log(`${propName} is ${value}`);
  }
};

parseArgs();