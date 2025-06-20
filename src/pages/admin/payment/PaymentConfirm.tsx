/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';

import * as style from './PaymentConfirm.style';
import Header from '../../../components/header';
import AdminSidebar from '../../../components/admin/AdminSidebar';
import { confirmPayment, getPaymentList } from '../../../apis/payment/payment';
import type { GetPaymentListResponseDto } from '../../../dtos/payment/response/GetPaymentList.response.dto';
import type { PaymentResponseDto } from '../../../dtos/payment/response/Payment.response.dto';
import type { ConfirmPaymentRequestDto } from '../../../dtos/payment/request/ConfirmPayment.request.dto';

function PaymentConfirm() {
  const [payments, setPayments] = useState<GetPaymentListResponseDto[]>([]);
  const [editingPaymentId, setEditingPaymentId] = useState<number | null>(null);
  const [originalStatus, setOriginalStatus] = useState<string>("");

  useEffect(() => {
    async function fetchPayments() {
      try {
        const response = await getPaymentList();
        if (response.code === "SU" && Array.isArray(response.data)) {
          setPayments(response.data);
          console.log(response.data);
        } else {
          console.log(response.message);
        }
      } catch (err) {
        console.log(err);
      }
    }

    fetchPayments();
  }, []);

  const handleStatusChange = (paymentId: number, newStatus: string) => {
    setPayments(prev =>
      prev.map(p =>
        p.paymentId === paymentId ? { ...p, status: newStatus } : p
      )
    );
  };

  const handleEditClick = (paymentId: number, currentStatus: string) => {
    setOriginalStatus(currentStatus);
    setEditingPaymentId(paymentId);
  };

  const handleCancelClick = (paymentId: number) => {
    setPayments(prev =>
      prev.map(p =>
        p.paymentId === paymentId ? { ...p, status: originalStatus } : p
      )
    );
    setEditingPaymentId(null);
  };

  const handleConfirmClick = async (updatedPayment: GetPaymentListResponseDto) => {

    const dto: ConfirmPaymentRequestDto = {
      status: updatedPayment.status
    }

    const response = await confirmPayment(updatedPayment.paymentId, dto);
    try {
      if (response.code === "SU") {
        setPayments((prevPayments) =>
          prevPayments.map((payment) =>
            payment.paymentId === updatedPayment.paymentId
              ? {
                ...payment,
                status: updatedPayment.status
              }
              : payment
          )
        )
      }
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }

    setEditingPaymentId(null);
  };

  return (
    <>
      <Header />
      <AdminSidebar />
      <div css={style.containerStyle}>
        <table css={style.tableStyle}>
          <thead>
            <tr css={style.firtTrStyle}>
              <th css={style.thStyle}>결제 번호</th>
              <th css={style.thStyle}>이름</th>
              <th css={style.thStyle}>번호</th>
              <th css={style.thStyle}>결제 방법</th>
              <th css={style.thStyle}>결제 금액</th>
              <th css={style.thStyle}>수강권 개수</th>
              <th css={style.thStyle}>결제 날짜</th>
              <th css={style.thStyle}>결제 상태</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => {
              const isEditing = editingPaymentId === payment.paymentId;

              return (
                <tr key={payment.paymentId} css={style.trStyle}>
                  <td css={style.tdStyle}>{payment.paymentId}</td>
                  <td css={style.tdStyle}>{payment.name}</td>
                  <td css={style.tdStyle}>{payment.phone}</td>
                  <td css={style.tdStyle}>{payment.method}</td>
                  <td css={style.tdStyle}>₩ {payment.amount}</td>
                  <td css={style.tdStyle}>{payment.couponCount}</td>
                  <td css={style.tdStyle}>{payment.createdAt}</td>
                  <td css={style.tdStyle}>
                    <select
                      value={payment.status}
                      disabled={!isEditing}
                      onChange={(e) =>
                        handleStatusChange(payment.paymentId, e.target.value)
                      }
                    >
                      <option value="PENDING">대기</option>
                      <option value="SUCCESS">승인</option>
                      <option value="FAILED">실패</option>
                      <option value="CANCELLED">취소</option>
                    </select>

                    {isEditing ? (
                      <>
                        <button onClick={() => handleConfirmClick(payment)}>확인</button>
                        <button onClick={() => handleCancelClick(payment.paymentId)}>취소</button>
                      </>
                    ) : (
                      <button onClick={() => handleEditClick(payment.paymentId, payment.status)}>수정</button>
                    )}
                  </td>
                </tr>
              );
            })}

          </tbody>
        </table>
      </div>
    </>
  );
}

export default PaymentConfirm;