import { Automaton, Decorators } from "@aikosia/automaton";

class BotName extends Automaton{
    constructor(){
        super()
    }

    /**
     * 
     * @param {object} context||page||undefined
     * Automaton runtime will pass data to this function depend on automaton->runLevel field at package.json
     */
    async run(page){
        await page.goto("https://google.com");
    }
}

export default BotName;