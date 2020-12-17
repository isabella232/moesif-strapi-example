# Strapi Moesif Example

This example shows how to add API observability and monitoring to a Strapi project using [Moesif](https://www.moesif.com).
This is based on the Strapi quickstart and the [strapi-plugin-moesif](https://github.com/Moesif/strapi-plugin-moesif) plugin. 

## Running the example

1. Add your Moesif Application Id to the file `./config/middleware.js`.
This contains all the Strapi middleware that's enabled and their options.

2. Run the project

```bash
npm install
 
npm run develop
```

## To Start with a fresh database.

You can delete `.tmp` folder, it is the temp database file.
