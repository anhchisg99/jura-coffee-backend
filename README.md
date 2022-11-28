## jura-coffee-backend

this project was generated with Nodejs version 16.0.0

### development server
Run `docker-compose up` for a redis with  mongodb for dev.

To install pm2. `npm i -g pm2`. This is a product process manager for Node. js applications.

Run `pm2 start ecosystem.config.cjs --env development` or `npm run dev` for a dev server. Navigate to `http://localhost:3001/`. The app will automatically reload if you change any of the source files.

## Learn More

You can learn more in [Docker compose docs](https://docs.docker.com/compose/gettingstarted/).

To learn Pm2, check out [Pm2 environment variables docs](https://pm2.keymetrics.io/docs/usage/environment/).

### Cache Carts using Redis

this section has moved here: 
[Shopping carts in Redis](https://redis.com/ebook/part-1-getting-started/chapter-2-anatomy-of-a-redis-web-application/2-2-shopping-carts-in-redis/).

