// PaymentSuccess.tsx
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import type { CreatePaymentRequestDto } from '../../dtos/payment/request/CreatePayment.request.dto';
import { createPayment } from '../../apis/payment/payment';

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();


  const createPaymentSuccess = async () => {
    const dto: CreatePaymentRequestDto = {
      method: 'CARD',
      // method 가 백엔드에서 provider
      couponCount: Number(searchParams.get('count')),




    }

    const response = await createPayment(dto);

    try {
      if (response.code === "SU") {
        console.log(response.data);
        console.log(dto);
      } else {
        console.log(response.message);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    // 쿼리 파라미터 받기
    const paymentKey = searchParams.get('paymentKey');
    const orderId = searchParams.get('orderId');
    const amount = searchParams.get('amount');

    const method = searchParams.get('method');



    // TODO: 백엔드로 결제 검증 API 호출 가능
    // 예: await verifyPayment({ paymentKey, orderId });

    console.log('결제 성공 정보:', { paymentKey, orderId, amount, method });
    createPaymentSuccess();
    // 검증 후 문제 없으면 구매 페이지로 이동

    // navigate('/api/v1/purchases', { replace: true });
  }, [navigate, searchParams]);

  return <div>결제 성공 처리 중입니다. 잠시만 기다려 주세요...</div>;
}
