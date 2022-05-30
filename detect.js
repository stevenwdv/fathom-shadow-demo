import * as fathomWeb from 'fathom-web';
import * as fathomShadow from 'fathom-shadow';

function getDummyEmailRuleset(fathom) {
	const {dom, out, rule, ruleset} = fathom;
	return ruleset([
		rule(dom('input[type=email]'), out('email')),
	]);
}

export function detectEmailInputs(domRoot, fathomEdition) {
	return getDummyEmailRuleset({fathomWeb, fathomShadow}[fathomEdition]).against(domRoot).get('email');
}
