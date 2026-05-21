import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './ModalPortal.css';

function Modal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  const modalRoot = document.getElementById('modal-root');
  console.log('modal-root найден?', !!modalRoot);
  if (!modalRoot) {
    console.error('Элемент #modal-root не найден в index.html!');
    return null;
  }

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(event) => event.stopPropagation()}>
        <div className="modal-inner">{children}</div>
      </div>
    </div>,
    modalRoot,
  );
}

export function ModalPortal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="wrapper">
      <button onClick={() => setIsOpen(true)} className="button">
        Открыть модальное окно
      </button>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <h3 className="modal-title">Модальное окно</h3>
          <p className="modal-text">Рендерится в modal-root, а не внутри основного DOM-дерева.</p>
          <div className="modal-buttons">
            <button onClick={() => setIsOpen(false)} className="button">
              Закрыть
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
