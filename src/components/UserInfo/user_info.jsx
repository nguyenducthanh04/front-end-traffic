import React from "react";
import "./user_info.scss";

function UserInfo() {
    return (
        <div className="user-wrapper">
            <div className="user-info">
                <h3>Thông tin người dân</h3>
                <p><strong>Họ tên</strong> &nbsp; Nguyễn Văn An</p>
                <p><strong>CCCD</strong> &nbsp;&nbsp;&nbsp; 012345678901</p>
            </div>

            <div className="violation-table">
                <h3>BẢNG VI PHẠM GẦN ĐÂY</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Ngày</th>
                            <th>Lỗi</th>
                            <th>Trạng thái</th>
                            <th>Xem ảnh</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1/5</td>
                            <td>Vượt đèn đỏ</td>
                            <td>Chưa nộp</td>
                            <td><a href="/">Xem</a></td>
                        </tr>
                    </tbody>
                </table>
                <div className="actions">
                    <a href="/">Khiếu nại</a>
                    <a href="/">Lịch sử nộp phạt</a>
                    <a href="/">Cập nhật</a>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;
