import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logooo.png";
import LoginModal from "../../components/LoginModal/login_modal";
import RegisterModal from "../../components/RegisterModal/register_modal";
import LanguageModal from "../../components/LanguageModal/language_modal";
import { useState } from "react";

function Header() {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [lang, setLang] = useState("vi");

    const toggleModal = () => setShowModal(!showModal);
    const handleSelectLanguage = (lang) => setLang(lang);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className="header_wrapper">
            <header className="header_content">
                <div className="header_logo">
                    <img src={Logo} alt="logo" />
                    <h2>VietNam Traffic</h2>
                </div>

                <div className="mobile_menu">
                         <div className="hamburger" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="icon_menu"/>
                </div>

                <div className={`header_nav_menu ${menuOpen ? "open" : ""}`}>
                    <Link to="/">Trang chủ</Link>
                    <Link to="/tra-cuu">Tra cứu vi phạm</Link>
                    <Link to="/thong-ke">Thống kê vi phạm</Link>
                    <Link to="/lich-su">Lịch sử nộp phạt</Link>
                    <div className="header_btn_change_language">
                        <button className="btn_change_language" onClick={toggleModal}>
                            {lang === "vi" ? "Tiếng Việt" : "English"} <FontAwesomeIcon icon={faCaretDown} className="icon_change" />
                        </button>
                    </div>
                    <div className="header_btn_login">
                        <button className="btn_login" onClick={() => setShowLogin(true)}>Đăng nhập</button>
                    </div>
                </div>
                </div>
                  <div className="header_btn">
                       <div className="header_btn_change_language" onClick={toggleModal}>
                         <button className="btn_change_language">{lang === "vi" ? "Tiếng Việt" : "English"}   
                             <FontAwesomeIcon icon={faCaretDown} className="icon_change"/>
                         </button>
                     </div>
                     <div className="header_btn_login">
                         <button className="btn_login" onClick={() => setShowLogin(true)}>Đăng nhập</button>
                     </div>
                 </div>
                 <LoginModal show={showLogin} onClose={() => setShowLogin(false)} onSwitchToRegister={() => { setShowLogin(false); setShowRegister(true); }}/>
                 <RegisterModal show={showRegister} onClose={() => setShowRegister(false)} onSwitchToLogin={() => { setShowRegister(false); setShowLogin(true); }}/>
                 <LanguageModal
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                    onSelectLanguage={handleSelectLanguage}
                 />
            </header>
        </div>
    );
}

export default Header;
