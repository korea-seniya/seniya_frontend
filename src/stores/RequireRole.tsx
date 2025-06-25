import type { ReactNode } from 'react';
import { useUserStore } from "../stores/user.store";
import { Navigate } from "react-router-dom";

interface Props {
  role: number; 
  children: ReactNode;
}

const RequireRole = ({ role, children }: Props) => {
  const { isLogin, user } = useUserStore();

  if (!isLogin) {
    return <Navigate to="/signin " />;
  }

  if (user?.role_id !== role) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default RequireRole;