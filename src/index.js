import Automaton, { Decorators } from "@aikosia/automaton-core";

class BotName extends Automaton{
    constructor(){
        super({key:"BotName"});
    }

    /**
     * Automaton Runtime will pass arg to this function depend on automaton->runParameter field at package.json
     * @param {} context|page|null - Parameter will be passed by parent class
     */
    @decorators.delay
    async run(page){
        await page.goto("https://www.google.com/doodles");
    }
}

export default BotName;