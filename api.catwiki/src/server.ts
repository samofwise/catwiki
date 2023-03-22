import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import cors, { CorsOptions } from 'cors';
import options from './swagger.json';
import breeds from './routes/breeds';

const app = express();
const PORT = process.env.PORT || 3001;
const specs = swaggerJsdoc(options);

// Change structure to host react app statically on Aws S3 and then the api
// independantly on Elastic Beanstalk
const whitelist = ['http://localhost:3000', 'http://catwiki.samhenry.tech'];

const corsOptions: CorsOptions = {
  origin(origin, callback) {
    const response = origin === undefined || whitelist.includes(origin) ? { error: null, origin: true } : ({ error: new Error('Not allowed by CORS') });
    callback(response.error, response.origin);
  },
};

app.use(cors(corsOptions));

app.use('/breeds', breeds);

app.use('/', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
