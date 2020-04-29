const regex = require('./index');
const assert = require('assert').strict;

assert.strictEqual(regex.match('a.', 'ab'), true);
assert.strictEqual(regex.match('ac', 'ab'), false);
assert.strictEqual(regex.match('a.', 'aab'), true);
assert.strictEqual(regex.match('ab', 'aab'), true);
assert.strictEqual(regex.match('ab?', 'aab'), true);
assert.strictEqual(regex.match('ab?', 'aac'), true);
assert.strictEqual(regex.match('ab*', 'a'), true);
assert.strictEqual(regex.match('ab*', 'aab'), true);
assert.strictEqual(regex.match('ab*', 'ac'), true);

