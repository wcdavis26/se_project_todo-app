export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }
  open() {
    this._popupElement.classList.add("popup_visible");
  }
  close() {
    this._popupElement.classList.remove("popup_visible");
    document.removeEventListener("keydown", this._handleEscapeClose);
  }
  _handleEscapeClose() {
    document.addEventListener("keydown", (evt) => {
      if (
        evt.key === "Escape" &&
        this._popupElement.classList.contains("popup_visible")
      ) {
        this.close();
      }
    });
  }
  setEventListeners() {
    this._popupElement.addEventListener("click", (evt) => {
      if (
        evt.target.classList.contains("popup__close") ||
        evt.target === this._popupElement
      ) {
        this.close();
      }
    });
    this._handleEscapeClose();
  }
}
