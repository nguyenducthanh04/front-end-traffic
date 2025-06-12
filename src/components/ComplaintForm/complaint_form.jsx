import React, { useState } from 'react';
import './complaint_form.scss';

function ComplaintForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        cccd: '',
        phone: '',
        email: '',
        violationId: '',
        time: '',
        location: '',
        content: '',
        file: null,
        agree: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý gửi form ở đây
        console.log(formData);
        alert("Đã gửi khiếu nại!");
    };

    return (
        <form className="complaint-form" onSubmit={handleSubmit}>
            <h2>Gửi khiếu nại vi phạm</h2>
            <div className="form-group">
                <label>Họ và tên</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
            </div>

            <div className="form-group">
                <label>Số CCCD/CMND</label>
                <input type="text" name="cccd" value={formData.cccd} onChange={handleChange} required />
            </div>

            <div className="form-group">
                <label>Số điện thoại</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>

            <div className="form-group">
                <label>Email (nếu có)</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>

            <div className="form-group">
                <label>Mã vi phạm / Biên bản</label>
                <input type="text" name="violationId" value={formData.violationId} onChange={handleChange} required />
            </div>

            <div className="form-group">
                <label>Thời gian vi phạm</label>
                <input type="datetime-local" name="time" value={formData.time} onChange={handleChange} required />
            </div>

            <div className="form-group">
                <label>Địa điểm vi phạm</label>
                <input type="text" name="location" value={formData.location} onChange={handleChange} />
            </div>

            <div className="form-group">
                <label>Nội dung khiếu nại</label>
                <textarea name="content" value={formData.content} onChange={handleChange} rows="4" required />
            </div>

            <div className="form-group">
                <label>File đính kèm</label>
                <input type="file" name="file" accept=".jpg,.png,.pdf" onChange={handleChange} />
            </div>

            <div className="form-group checkbox">
                <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} required />
                <label>Tôi cam kết thông tin là đúng sự thật</label>
            </div>

            <button type="submit" className="submit-btn">Gửi khiếu nại</button>
        </form>
    );
}

export default ComplaintForm;
