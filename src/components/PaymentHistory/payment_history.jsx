import React from 'react';
import './payment_history.scss';

const PaymentHistory = () => {
  const data = [
    { date: '1/5', error: 'Vượt đèn đỏ', amount: '300.000đ', status: 'Đã nộp', method: 'Chuyển khoản' },
    { date: '10/4', error: 'Không đội mũ bảo hiểm', amount: '150.000đ', status: 'Đã nộp', method: 'Tiền mặt' },
  ];

  return (
    <div className="payment-history">
      <h2>Lịch sử nộp phạt</h2>
      <table>
        <thead>
          <tr>
            <th>Ngày</th>
            <th>Lỗi</th>
            <th>Số tiền</th>
            <th>Trạng thái</th>
            <th>Hình thức</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.error}</td>
              <td>{entry.amount}</td>
              <td className="paid">{entry.status}</td>
              <td>{entry.method}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
