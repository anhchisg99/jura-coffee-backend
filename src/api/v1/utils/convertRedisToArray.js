import {hgetall } from "../services/redis.js";

export default async function convertRedisToArray(sessionID){
    // const { sessionID } = req;
    let key = `cart:${sessionID}`;
    const reply = await hgetall(key)

    const keyGroup = Object.keys(reply)
    const valueGroup = Object.values(reply)
    const convertedValues = []
    const products = []
    keyGroup.forEach(data => convertedValues.push(data.split(':')[1]))
    for(let i =0;i<keyGroup.length;i++){
        products.push({product:convertedValues[i],quantity:valueGroup[i]})
    }
    return products
}
