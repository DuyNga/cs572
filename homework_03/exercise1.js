const dns = require('dns');
const { promisify } = require('util');
const resolve4Async = promisify(dns.resolve4);

//// 1
const w3 = dns.resolve4('www.mum.edu', function (err, addresses) {
    if (err) throw err;
    console.log('1. ' + addresses);
});

//// 2
resolve4Async('www.mum.edu')
    .then((addresses) => console.log('2. ' + addresses))
    .catch((err) => console.log(err));

//// 3
async function main() {
    try {
        const text = await resolve4Async('www.mum.edu');
        console.log('3. ' + text);
    } catch (err) {
        console.log(err)
    }
}

main();