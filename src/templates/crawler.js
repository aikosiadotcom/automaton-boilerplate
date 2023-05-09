import Automaton, { Decorators } from "@aikosia/automaton-core";

class BotName extends Automaton{
    constructor(){
        super({key:"BotName"});
    }

    /**
     * Run the bot. For more information about how to use Page object you can access https://playwright.dev/docs/api/class-page
     * @param {Page} page - This function will received one of those values 'context'|'page'|'null' based on runParameter field in automaton.config.json
     */
    @Decorators.delay({min:8,max:16,meta:{name:"BotName"}})
    async run(page){
        await page.goto("https://aikosia.com");
    }
}

export default BotName;