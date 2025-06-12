import React, {useState} from 'react';
import './register_modal.scss';
import LoginModal from '../LoginModal/login_modal';

const RegisterModal = ({ show, onClose, onSwitchToLogin  }) => {
  if (!show) return null;

  return (
 <div className="modal_overlay">
  <div className="modal_container">
    <h2>Đăng ký</h2>
    <input type="text" placeholder="Email" />
    <input type="text" placeholder="Username" />
    <input type="password" placeholder="Mật khẩu" />
    <button className="login_btn">Đăng ký</button>
    <div className='btn_redirect'>
        <a className='btn_redirect_login' onClick={onSwitchToLogin}>Đăng nhập</a>
    </div>
    <button className="close_btn" onClick={onClose}>Đóng</button>
  </div>
</div>
  );
};

export default RegisterModal;
