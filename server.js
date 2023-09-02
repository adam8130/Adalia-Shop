const fs = require('fs');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const newebpay = require('./newebpay');
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer');
const http = require('http');

require('dotenv').config();
const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;

const next = require('next');
const nextApp = next({ dev });
const handler = nextApp.getRequestHandler();

const app = express();
const httpServer = http.createServer(app);

const { gql } = require('@apollo/client');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { resolvers } = require('./resolvers');
const typeDefs = gql(fs.readFileSync(path.join(__dirname, '/schema.graphql'), 'utf-8'));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  introspection: process.env.NODE_ENV !== 'production',
  playground: process.env.NODE_ENV !== 'production'
});

nextApp.prepare()
  .then(() => {
    return server.start();
  })
  .then(() => {
    app.use(favicon(path.join(__dirname, '/public/favicon.ico')));
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send('Something broke!');
    });
    app.use(
      cors(),
      bodyParser.json()
    )
    app.use(morgan('combined', {
      skip: function (_, res) {
        return res.statusCode < 400;
      },
    }))
    
    app.post('/api/newebpay', newebpay);
    app.get('*', (req, res) => {
      return handler(req, res);
    });
    app.use(
      '/',
      expressMiddleware(server)
    );

    return new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
  })
  .then(() => {
    console.log(`🚀 Server ready at http://localhost:${PORT}/`);
  })
  .catch(error => {
    console.error("Error starting the server", error);
  });
