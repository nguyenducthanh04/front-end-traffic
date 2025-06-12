import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LayoutHome from '../layouts/Home/home';
import Home from '../pages/Home/home';
import ComplaintFormLayout from '../layouts/ComplaintForm/complaint_form';
import ComplaintForm from '../components/ComplaintForm/complaint_form';
import UserInfoLayout from '../layouts/UserInfo/user_info';
import UserInfo from '../components/UserInfo/user_info';
import PaymentHistoryLayout from '../layouts/PaymentHistory/payment_history';
import PaymentHistory from '../components/PaymentHistory/payment_history';
const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LayoutHome>
            <Home />
          </LayoutHome>
        }
      />
      <Route
        path="/khieu-nai"
        element={
          <ComplaintFormLayout>
            <ComplaintForm/>
          </ComplaintFormLayout>
        }
      />
      <Route
        path="/tra-cuu-vi-pham"
        element={
          <UserInfoLayout>
            <UserInfo/>
          </UserInfoLayout>
        }
      />
      <Route
        path="/lich-su-nop-phat"
        element={
          <PaymentHistoryLayout>
            <PaymentHistory/>
          </PaymentHistoryLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
