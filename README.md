# project bare-webapp-nodejs-reactjs

built with:
- nodejs - environment
- expressjs - back-end framework

## server

### development

#### run dev server with client concurrently

```shell
npm run dev:concurrent
```

#### run dev build client serve static files

```shell
npm run dev:server
```

#### run dev

```shell
npm run dev
```

#### run dev with nodemon
restart when file changes

```shell
npm run watch
```

### test

#### run test

```shell
npm run test
```

#### run specific test

```shell
npm run test -- -t '<name-test>'
#e.g. npm run test -- -t 'should return the input data'
```

WARN: do not put parentheses in test name

#### run test with coverage

```shell
npm run test:coverage
```

### production

#### run clean

babel remove dist

```shell
npm run clean
```

#### run build

babel build to dist

```shell
npm build
```

#### run production

```shell
npm start
```