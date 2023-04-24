import Automaton, { Decorators } from "@aikosia/automaton";

class BotName extends Automaton{
    constructor(){
        super({key:"BotName"});
    }

    /**
     * Automaton runtime will pass data to this function depend on automaton->runParameter field at package.json
     * @param {Object} context|page|null - Parameter will be passed by parent class
     */
    @Decorators.delay
    async run(page){
        await page.goto("https://www.google.com/doodles");
    }
}

export default BotName;