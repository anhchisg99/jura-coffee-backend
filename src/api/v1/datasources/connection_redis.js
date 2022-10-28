import  Redis  from "ioredis";
const redis = new Redis()


export default redis

 //connect redis
//  import { createClient } from 'redis';

//  const client = createClient();
 
//  client.on('error', (err) => console.log('Redis Client Error', err));
//  client.on('connect', (err) => console.log('connected in Redis'));
 
//  client.on('ready', (err) => console.log('Ready in Redis'));
 
//  await client.connect();
 
//  export default client