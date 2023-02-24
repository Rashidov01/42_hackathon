<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


## Access DataBase
data is set to be saved when you close and reopen the container through the volume
to apply your new update to the database run the command:
```
docker exec -it 42_hackathon-api-1 npx prisma migrate dev
```
to be able to use database in our code through prisma client run the command
```
docker exec -it 42_hackathon-api-1 npx prisma generate
```

## Fill Database
after setting up database, you can fill it by running the api and then running the shellscript file data.sh in the file called fetcher by running
```
bash data.sh
```
OR
to avoid updating database and waiting 35 min, just make a patch request to our api on the endpoint ```/api/update``` to install all of our local info on the database

## Auth
to authenticate a user after extracting the code from 42 authentication, make a post request to the endpoint ```/api/auth``` by including the code as a header with the request as a bearer token, then you will receive a new encoded token that is used to communicate between the backend and the frontend to identify the logged in user.

to get the current logged in user send the provided token mentioned up there in the request in the header as a bearer token to the endpoint ```/api/users/me``` and you'll get the info of that user.

## EndPoints
to get a user's info you can make a get request to
```
/api/users/:login
```
to get a user's projects you can make a get request to
```
/api/users/:login/projects
```
to get a specific project from a single user you can make a get request to
```
/api/users/:login/projects/:project
```
to get all users that are on a specific status on single project you can make a get request to
```
/api/users/project/:name/:status
```
to get a token for a user that is logging in through authentication you can make a post request with the required code as a header to
```
/api/auth
```
to get the current logged in user you can make a get request including the authorization code as a header taken from the previous endpoint to
```
/api/users/me
```
to get a project status of a single user you can make a get request to the endpoint
```
/api/:login/projects/status/:status
```
to get the cursus user info of a single user you can make a get request to the endpoint
```
/api/users/:login/cursus
```
to search for a user using a set of characters you can make a get request to the endpoint
```
/api/search/:searched
```
to get the users sorted using a specific key from (level, correction_points, wallet) you can make a get request to the endpoint
```
/api/users/sort/:key
```


