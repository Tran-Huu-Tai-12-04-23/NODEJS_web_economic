const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/Education_dev')
        console.log('connect succefully ...')
    } catch (error) {
        console.log('connect failure!!!!!')
    }
}
module.exports = {connect}