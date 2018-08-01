# api-test

## Description

Simple application to store and retrieve information from a database.

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
npm run start:prod
```

## Notes

I haven't commented the code since it's self-explanatory but for more complex projects commented code is encouraged.

The app could be improved by Dockerising it, currently connects to a local mysql server, it's implementation is up to the user.

I completed the task within 40 minutes but preferably unit tests should be written for the endpoints and some input sanitisation/validation is also useful (something like JOI maybe).

To add further features UPDATE and DELETE method could be easily implemented but the test description did not ask for it and due to lack of time I aimed for a minimum viable product.

Since I'm using MySQL 5.6 json column type is not supported but upgrading to a new version will save a lot of serialisation/deserialisation with the metadata.

I used tinyint for the status as it is more performant than varchar and real values can be easily mapped with an enum object.
