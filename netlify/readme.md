### Getting Started

## Directory structure
    <package-name>.
    ├── netlify.toml        # a build command is speified in this file. therefore, `build` should not be pushed
    ├── package.json        # should put a build command corresponding to `netlfiy.toml`
    └── build               # this directoy name should match the build attribute in `netlify.toml`
        └── index.html      # `index.html` should exist in the `build` directory
        └── ...
    └── src                 # this directory name is arbitary. but should match the `build` command
        └── index.ts
        └── ...

## Procedure
* create netlify account
* link git into netlify
* select deploy branch for production
* select other branch for branch-deploy
* git push
* add environment variable
* create domain and follow the steps to create `CNAME` for SSL verification
* visit your page at your custom domain
