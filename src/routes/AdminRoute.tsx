import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

// 토큰 디코딩 함수
const parseJwt = (token: string) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
};

const AdminRoute = () => {
  const token = Cookies.get('token');
  if (!token) {
    alert("로그인이 필요합니다.");
    return <Navigate to="/signin" />;
  }

  const decoded = parseJwt(token);
  if (!decoded) {
    alert("유효하지 않은 토큰입니다.");
    return <Navigate to="/sigin" />;
  }

  if (decoded.role !== 'ADMIN') {
    alert("관리자 권한이 필요합니다.");
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default AdminRoute;
