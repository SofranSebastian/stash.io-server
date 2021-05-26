# stash.io-server

Stash.io-server is the backend part for the Stash.io mobile application (https://github.com/SofranSebastian/stash.io)

The main purpose of this server is to cache the top 10 cryptocurrencies at the moment. 

The data is fetched from the CoinMarketCap using axios and the caching is done internally using the node-cache package (https://www.npmjs.com/package/node-cache). 

The only endpoint the server has is root.

Used technologies:
  - Express.js as a backend web application framework
  - AWS as Cloud service
  - EC2 as the virtual server from AWS with Ubuntu

# Remote acces to the virtual server

Here 2 tools are used:
  - PuTTY:
      - for remote access to the EC2 instance
  - FileZilla:
      - for transfering files to the remote virtual server  
