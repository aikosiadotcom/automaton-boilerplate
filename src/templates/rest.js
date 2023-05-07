import Automaton, { Decorators } from "@aikosia/automaton-core";

class BotName extends Automaton{
    constructor(){
        super({key:"BotName"});
    }

    /**
     * Run the bot
     * @param {null | object} arg - This function will received one of those values 'context'|'page'|'null' based on runParameter field in automaton.json
     */
    async run(page){
        await page.goto("https://aikosia.com");
    }

    /**
     * You can call this function by post to [AUTOMATON_DAEMON_HOST]:[AUTOMATON_DAEMON_PORT]/rest/[BOT_NAME] with the following body raw JSON
     * {
     *  "method":"print",
     *  "args":{
     *      "name":"Jen"
     *  }
     * }
     * 
     * @param {string} name 
     * @returns {string}
     */
    @Decorators.delay({min:8,max:16})
    async print(name){
        return `Hello, ${name}`;
    }
}

export default BotName;