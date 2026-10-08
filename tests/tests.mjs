import test from 'node:test';
import propertyAliases from '../index.mjs';

test('unicode-property-aliases-ecmascript', t => {
	t.assert.strictEqual(
		propertyAliases.get('gc'),
		'General_Category'
	);
	t.assert.strictEqual(
		propertyAliases.get('sc'),
		'Script'
	);
	t.assert.strictEqual(
		propertyAliases.get('scx'),
		'Script_Extensions'
	);
	t.assert.strictEqual(
		propertyAliases.get('WSpace'),
		'White_Space'
	);
	t.assert.strictEqual(
		propertyAliases.get('space'),
		'White_Space'
	);
	t.assert.strictEqual(
		propertyAliases.get('EBase'),
		'Emoji_Modifier_Base'
	);
});
