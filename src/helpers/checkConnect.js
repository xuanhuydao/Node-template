'use strict'
const { default: mongoose } = require("mongoose")
const os = require('os')
const process = require('process')

const _SECONDS = 1000*60 
//count connect
const countConnect = () => {
    const numConnecttion = mongoose.connections.length
    console.log(`Number of connections:: ${numConnecttion}`)
}

//check overload
const checkOverload = () => {
    setInterval( () => {
        const numConnecttion = mongoose.connections.length
        const numCores = os.cpus().length
        const memoryUsage = process.memoryUsage().rss

        //Example maximum number of connections base on number of cores
        const maxConnections = numCores*5

        console.log(`Active connections:: ${numConnecttion}`)
        console.log(`Memory usage:: ${memoryUsage / 1024 / 1024} MB`)

        if(numConnecttion > maxConnections) {
            console.log(`Connection overload detected!`)
        }

    }, _SECONDS)
}
module.exports = {
    countConnect,
    checkOverload
}