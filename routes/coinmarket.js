const axios = require("axios");
const express = require('express');
const router = express.Router();
const NodeCache = require( "node-cache" );
const myCache = new NodeCache( { stdTTL: 100, checkperiod: 120 } );

//log error to the console if any occurs

const config = {
    method: 'get',
    url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=10',
    headers: {
        'X-CMC_PRO_API_KEY': 'a7331374-5263-4a18-a0eb-cd632cd25600',
        'Cookie': '__cfduid=dd1c8a215752b15d7a2894618492626001620341984'
    },
};

router.get( '/', async (req, res) => {
    let value = myCache.get( "coinmarketcap" );
    if ( value === undefined ){
        value = (await axios(config)).data
        myCache.set( "coinmarketcap", value, 20 );
    }
    //console.log(value)
    res.send(value)
    }
);

module.exports = router;