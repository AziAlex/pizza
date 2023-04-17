import React from "react";
import { useDispatch } from "react-redux";
import { deleteAllItems } from "../../../redux/buyPizza/buySlice";

interface typeModal {
  activeModal: boolean;
  setActiveModal: Function;
}

const Modal: React.FC<typeModal> = ({ setActiveModal, activeModal }) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => setActiveModal(false)}
      className={activeModal ? "active-modal modal-block" : "modal-block"}
    >
      <div className="modal">
        <h2>Вы уверны что хотите очстить корзину?</h2>
        <div>
          <button onClick={() => setActiveModal(false)}>НЕТ</button>
          <button
            onClick={() => {
              setActiveModal(false);
              dispatch(deleteAllItems());
            }}
          >
            ДА
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
