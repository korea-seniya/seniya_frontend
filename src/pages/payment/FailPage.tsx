// PaymentFail.tsx
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function PaymentFail() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    // 실패 이유 받아올 수 있음 (query params)
    const message = searchParams.get('message') || '결제가 취소되었거나 실패했습니다.';

    alert(message);

    // 실패 시 구매 페이지로 이동 혹은 다른 안내 페이지로 이동
    navigate('/api/v1/purchases', { replace: true });
  }, [navigate, searchParams]);

  return <div>결제 실패 처리 중입니다...</div>;
}
