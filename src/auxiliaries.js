const color= {
    reset: "\x1b[0m",
    error: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
}

function splitCommand(command) {
    const getCommand = command.split(" ");
    const comm = getCommand[0];
    getCommand.shift();
    const parameters = getCommand.join(" ");
    return [comm, parameters];
}

export  {
    color,
    splitCommand,
}