import { get, post } from './axios';

const fetchCollegesApi = 'http://47.94.214.83/api/college/';

export const fetchColleges = () => get(fetchCollegesApi);
