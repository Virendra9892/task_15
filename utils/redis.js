// const {createClient}  = require('redis')
const redis = require("redis")

const client = redis.createClient();
(async()=>{
    await client.connect().then(()=>{
        console.log("redis connected");
    })
    client.on('error', (err) => console.log('Redis Client Error', err));
})()

module.exports = client;
