# CatWiki - Sam Henry

Here is my code after 90 minutes.\
Thank you for the opportunity to demonstrate my skillset

App: [catwiki.samhenry.tech](http://catwiki.samhenry.tech)\
Api: [catwiki-env.eba-gfhvgi9j.ap-southeast-2.elasticbeanstalk.com](http://catwiki-env.eba-gfhvgi9j.ap-southeast-2.elasticbeanstalk.com)

## Things I have used/done

General
- Cleaned up folders using `api.catwiki` and `app.catwiki` - Create clear distinction, while maintaining a single repo
- Used folders to logcally separate code including `src`, `models`, `services`, `api`
- Used `axios` allowing for api calls to return typed data

Hosting / Deployments
- Hosted the App on AWS S3 and Api on AWS Elastic Beanstalk
- Implemented Github actions for automatic deployments with CI/CD

React App
- Typescript - Strongly typing javascript code is always a win
- Material UI - A great UI library, highly used in the industry. Helps create good looking frontends easily
- Eslint based on industry standards (airbnb, prettier) - Best way to maintain good coding styles

NodeJs Api
- Creating a service layer - This is because this api combines multiple sources of data and how that occurs is bussiness logic
- Swagger UI - Easy way to generate documentation for a public facing api including allowing users to interact with your api


## Current State

I ran out of time so I wasn't able to implement all the features requested.

## Things I wanted to implement

- Get images from thecatapi and bundle them into one call to my api
- Add appropriate swagger documentation to the api
- Make the front end React app look better
- Implement front end and backend tests
- Add a data storage for the most searched cats
- Clean up folders for the React app
