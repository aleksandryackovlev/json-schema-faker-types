import jsf from 'json-schema-faker';
import faker from 'faker';
import Chance from 'chance';

jsf.extend('faker', () => faker);
jsf.extend('chance', () => new Chance());

jsf.generate(
  {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        'x-faker': 'name.firstName',
      },
      phone: {
        type: 'string',
        'x-chance': 'phone',
      },
    },
  },
  []
);
