import fs from 'node:fs/promises';
import jsesc from 'jsesc';
import canonicalProperties from 'unicode-canonical-property-names-ecmascript';

const parsePropertyAliases = async () => {
	const map = new Map();
	const source = await fs.readFile('./data/PropertyAliases.txt', 'utf8');
	const lines = source.split('\n');
	for (const line of lines) {
		if (!line || /^#/.test(line)) {
			continue;
		}
		const data = line.trim().split(';');
		const alias1 = data[0].trim();
		const canonicalName = data[1].trim();
		if (!canonicalProperties.has(canonicalName)) {
			continue;
		}
		console.assert(!map.has(alias1));
		map.set(alias1, canonicalName);
		const remaining = data.slice(2);
		for (const otherAliasData of remaining) {
			const otherAlias = otherAliasData.trim();
			console.assert(!map.has(otherAlias));
			map.set(otherAlias, canonicalName);
		}
	}
	return map;
};

const map = await parsePropertyAliases();
const header = '// Generated using `npm run build`. Do not edit!';
const output = `${ header }\nexport default ${
	jsesc(map, {
		'compact': false
	})
};\n`;
await fs.writeFile('./index.mjs', output);
