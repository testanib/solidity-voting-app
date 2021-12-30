contract is hosted on ropsten testnet at 0x2f431883419d63796C28F880E7edbF1296ef4D77

contract code can be viewed at https://ropsten.etherscan.io/address/0x2f431883419d63796C28F880E7edbF1296ef4D77

web server runs on node 16.13.1
clone and run npm i to install dependencies for web server
run npm run dev to start the server

website hosted centrally at:
website hosted on ipfs at: https://gateway.ipfs.io/ipfs/QmSU1eTZCfYY9nJDab1A894DXuN7TS8WD24UNcUz8dGSn1/
(note ipfs can be slow to load the site)

run ipfs locally 
install ipfs and run ipfs init then ipfs daemon to start ipfs server
add dist folder to ipfs with ipfs add -r dist
save last hash printed to publish directory with ipfs name publish <hash here>

access at http://localhost:8080/ipfs/<hash>
