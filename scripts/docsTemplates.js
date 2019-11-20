const footer = `
[back to main page](../../README.md)

© 2018-${new Date().getFullYear()} Lundegaard a.s.`;

const apiRef = ref => `## API reference
 {{#module name="${ref}"}}
 {{>docs~}}
 {{/module}}`;

const frontMatter = (packageName, order) => `---
path: /${packageName}
title: '${packageName}'
order: ${order}
---\n`;

const validations = `# Validations
This package contains common validation functions

${apiRef('validations')}
${footer}`;

const intl = `# Intl
This package provides translator for react-inl messages. Also convenient API for validations.

${apiRef('intl')}
${footer}`;

const core = `# Core
This package contains all core functionalities for Validarium.

${apiRef('core')}
${footer}`;

const predicates = `# Predicates
This package contains all predicates used in validation functions.
Name and usage is self explanatory. If not, please look at the tests.

You can use them for composing custom functionality.

${apiRef('predicates')}
${footer}`;

// ------------WEB-----------

const validationsWeb = `
${frontMatter('Validations', 2)}
This package contains common validation functions

${apiRef('validations')}
`;

const intlWeb = `
${frontMatter('Intl', 4)}
This package provides translator for react-inl messages. Also convenient API for validations.

${apiRef('intl')}
`;

const coreWeb = `
${frontMatter('Core', 1)}
This package contains all core functionalities for Validarium.

${apiRef('core')}
`;

const predicatesWeb = `
${frontMatter('Predicates', 3)}
This package contains all predicates used in validation functions.
Name and usage is self explanatory. If not, please look at the tests.

You can use them for composing custom functionality.

${apiRef('predicates')}
`;

const createRecord = (packageName, template, target) => ({ packageName, template, target });

module.exports = [
	createRecord('validations', validations, 'readme'),
	createRecord('core', core, 'readme'),
	createRecord('predicates', predicates, 'readme'),
	createRecord('intl', intl, 'readme'),
	createRecord('validations', validationsWeb, 'web'),
	createRecord('core', coreWeb, 'web'),
	createRecord('predicates', predicatesWeb, 'web'),
	createRecord('intl', intlWeb, 'web'),
];
