import main from './main';
import { strict as assert } from 'assert';
assert.deepEqual(main().secret.length, 4);
console.log('✅ passed');
