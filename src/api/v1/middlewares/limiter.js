import client from '../datasources/connection_redis.js'

const incr = key => {
    return new Promise((resolve,reject)=>{
        client.incr(key,(err,result)=>{
            if(err) return reject(err)
            resolve(result)
        })
    })
}
const expire = (key,ttl) =>{
    return new Promise((resolve,reject)=>{
        client.expire(key,ttl,(err,result)=>{
            if(err) return reject(err)
            resolve(result)
        })
    })
}
const ttl = key =>{
    return new Promise((resolve,reject)=>{
        client.ttl(key,(err,ttl)=>{
            if(err) return reject(err)
            resolve(ttl)
        })
    })
}
const limit_request = async (req,res,next)=>{
    const identify_url = req.headers['x-forwarded-for']
    const numRequest = await incr(identify_url);
    let _ttl;
    if(numRequest === 1){
        await expire(identify_url,60)
        _ttl = 60
    }else{
        _ttl = await ttl(identify_url)
    }
    if(numRequest >20){
        return res.status(503).json({
            status:'error',
            _ttl,
        })
    }else{
        next()
    }
}
export {
    incr,
    expire,
    ttl,
    limit_request

}    