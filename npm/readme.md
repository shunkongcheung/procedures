## Getting Started

### Prerequisite
* npm

### directory structure

    <package-name>.
    ├── dist                   	# Compiled files
    └── dist-example						# Compiled files for an `example`
    └── example									# an example of how to use this package
    		└── ...
    └── src
    		└── index.ts						# to export object / methods that can be used
    		└── ...
    └── package.json						# add some of the command as stated below
    └── readme.md
    └── tsconfig-example.json		# use to compile `dist-example`
    └── tsconfig.json						# used to compile the package

### TSCONFIG
#### tsconfig-example
* it is just another regular tsconfig for compiling example.
* one thing to note that it includes both the `example` and  `src` directory

#### tsconfig
* the important part of this file is `declartion:true`, this will compile `*.d.ts` to dist
* because of this flag, some of the regular typescript practice may not work, like private type definition

### PACKAGE.JSON
* name: the name of the package. may use `<username>-<some-name>` to avoid collision
* version: current npm version
* main: set it as `dist/index.js`, when using the package, can import as `import { something } from '<package-name>';`
* types: set it as `dist/indexd..js`
* files: whitelisted files to be published.

#### Scripts
* `npm run dev` for compiling typescript and run nodemon. sometimes you may need to run `rm -rf dist-example` if typescript don't behave correctly
* `npm run build`: compile the package. this does not compile example
* `npm version patch`: bump up the version. it will also trigger `npm run prebuild && npm run prpare && npm run postversion`. suggest to run it in `production` branch
* `npm publish`: deploy your package. it must be run at the root of the package (i.e. where the `package.json` is located)
