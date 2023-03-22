import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import options from './swagger.json';
import breeds from './routes/breeds';

const app = express();
const PORT = process.env.PORT || 3000;
const specs = swaggerJsdoc(options);

// Change structure to host react app statically on Aws S3 and then the api
// independantly on Elastic Beanstalk

app.use('/breeds', breeds);

app.use('/', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
