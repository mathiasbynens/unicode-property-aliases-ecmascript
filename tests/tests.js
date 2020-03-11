const test = require('ava');
const propertyAliases = require('../index.js');

test('unicode-property-aliases-ecmascript', t => {
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
	t.is(
		propertyAliases.get('EBase'),
		'Emoji_Modifier_Base'
	);
});
