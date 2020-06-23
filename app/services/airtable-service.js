/**
 * @file
 *
 * Helper functions to query Airtable API.
 * Example use in component file:
 *
 * useEffect(() => {
 *   getRecordsList('questions').then((recordList) => {
 *     setQuestions(recordList);
 *   });
 * }, []);
 *
 * Airtable API Documentation: https://airtable.com/appfCE2iZ73VsQ1nY/api/docs
 *
 */

import axios from 'axios';
import { AIRTABLE_API_KEY } from './secrets';

export const api = axios.create({
  baseURL: 'https://api.airtable.com/v0/appfCE2iZ73VsQ1nY',
  headers: {
    Authorization: `Bearer ${AIRTABLE_API_KEY}`,
  },
});

export const getRecordsList = (tableName) => {
  return new Promise((resolve, reject) => {
    api
      .get(`/${tableName}`)
      .then((res) => {
        resolve(res.data.records);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getSingleRecord = (tableName, recordId) => {
  return new Promise((resolve, reject) => {
    api
      .get(`/${tableName}/${recordId}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
