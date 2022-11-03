// import dotenv from 'dotenv'
// dotenv.config()
import  Redis  from "ioredis";
// test
// const redis = new Redis()

// production
const redis = new Redis({
    host: 'redis-18317.c292.ap-southeast-1-1.ec2.cloud.redislabs.com',
    port: '18317',
    password: process.env.REDIS_PASSWORD
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