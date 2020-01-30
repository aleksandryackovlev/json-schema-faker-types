/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'json-schema-faker' {
  import Faker from 'faker';
  import Chance from 'chance';

  interface JSONSchema {
    [index: string]: any;
    $comment?: string;
    $id?: string;
    $ref?: string;
    $schema?: string;
    additionalItems?: JSONSchema | boolean;
    additionalProperties?: JSONSchema | boolean;
    allOf?: (JSONSchema | boolean)[];
    anyOf?: (JSONSchema | boolean)[];
    const?: any;
    contains?: JSONSchema | boolean;
    contentEncoding?: JSONSchemaContentEncodingName | JSONSchemaContentEncoding;
    contentMediaType?: string;
    default?: any;
    definitions?: {
      [key: string]: JSONSchema | boolean;
    };
    dependencies?:
      | {
          [key: string]: JSONSchema | boolean | string[];
        }
      | string[];
    description?: string;
    else?: JSONSchema | boolean;
    enum?: any[];
    examples?: any[];
    exclusiveMaximum?: number;
    exclusiveMinimum?: number;
    format?:
      | JSONSchemaFormat
      | 'date'
      | 'date-time'
      | 'email'
      | 'full-date'
      | 'full-time'
      | 'hostname'
      | 'idn-email'
      | 'idn-hostname'
      | 'ipv4'
      | 'ipv6'
      | 'iri'
      | 'iri-reference'
      | 'json-pointer'
      | 'json-pointer-uri-fragment'
      | 'regex'
      | 'relative-json-pointer'
      | 'time'
      | 'uri'
      | 'uri-reference'
      | 'uri-template'
      | 'uuid';
    if?: JSONSchema | boolean;
    items?: JSONSchema | boolean | (JSONSchema | boolean)[];
    maximum?: number;
    maxItems?: number;
    maxLength?: number;
    maxProperties?: number;
    minimum?: number;
    minLength?: number;
    minItems?: number;
    minProperties?: number;
    multipleOf?: number;
    not?: JSONSchema | boolean;
    oneOf?: (JSONSchema | boolean)[];
    pattern?: string;
    patternProperties?: {
      [key: string]: JSONSchema | boolean;
    };
    properties?: {
      [key: string]: JSONSchema | boolean;
    };
    propertyNames?: JSONSchema | boolean;
    readOnly?: boolean;
    required?: string[];
    then?: JSONSchema | boolean;
    title?: string;
    type?: JSONSchemaType | JSONSchemaTypeName | (JSONSchemaType | JSONSchemaTypeName)[];
    uniqueItems?: boolean;
    writeOnly?: boolean;
  }

  enum JSONSchemaFormat {
    Date = 'date',
    DateTime = 'date-time',
    Email = 'email',
    Hostname = 'hostname',
    IDNEmail = 'idn-email',
    IDNHostname = 'idn-hostname',
    IPv4 = 'ipv4',
    IPv6 = 'ipv6',
    IRI = 'iri',
    IRIReference = 'iri-reference',
    JSONPointer = 'json-pointer',
    JSONPointerURIFragment = 'json-pointer-uri-fragment',
    RegEx = 'regex',
    RelativeJSONPointer = 'relative-json-pointer',
    Time = 'time',
    URI = 'uri',
    URIReference = 'uri-reference',
    URITemplate = 'uri-template',
    UUID = 'uuid',
  }

  type JSONSchemaTypeName =
    | 'array'
    | 'boolean'
    | 'integer'
    | 'null'
    | 'number'
    | 'object'
    | 'string';

  enum JSONSchemaType {
    Array = 'array',
    Boolean = 'boolean',
    Integer = 'integer',
    Null = 'null',
    Number = 'number',
    Object = 'object',
    String = 'string',
  }

  type JSONSchemaTypeValue =
    | JSONSchemaTypeName
    | JSONSchemaType
    | (JSONSchemaType | JSONSchemaTypeName)[];

  type JSONSchemaContentEncodingName =
    | '7bit'
    | '8bit'
    | 'binary'
    | 'quoted-printable'
    | 'base64'
    | 'ietf-token'
    | 'x-token';

  enum JSONSchemaContentEncoding {
    '7bit' = '7bit',
    '8bit' = '8bit',
    Binary = 'binary',
    QuotedPrintable = 'quoted-printable',
    Base64 = 'base64',
    IETFToken = 'ietf-token',
    XToken = 'x-token',
  }

  const JSONSchemaKeys: (keyof JSONSchema)[];

  type JSFResult =
    | string
    | number
    | Date
    | boolean
    | null
    | JSFResult[]
    | { [key: string]: JSFResult };

  interface JSFGenerators {
    pick: <T>(arr: T[]) => T;
    date: (
      steps?: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years'
    ) => number | Date;
    shuffle: <T>(arr: T[]) => T[];
    number: (
      min: number,
      max: number,
      defMin: number,
      defMax: number,
      hasPrecision = false
    ) => number;
    randexp: (value: string) => string;
  }

  interface JSFOptions {
    defaultInvalidTypeProduct: JSFResult;
    defaultRandExpMax: number;
    ignoreProperties: string[];
    ignoreMissingRefs: boolean;
    failOnInvalidTypes: boolean;
    failOnInvalidFormat: boolean;
    alwaysFakeOptionals: boolean;
    optionalsProbability: false | number;
    fixedProbabilities: boolean;
    useExamplesValue: boolean;
    useDefaultValue: boolean;
    requiredOnly: boolean;
    minItems: number;
    maxItems: number;
    minLength: number;
    maxLength: number;
    refDepthMin: number;
    refDepthMax: number;
    resolveJsonPath: boolean;
    reuseProperties: boolean;
    fillProperties: boolean;
    replaceEmptyByRandomValue: boolean;
  }

  interface JSFFormatFunction {
    (schema: JSONSchema): string;
  }

  interface JSF {
    (schema: JSONSchema, refs?: JSONSchema[], cwd?: string): JSFResult; // done
    generate: (schema: JSONSchema, refs?: JSONSchema[]) => JSFResult; // done
    resolve: (schema: JSONSchema, refs?: JSONSchema[], cwd?: string) => Promise<JSFResult>; // done
    format: () => { [key: string]: JSFFormatFunction };
    format: (formats: { [key: string]: JSFFormatFunction | null }) => void;
    format: (name: string) => JSFFormatFunction;
    format: (name: string, cb: JSFFormatFunction | null) => void;
    option: (opts: Partial<JSFOptions>) => void;
    option: (opt: keyof JSFOptions, value: JSFOptions[keyof JSFOptions]) => void;
    random: JSFGenerators;
    extend: (name: string, cb: () => Faker.FakerStatic | Chance.Chance) => JSF; // done
    define: (name: string, cb: (value: JSFResult, schema: JSONSchema) => JSFResult) => JSF; // done
    reset: (name?: string) => JSF; // done
    locate: (name: string) => Faker.FakerStatic | Chance.Chance; // done
    version: string;
  }

  const jsf: JSF;

  export = jsf;
}
