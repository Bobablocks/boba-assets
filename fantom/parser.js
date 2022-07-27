const testFolder = './assets';
const fs = require('fs');

var obj = {
    tokenlist: []
};

var temp = [];

var json = JSON.stringify(obj);

fs.readdirSync(testFolder).forEach(file => {
    temp.push(file);
});

for (var i = 0; i < temp.length; i++) {

    var v = JSON.parse(fs.readFileSync(testFolder + '/' + temp[i] + '/info.json', 'utf8'));
    // if (v['id'] == '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6') {
    //     obj.tokenlist.push({
    //         'symbol': 'BTC',
    //         'name': 'Bitcoin',
    //         'address': v['id'],
    //     })
    // } else if (v['id'] == '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619') {
    //     obj.tokenlist.push({
    //         'symbol': 'ETH',
    //         'name': 'Ethereum',
    //         'address': v['id'],
    //     })
    // } else if (v['id'] == '0xc2132D05D31c914a87C6611C10748AEb04B58e8F') {
    //     obj.tokenlist.push({
    //         'symbol': 'USDT',
    //         'name': 'Tether USD',
    //         'address': v['id'],
    //     })
    // } else {
        obj.tokenlist.push({
            'symbol': v['symbol'],
            'name': v['name'],
            'address': v['id'],
        })
    //}

}


console.log(obj)
var json = JSON.stringify(obj);
fs.writeFile('tokenlist.json', json, 'utf8', function (a) { });