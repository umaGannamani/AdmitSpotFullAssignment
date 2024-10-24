import csv from 'csv-parser';
import fs from 'fs';
import { parse } from 'json2csv';

export const parseCSV = (filePath) => {
  const results = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', reject);
  });
};

export const createCSV = (data) => {
  const fields = ['name', 'email', 'phone', 'address', 'timezone', 'createdAt'];
  return parse(data, { fields });
};
