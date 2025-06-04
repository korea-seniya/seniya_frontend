const API_DOMAIN = import.meta.env.REACT_APP_API_DOMAIN || "http://localhost:8080";

const AUTH_MODULE_URL = `${API_DOMAIN}/api/v1/auth`;
export const SIGN_UP_URL = `${AUTH_MODULE_URL}/signup`;
export const SIGN_IN_URL = `${AUTH_MODULE_URL}/login`;

const FILE_MODULE_URL = `${API_DOMAIN}/api/v1/files`;
export const UPLOAD_FILE_URL = `${FILE_MODULE_URL}/upload`;