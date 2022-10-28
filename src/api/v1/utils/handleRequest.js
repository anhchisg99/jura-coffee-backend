export default async function handleRequest (promise){
    return promise.then(data =>([undefined,data]))
    .catch(err=>([err,undefined]))
}
