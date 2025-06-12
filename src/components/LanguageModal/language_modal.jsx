import React from "react";
import "./language_modal.scss";

const LanguageModal = ({ isOpen, onClose, onSelectLanguage }) => {
  if (!isOpen) return null;

  const handleSelect = (lang) => {
    onSelectLanguage(lang);
    onClose();
  };

  return (
    <div className="modal_overlay" onClick={onClose}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <h3>Chọn ngôn ngữ</h3>
        <ul>
          <li onClick={() => handleSelect("vi")}>Tiếng Việt</li>
          <li onClick={() => handleSelect("en")}>English</li>
        </ul>
      </div>
    </div>
  );
};

export default LanguageModal;
