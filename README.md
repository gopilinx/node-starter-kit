node-starter-kit
=====

A starter kit built using nodejs/expressjs that with a number of preconfigured grunt tasks and scripts to make your life easier.
Also uses jenkins-mocha

---

**Global dependencies**
```sh
sudo npm install -g grunt-cli
sudo npm install -g node-inspector
```

**Local dependencies**
```sh
npm install
```

**Start your server using nodemon**
```js
npm run start
```

**Start your server in debug mode with node inspector**
```js
npm run debug
```

**Create a pre-commit git hook that runs jshint before every commit**
```sh
grunt githooks
```

**Compile your scss files in public/scss to public/stylesheets**
```sh
npm run build-css
```

Open `localhost:3000/home` in the browser.
