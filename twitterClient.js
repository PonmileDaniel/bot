const {TwitterApi} = require('twitter-api-v2')
require('dotenv').config()

const client = new TwitterApi({
    apiKey:process.env.Api_key,
    apiSecret:process.env.Api_Secret,
    accessToken:process.env.Access_token,
    accessSecret:process.env.Access_token_Secret,
})

const bearer = new TwitterApi(process.env.bearer_token)

const twitterClient = client.readWrite
const twitterBearer = bearer.readOnly

module.exports = {twitterClient,twitterBearer}
