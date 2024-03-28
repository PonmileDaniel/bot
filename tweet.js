require('dotenv').config()
const {twitterClient} = require('./twitterClient')

const tweet = async()=>{
    try{
        await twitterClient.v1.tweet("Hi, Im new here. show some love!")
    }catch(err){
        console.log(err)
    }
}


tweet()