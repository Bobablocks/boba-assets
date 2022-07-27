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
    // if (v['id'] == '0x152b9d0FdC40C096757F570A51E494bd4b943E50') {
    //     obj.tokenlist.push({
    //         'symbol': 'BTC',
    //         'name': 'Bitcoin',
    //         'address': v['id'],
    //     })
    // } else if (v['id'] == '0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB') {
    //     obj.tokenlist.push({
    //         'symbol': 'ETH',
    //         'name': 'Ethereum',
    //         'address': v['id'],
    //     })
    // } else if (v['id'] == '0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7') {
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
   // }

}


console.log(obj)
var json = JSON.stringify(obj);
fs.writeFile('tokenlist.json', json, 'utf8', function (a) { });