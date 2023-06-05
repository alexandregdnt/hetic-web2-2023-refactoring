import runGoldenMaster from "jest-golden-master";
import { Game } from ".";

test("My first scenario", async () => {
  console.log("Starting scenario testing...");
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");
    game.add("Clément");
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
  });
});
