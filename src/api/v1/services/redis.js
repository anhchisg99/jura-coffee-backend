import redis from '../datasources/connection_redis.js'
async function set(key,value){
    return await redis.set(key,value)
}
async function get(key){
    return await redis.get(key)
}
async function hset(hash,key,value){
    return await redis.hset(hash,key,value)
}
async function hget(key,value){
    return await redis.hget(key,value)
}
async function hdel(key,value){
    return await redis.hdel(key,value)
}
async function del(key){
    return await redis.del(key)
}
async function hmset(key,value){
    return await redis.hmset(key,value)
}
async function hgetall(key){
    return await redis.hgetall(key)
}
async function hincrby(hash, key, incr) {
    return await redis.hincrby(hash, key, incr);
}
async function jsonGet(key) {
    return  await redis.json_get(key);
}

// jsonSet(key, path, json) {
//     return this.redis.json_set(key, path, json);
// }
export {
    set,
    get,
    hset,
    del,
    hdel,
    hget,
    hgetall,
    hmset,
    hincrby,
    jsonGet
}