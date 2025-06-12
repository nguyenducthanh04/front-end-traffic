import React from 'react';
import './login_modal.scss';
const LoginModal = ({ show, onClose, onSwitchToRegister  }) => {
  if (!show) return null;
  return (
 <div className="modal_overlay">
  <div className="modal_container">
    <h2>Đăng nhập</h2>
    <input type="text" placeholder="Email hoặc tên đăng nhập" />
    <input type="password" placeholder="Mật khẩu" />
    <button className="login_btn">Đăng nhập</button>
    <div className='btn_redirect'>
        <a href="#" className="forgot_link">Quên mật khẩu?</a>
        <a className='btn_redirect_register' onClick={onSwitchToRegister}>Đăng ký</a>
    </div>
    <button className="close_btn" onClick={onClose}>Đóng</button>
  </div>
</div>
  );
};

export default LoginModal;
