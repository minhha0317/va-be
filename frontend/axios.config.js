import axios from 'axios';

export const axiosPost = (path, body) =>
	axios.post(path, body, { headers: { 'Content-Type': 'application/json' } });
