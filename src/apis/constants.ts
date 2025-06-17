const API_DOMAIN = import.meta.env.REACT_APP_API_DOMAIN || "http://localhost:8080";

const AUTH_MODULE_URL = `${API_DOMAIN}/api/v1/auth`;
export const SIGN_UP_URL = `${AUTH_MODULE_URL}/signup`;
export const SIGN_IN_URL = `${AUTH_MODULE_URL}/login`;

const FILE_MODULE_URL = `${API_DOMAIN}/api/v1/files`;
export const UPLOAD_FILE_URL = `${FILE_MODULE_URL}/upload`;

const INQUIRY_MODULE_URL = `${API_DOMAIN}/api/v1/inquiries`;
export const CREATE_INQUIRY_URL = `${INQUIRY_MODULE_URL}`;
export const GET_MY_INQUIRY_URL = `${INQUIRY_MODULE_URL}/me`;
export const GET_ALL_INQUIRY_URL = `${INQUIRY_MODULE_URL}`;
export const GET_INQUIRY_DETAIL_URL = (id: number | string) => `${INQUIRY_MODULE_URL}/${id}`;
export const PUT_INQUIRY_URL = (id: number | string) => `${INQUIRY_MODULE_URL}/${id}`;
export const DELETE_INQUIRY_URL = (id: number | string) => `${INQUIRY_MODULE_URL}/${id}`;
export const ANSWER_INQUIRY_URL = (id: number | string) => `${INQUIRY_MODULE_URL}/${id}/response`;

export const COURSE_LIST_URL = `${API_DOMAIN}/api/v1/courses`
export const USER_LIST_URL = `${API_DOMAIN}/api/v1/admin/users`
export const USER_DETAIL_URL = `${API_DOMAIN}/api/v1/admin/users`
