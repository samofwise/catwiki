import express from 'express';

const PORT = process.env.PORT || 3001;

const app = express();

// Change structure to host react app statically on Aws S3 and then the api
// independantly on Elastic Beanstalk

app.get('/', (req, res) => {
  res.json({ message: 'Hello from CatWiki!' });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
