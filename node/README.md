# About the folder structure

* **db** - all modules that are accesing the data structure and are communicating directly to the database
* **handler** - all modules that responds directly to requests/messages of the browser
* **utils** - helper modules

# Module name conventions

Module file names start with a capital letter and uses camelCase

# Where does it start?

- On a standard setup, `server.js` is started either directly or via `../bin/run.sh`.
- When using CloudFoundry, the `server.js` is started by `../app.js`.
