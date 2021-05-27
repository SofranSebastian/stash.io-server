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

# Server Architecture Diagram

![dp](https://user-images.githubusercontent.com/25872149/119741618-c4b8a200-be8e-11eb-910f-348bbc623155.jpg)

# Run it

How to start the server:
  - first clone it
  - after it's cloned on your machine you can run it locally on the localhost:port 
  - use npm install for installing all the packages needed
  - after the npm install is done use npm start to start the server locally
