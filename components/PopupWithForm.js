import Popup from "./Popup.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";
export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
  }
  _getInputValues() {
    this._inputList = this._popupElement.querySelectorAll(".popup__input");
    const formValues = {};
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    const date = new Date(formValues.date);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    formValues.date = date;
    const id = uuidv4();
    return { ...formValues, id, completed: false };
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const data = this._getInputValues();
      this._handleFormSubmit(data);
      this.close();
    });
  }
}
