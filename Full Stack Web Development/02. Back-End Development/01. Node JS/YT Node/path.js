import { log } from 'console';
import { basename, dirname, join, parse,} from 'path';
import {fileURLToPath} from 'url';

// console.log('folder name', path.dirname(__filename));

const __filename = fileURLToPath(import.meta.url);
// console.log(__filename);

const __dirname = dirname(__filename);
// console.log(__dirname);

const __basename  = basename(__filename);
console.log(__basename);

const __parse = parse(__filename);
console.log(__parse);

const __join = join(__dirname, 'home','app.js');
console.log(__join);