const axios = require("axios");
var express = require('express');
var router = express.Router();

var dataArr=[];

var config = {
    method: 'get',
    url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=5',
    headers: {
        'X-CMC_PRO_API_KEY': 'a7331374-5263-4a18-a0eb-cd632cd25600',
        'Cookie': '__cfduid=dd1c8a215752b15d7a2894618492626001620341984'
    },
};

router.get( '/',(req, res) => {
        axios(config).then(function (response) {
                dataArr = response.data
                res.send(dataArr)
            }
        )
            .catch(function (error) {
                console.log(error);
            })
        ;
    }
)

module.exports = router;