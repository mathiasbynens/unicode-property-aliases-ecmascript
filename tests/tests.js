const test = require('node:test');
const propertyAliases = require('../index.js');

test('unicode-property-aliases-ecmascript', t => {
	t.assert.ok(
		propertyAliases.get('gc'),
		'General_Category'
	);
	t.assert.ok(
		propertyAliases.get('sc'),
		'Script'
	);
	t.assert.ok(
		propertyAliases.get('scx'),
		'Script_Extensions'
	);
	t.assert.ok(
		propertyAliases.get('WSpace'),
		'White_Space'
	);
	t.assert.ok(
		propertyAliases.get('space'),
		'White_Space'
	);
	t.assert.ok(
		propertyAliases.get('EBase'),
		'Emoji_Modifier_Base'
	);
});
