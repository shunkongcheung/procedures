## Getting Started With Postgres

* Postgres default runs at port :5432
* It is a relational database with special field type like `JSONField` and `ArrayField`
* It is kind of a standard for `Django` and is supported by javascript ORM like `TypeORM`

### Install locally
```
brew install postgres
pg_ctl -D /usr/local/var/postgres start
createdb <database-name>

--------------------------------------------------------------

psql <database-name>
postgres=# CREATE user <username> with password 'password';
CREATE ROLE
postgres=# ALTER role <username> set client_encoding to 'utf8';
ALTER ROLE
postgres=# ALTER role <username> set default_transaction_isolation to 'read committed';
ALTER ROLE
postgres=# ALTER role <username> set timezone to 'UTC';
ALTER ROLE
postgres=# GRANT all privileges on database <database-name> to <username>;
GRANT
postgres=# \q
```

### Using cloud service
* use a database in cloud. visit https://www.elephantsql.com/ to get free postgres cloud service
* On completion, visit https://api.elephantsql.com/console/<database-id>/details for database info
* Host will be something like raja.db.elephantsql.com
* Your Database name and user name will be the same
    
## Getting Started With MySQL

Install MySQL

```bash
$ brew install mysql
$ brew services start mysql
```

Setup Root Privilage

```bash
$ mysql_secure_installation
```

Fill in as follow
```
“Would you like to setup VALIDATE PASSWORD component?”: n
“password for root”: <password>
“Remove anonymous users?”: y
“Disallow root login remotely?”: y
“Remove test database and access to it?”: y
“Reload privilege tables now?”: y
```

For more information, see [here](https://medium.com/@JanFaessler/setup-local-lamp-stack-on-mac-with-homebrew-47eb8d6d53ea)

To create new database: 
```mysql
mysql> CREATE DATABASE <database-name>;
mysql> CREATE USER '<username>'@'localhost' IDENTIFIED BY '<password>';
mysql> GRANT ALL PRIVILEGES ON * . * TO 'onboarding_18'@'localhost';
mysql> FLUSH PRIVILEGES;
```

## TypeORM Directory

    <package-name>.
    ├── .env
    ├── ormconfig.js
    ├── package.json
    └── tsconfig.json
    └── dist
        └── index.ts
        └── ...
    └── src
        └── index.ts
        └── ...

## TypeORM Command
* `npm run build`: clean and build to `dist`
* `npm run db:gen <filename>`: create a `<timestamp-filename>.ts` under `src/migrations`
* `npm run db:revert`: revert **ONE** migrations
* `npm run db:run`: commit **ALL** pending migrations
