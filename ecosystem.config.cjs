
module.exports = {
  apps : [{
    name   : "jura-coffee-backend",
    script : "src/index.js",
    env_staging: {
      NODE_ENV: "production",
      MONGO_URI: "mongodb+srv://chi:haivlk123@cluster0.zgfdr.mongodb.net/jura-coffee?retryWrites=true&w=majority",
      REDIS_URI: "redis-18800.c252.ap-southeast-1-1.ec2.cloud.redislabs.com",
      REDIS_PASSWORD: "1wn6qtiAhiMbSWG4oQ17Yd1wlODpemzA"
      
    },
    env_development: {
      MONGO_URI: "mongodb://localhost:27018/jura-coffee-backend",
      REDIS_URI: "127.0.0.1",
      NODE_ENV: "development"
    }
  }]
}
