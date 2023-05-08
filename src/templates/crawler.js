import Automaton, { Decorators } from "@aikosia/automaton-core";

class BotName extends Automaton{
    constructor(){
        super({key:"BotName"});
    }

    /**
     * Run the bot
     * @param {null | object} arg - This function will received one of those values 'context'|'page'|'null' based on runParameter field in automaton.config.json
     */
    @Decorators.delay({min:8,max:16})
    async run(page){
        await page.goto("https://aikosia.com");
    }
}

export default BotName;