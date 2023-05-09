import Automaton, { Decorators } from "@aikosia/automaton-core";

class BotName extends Automaton{
    #context;

    constructor(){
        super({key:"BotName"});
    }

    /**
     * Run the bot
     * @param {BrowserContext} context - This function will received one of those values 'context'|'page'|'null' based on runParameter field in automaton.config.json
     */
    async run(context){
        /**
         * @see https://playwright.dev/docs/api/class-browsercontext
         * @type {BrowserContext} 
         */
        this.#context = context;
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
    @Decorators.delay({min:8,max:16,meta:{name:"BotName"}})
    async print(name){
        return `Hello, ${name}`;
    }
}

export default BotName;