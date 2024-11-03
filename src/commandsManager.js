import readCommand from "./readCommand.js";
import { color } from "./auxiliaries.js";
import addTask from "./add.js";
import help from "./help.js";

export function commandsManager() {
  readCommand((command) => {
    const getCommand = command.split(" ");
    const comm = getCommand[0];
    getCommand.shift();
    const parameters = getCommand.join(" ");

    switch (comm) {
      case "add":
        addTask(parameters);
        commandsManager();
        break;

      case "":
        break;

      case "help":
        help();
        commandsManager();
        break;

      default:
        console.error(`${color.error} Unrecognized command ${color.reset}`);
        console.log(
          `${color.yellow} Run the ${color.green}help ${color.yellow}command to see the commands, ${color.reset}`
        );
        commandsManager();
        break;
    }
  });
}
