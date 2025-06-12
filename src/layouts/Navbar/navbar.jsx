import "./navbar.scss";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div className="navbar_wrapper">
            <div className="navbar_btn">
                <Link className="navbar_btn_redirect" to={"/"}>Trang chủ</Link>
                <Link className="navbar_btn_redirect" to={"/tra-cuu-vi-pham"}>Tra cứu vi phạm</Link>
                <Link className="navbar_btn_redirect" to={"/khieu-nai"}>Khiếu nại</Link>
                <Link className="navbar_btn_redirect" >Thống kê vi phạm</Link>
                <Link className="navbar_btn_redirect" to={"/lich-su-nop-phat"}>Lịch sử nộp phạt</Link>
            </div>
        </div>
    )
}
export default Navbar;