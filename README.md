# stash.io-server

Stash.io-server is the backend part for the Stash.io mobile application (https://github.com/SofranSebastian/stash.io)

The main purpose of this project is to cache the top 10 cryptocurrencies at the moment. The data is fetched from the CoinMarketCap using axios and the caching is done internally using the node-cache package (https://www.npmjs.com/package/node-cache). The only endpoint the server has is root.
