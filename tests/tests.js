import test from 'ava';
import propertyAliases from '../index.js';

test(t => {
	t.is(
		propertyAliases.get('gc'),
		'General_Category'
	);
	t.is(
		propertyAliases.get('sc'),
		'Script'
	);
	t.is(
		propertyAliases.get('scx'),
		'Script_Extensions'
	);
	t.is(
		propertyAliases.get('WSpace'),
		'White_Space'
	);
	t.is(
		propertyAliases.get('space'),
		'White_Space'
	);
});
