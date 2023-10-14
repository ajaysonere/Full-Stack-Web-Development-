import os, { totalmem } from 'os';
import { createBrotliCompress } from 'zlib';

console.log('Os Type :',os.type());
console.log('Platefrom :',os.platform());
console.log('cpu architecure :',os.arch());
// console.log('CPU details :',os.cpus());
console.log("Free Memory :",os.freemem());
console.log("Total Memory :",os.totalmem())
console.log('Up Time :',os.uptime());