import React from "react";
import './IntroProcedure.scss'; 

const IntroProcedure = () => {
  return (
    <div className="intro-container">
      <ol className="intro-list">
        <li><strong>Đăng nhập</strong> vào hệ thống bằng số căn cước công dân.</li>
        <li>Chọn mục <strong>"Tra cứu vi phạm"</strong> trên thanh menu.</li>
        <li>
          Xem danh sách vi phạm bao gồm:
          <ul className="intro-sublist">
            <li>Ngày vi phạm</li>
            <li>Lỗi vi phạm</li>
            <li>Trạng thái xử lý</li>
            <li>Hình ảnh kèm theo</li>
          </ul>
        </li>
        <li>Nhấn nút <strong>"Xem ảnh"</strong> để kiểm tra bằng chứng cụ thể.</li>
        <li>Nếu có sai sót, sử dụng chức năng <strong>"Khiếu nại"</strong> để phản hồi.</li>
        <li>Theo dõi <strong>"Lịch sử nộp phạt"</strong> và cập nhật thông tin nếu cần.</li>
      </ol>

      <p className="intro-note">
        Mọi dữ liệu trong hệ thống chỉ mang tính chất minh họa cho dự án cá nhân.
      </p>
    </div>
  );
};

export default IntroProcedure;
