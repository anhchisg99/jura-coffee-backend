
module.exports = {
  apps : [{
    name   : "jura-coffee-backend",
    script : "src/index.js",

    env_development: {
      MONGO_URI: "mongodb://localhost:27018/jura-coffee-backend",
      REDIS_URI: "127.0.0.1",
      NODE_ENV: "development"
    }
  }]
}
