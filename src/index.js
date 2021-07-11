import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import mySchema from './schema';

import bodyParser from 'body-parser';
import cors from 'cors';

import { connect } from './database';

import config from './config/index';

const app = express();

// connect mongo database
connect();

app.use(bodyParser.json());

// Add cors
app.use(cors());

// Add headers
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: mySchema,
    rootValue: global
}));

// start server
app.listen({ port: config.port }, () => console.log(`Server on port 3000 at http://localhost:${config.port}/graphql`));