import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Giới thiệu</h3>
          <p>Đây là dự án minh họa về hệ thống xử lý vi phạm giao thông.</p>
        </div>
        <div className="footer-section">
          <h3>Liên hệ</h3>
          <p>Email: dducthanh04@gmail.com</p>
          <p>Điện thoại: 058*******</p>
        </div>
        <div className="footer-section">
          <h3>Liên kết</h3>
          <ul>
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/about">Giới thiệu</a></li>
            <li><a href="/contact">Liên hệ</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Giao Thông Việt. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
