/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'json-schema-faker' {
  export type JSONSchema = {
    [key: string]: any;
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
    contentEncoding?: JSONSchemaContentEncodingName;
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
    examples?: {
      [key: string]: any;
    };
    example?: any;
    'x-faker'?: any;
    faker?: any;
    'x-chance'?: any;
    chance?: any;
    exclusiveMaximum?: number;
    exclusiveMinimum?: number;
    format?: string;
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
      [key: string]: JSONSchema;
    };
    propertyNames?: JSONSchema | boolean;
    readOnly?: boolean;
    required?: string[];
    then?: JSONSchema | boolean;
    title?: string;
    type?: JSONSchemaTypeName | JSONSchemaTypeName[];
    uniqueItems?: boolean;
    writeOnly?: boolean;
  };

  export type JSONSchemaTypeName =
    | 'array'
    | 'boolean'
    | 'integer'
    | 'null'
    | 'number'
    | 'object'
    | 'string';

  export type JSONSchemaContentEncodingName =
    | '7bit'
    | '8bit'
    | 'binary'
    | 'quoted-printable'
    | 'base64'
    | 'ietf-token'
    | 'x-token';

  export type JSFResult =
    | string
    | number
    | boolean
    | null
    | JSFResult[]
    | { [key: string]: JSFResult };

  export interface JSFGenerators {
    pick: <T>(arr: T[]) => T;
    date: (
      steps?: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years'
    ) => number;
    shuffle: <T>(arr: T[]) => T[];
    number: (
      min: number,
      max: number,
      defMin: number,
      defMax: number,
      hasPrecision?: boolean
    ) => number;
    randexp: (value: string) => string;
  }

  export interface JSFOptions {
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

  export interface JSFFormatFunction {
    (schema: JSONSchema): string;
  }

  export interface JSF {
    (schema: JSONSchema, refs?: JSONSchema[], cwd?: string): JSFResult;
    generate(schema: JSONSchema, refs?: JSONSchema[]): JSFResult;
    resolve(schema: JSONSchema, refs?: JSONSchema[], cwd?: string): Promise<JSFResult>;
    format(): { [key: string]: JSFFormatFunction };
    format(formats: { [key: string]: JSFFormatFunction | null }): void;
    format(name: string): JSFFormatFunction | null | undefined;
    format(name: string, cb: JSFFormatFunction | null): void;
    option(opts: Partial<JSFOptions>): void;
    option(opt: keyof JSFOptions, value: JSFOptions[keyof JSFOptions]): void;
    random: JSFGenerators;
    extend(name: string, cb: () => object): JSF;
    define(name: string, cb: (value: any, schema: JSONSchema) => JSFResult): JSF;
    reset(name?: string): JSF;
    locate(name: string): object;
    version: string;
  }

  const jsf: JSF;

  export default jsf;
}
