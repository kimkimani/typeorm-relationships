<div align="center">
  <h1>store-nestjs</h1>
  <img alt="Last commit" src="https://img.shields.io/github/last-commit/janapc/store-nestjs"/>
  <img alt="Language top" src="https://img.shields.io/github/languages/top/janapc/store-nestjs"/>
  <img alt="Repo size" src="https://img.shields.io/github/repo-size/janapc/store-nestjs"/>

<a href="#project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#requirement">Requirement</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#run-project">Run Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#request-api">Request API</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#technologies">Technologies</a>

</div>

## Project

Manager store using nestjs.

## Requirement

To this project your need to have:

- Nodejs v18 [Nodejs](https://nodejs.org/en/)
- docker [Docker](https://www.docker.com/)

In this project your need create a file **.env** and put your config database.

```yml
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_NAME=
DB_ADMIN_EMAIL=
```

## Run Project

Start Docker in your machine and:

```sh
## up containers
❯ docker compose up -d

## start the project
npm run start:dev
```

[url-local](http://localhost:3000)

## Technologies

- nestjs
- typeorm
- postgres
- typescript

<div align="center">

Made by Janapc 🤘 [Get in touch!](https://www.linkedin.com/in/janaina-pedrina/)

</div>
