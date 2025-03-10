import path from 'path';
import test from 'ava';
import npmRunPath from '.';

test('main', t => {
	t.is(
		npmRunPath({path: ''}).split(path.delimiter)[0],
		path.join(__dirname, 'node_modules/.bin')
	);

	t.is(
		npmRunPath.env({env: {PATH: 'foo'}}).PATH.split(path.delimiter)[0],
		path.join(__dirname, 'node_modules/.bin')
	);
});
