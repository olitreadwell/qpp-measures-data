/**
 * Reads a JSON file and validates it against a specified version and type of
 * schema. If no performance year is specified, the schema version will default
 * to the current performance year. In the case of an invalid JSON document, the
 * output will contain the validation error.
 *
 * This script can be used as follows:
 * node [this file's path] [schemaType] [performanceYear] [json file path]
 * Example:
 * node dist/scripts/validate-data.js measures 2018 measures/2018/measures-data.json
 **/

import path from 'path';
import appRoot from 'app-root-path';
import YAML from 'yaml';
import fs from 'fs';

import { Constants } from '../constants';
import { ValidateLib } from './validate-lib';
import { AnySchemaObject } from 'ajv';

const schemaType = process.argv[2];
const performanceYear = (process.argv[3] || Constants.currentPerformanceYear).toString();
const jsonToValidate = fs.readFileSync(path.join(appRoot + '', process.argv[4]), 'utf8');
const optionalPath = process.argv[5];

function validate(schema: AnySchemaObject, json: any) {
  const data = JSON.parse(json);

  const {valid, errors, details} = ValidateLib.validate(schema, data);

  if (valid) {
    console.log(`Valid for ${performanceYear} performance year schema`);
  } else {
    console.log(`Invalid for ${performanceYear} performance year schema: ${errors}`);
    console.log('Detailed error: ', details);
    process.exit(1);
  }
}

if (!schemaType) {
  console.log('Please provide schema type, e.g. measures or benchmarks\nExample Command: node dist/scripts/validate-data.js measures 2023 measures/2023/measures-data.json');
  process.exit(1);
}

// Load the schema file
const schema = YAML.parse(fs.readFileSync(path.join(appRoot + '', optionalPath || schemaType, performanceYear, schemaType + '-schema.yaml'), 'utf8'));

// Validate the json against the schema
validate(schema, jsonToValidate);

