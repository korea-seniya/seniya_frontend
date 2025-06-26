/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';

import * as style from './PaymentConfirm.style';
import Header from '../../../components/header';
import AdminSidebar from '../../../components/admin/AdminSidebar';
import { confirmPayment, getPaymentList } from '../../../apis/payment/payment';
import type { GetPaymentListResponseDto } from '../../../dtos/payment/response/GetPaymentList.response.dto';
import type { ConfirmPaymentRequestDto } from '../../../dtos/payment/request/ConfirmPayment.request.dto';

function PaymentConfirm() {
  const [payments, setPayments] = useState<GetPaymentListResponseDto[]>([]);
  const [editingPaymentId, setEditingPaymentId] = useState<number | null>(null);
  const [originalStatus, setOriginalStatus] = useState<string>("");
  const [editedStatusMap, setEditedStatusMap] = useState<{ [key: number]: string }>({});

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
    setEditedStatusMap(prev => ({ ...prev, [paymentId]: newStatus }));
  };

  const handleEditClick = (paymentId: number, currentStatus: string) => {
    setOriginalStatus(currentStatus);
    setEditedStatusMap(prev => ({ ...prev, [paymentId]: currentStatus }));
    setEditingPaymentId(paymentId);
  };

  const handleCancelClick = (paymentId: number) => {
    setEditedStatusMap(prev => {
      const updated = { ...prev };
      delete updated[paymentId];
      return updated;
    });
    setEditingPaymentId(null);
  };

  const handleConfirmClick = async (paymentId: number) => {
    const newStatus = editedStatusMap[paymentId];
    const dto: ConfirmPaymentRequestDto = { status: newStatus };

    try {
      const response = await confirmPayment(paymentId, dto);
      if (response.code === "SU") {
        setPayments(prev =>
          prev.map(p =>
            p.paymentId === paymentId ? { ...p, status: newStatus } : p
          )
        );
        alert('결제 상태 변경 완료');
      }
    } catch (err) {
      console.log(err);
    }

    setEditedStatusMap(prev => {
      const updated = { ...prev };
      delete updated[paymentId];
      return updated;
    });
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
              const isConfirmedSuccess = payment.status === "SUCCESS";
              const tempStatus = editedStatusMap[payment.paymentId] ?? payment.status;

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
                      value={tempStatus}
                      disabled={!isEditing || isConfirmedSuccess}
                      onChange={(e) =>
                        handleStatusChange(payment.paymentId, e.target.value)
                      }
                    >
                      <option value="PENDING">대기</option>
                      <option value="SUCCESS">승인</option>
                      <option value="FAILED">실패</option>
                      <option value="CANCELLED">취소</option>
                    </select>

                    {isConfirmedSuccess && !isEditing ? (
                      <span> (수정 불가)</span>
                    ) : isEditing ? (
                      <>
                        <button onClick={() => handleConfirmClick(payment.paymentId)}>확인</button>
                        <button onClick={() => handleCancelClick(payment.paymentId)}>취소</button>
                      </>
                    ) : (
                      <button
                        onClick={() => handleEditClick(payment.paymentId, payment.status)}
                        disabled={isConfirmedSuccess}
                      >
                        수정
                      </button>
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
