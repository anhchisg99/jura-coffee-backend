
import  Redis  from "ioredis";
import vars from '../../../configs/database.config.js'

// test
// const redis = new Redis()

// production
const redis = new Redis({
    host: vars.redis.host,
    port: '18800',
    password: vars.redis.password
});

export default redis

 //connect redis
//  import { createClient } from 'redis';

//  const client = createClient();
 
//  client.on('error', (err) => console.log('Redis Client Error', err));
//  client.on('connect', (err) => console.log('connected in Redis'));
 
//  client.on('ready', (err) => console.log('Ready in Redis'));
 
//  await client.connect();
 
//  export default client