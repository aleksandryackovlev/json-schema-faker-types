/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import jsf, { JSONSchema } from 'json-schema-faker';
import faker from 'faker';
import Chance from 'chance';

const version: string = jsf.version;

const schema: JSONSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      'x-faker': 'name.firstName',
    },
    address: {
      type: 'string',
      format: 'someFormat',
    },
    phone: {
      type: 'string',
      'x-chance': 'phone',
      format: 'test',
    },
  },
};

jsf.extend('faker', () => faker);
jsf.extend('chance', () => new Chance());

const chanceInstance = jsf.locate('chance');

if (chanceInstance instanceof Chance) {
  const name = chanceInstance.natural();
}

jsf
  .define('someProp', (value, schema) => 'schema')
  .reset()
  .define('someProp', (value, schema) => 3);

jsf.reset('someProp');

interface Item {
  id: number;
  name: string;
}

const collection: Item[] = [
  {
    id: 1,
    name: 'John',
  },
  {
    id: 2,
    name: 'Bill',
  },
];

const itemPick: Item = jsf.random.pick(collection);
const date: number = jsf.random.date();
const nextCollection: Item[] = jsf.random.shuffle(collection);
const nmb: number = jsf.random.number(3, 4, 0, 100);
const str: string = jsf.random.randexp('string');

jsf.option({
  useExamplesValue: true,
});

jsf.option('refDepthMax', 5);

const formats = jsf.format();

if (formats.test) {
  const result: string = formats.test(schema);
}

jsf.format({
  test(schema: JSONSchema): string {
    return schema.title || 'some string';
  },
});

const testFormat = jsf.format('test');

if (testFormat) {
  const result: string = testFormat(schema);
}

jsf.format('test', null);

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
        format: 'test',
      },
    },
  },
  []
);

jsf.resolve(schema).then((result: any) => {
  const generated: any = result;
});

jsf(schema);
