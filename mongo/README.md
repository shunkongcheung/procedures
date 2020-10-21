## Install mongo
```bash
brew tap mongodb/brew
brew install mongodb-community@4.4
```

## Start service
```bash
brew services start mongodb-community@4.4
```

## Stop service
```bash
brew services stop mongodb-community@4.4
```

### Start Mongo client
```bash
mongo
> use <database-name>
> > db.createUser({user: '<user-name>', pwd: passwordPrompt(), roles:['readWrite', 'dbAdmin']})
Enter password: 
Successfully added user: { "user" : "<user-name>", "roles" : [ "readWrite", "dbAdmin" ] }
```
