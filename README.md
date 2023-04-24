# CONFIG

Before you run, please create a .env file contains:

```
AUTOMATON_DAEMON_HOST=
AUTOMATON_DAEMON_PORT=

AUTOMATON_SUPABASE_URL=
AUTOMATON_SUPABASE_KEY=
```

Don't forget to add **NPM_AUTH_TOKEN** on your github project > settings > secrets and variables > Actions, so when you run publish it will automatically publish to npm

# COMMAND

## RUN

```
npm start
```

after you run, automaton runtime will compile your code into .automaton

## PUBLISH

after you finish testing, you run below command to publish to npm

```
npm run publish
```



