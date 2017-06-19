# Boldr CLI

The CLI for Boldr allows quick scaffolding of a new Boldr project, development utilities, and
management functions.

Install globally with `npm install -g @boldr/cli` and run with `boldr <command>`.

## Commands
- [init](#init)   
- [dev](#dev)   
- [build](#build)   
- [clean](#clean)   
- [component](#component)   

### Init
`boldr init <dir>`  

Creates a new Boldr project. Requires a directory name as the input.   

**Usage:**
`boldr init newProject`    
Installation would be `<Current Working Dir>/newProject`


### Dev
`boldr dev`  

Starts the development process. In order for the `dev` command to work, `@boldr/plugin-webpack` must be
installed.   

**Usage:**
`NODE_ENV=development BOLDR_PORT=3000 BOLDR_DEV_PORT=3001 boldr dev`    

### Build
`boldr build`  

Starts the production compiling process. In order for the `build` command to work, `@boldr/plugin-webpack` must be
installed.   

**Usage:**
`NODE_ENV=production boldr build`    

### Clean
`boldr clean <dir>`  

Clean compiled Boldr files, the cache and optionally a specified directory. The directory cleaning, assumes the path of the folder
you wish to remove starts from the current working directory.

**Usage:**
`boldr clean test/tmp`    
The following would be removed:    
   ```
    <Current Working Dir>/node_modules/.boldr_cache
    <Current Working Dir>/dist/assets/*
    <Current Working Dir>/dist/server.js
    <Current Working Dir>/dist/server.js.map
    <Current Working Dir>/test/tmp
   ```

### Component
`boldr component <NAME>`

Generate a new component and the related files.
```
index.js
Foo.js
Foo.test.js
Foo.scss
```
_src/shared/components/Foo_

##### Options

`-s, --stateless`
Stateless function component

`-d, --directory`
Specify the directory for the component. The default directory is `./src/shared/components/`

`-c, --css-extension <css|less|sass`  
Use a different style type. The default for Boldr is scss.

`-t, --test <jest|none>` Choose between jest or none. A Jest test file is automatically created by default.
