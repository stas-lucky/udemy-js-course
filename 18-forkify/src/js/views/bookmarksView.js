import icons from "url:../../img/icons.svg"; // Parcel 2
import View from "./View";
import previewView from "./previewView.js";

class BookmarksView extends View {
  _parentElement = document.querySelector(".bookmarks__list");
  _message = "Message";
  _errorMessage = "No bookmarkes yet";

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  _generateMarkup() {
    return this._data.map((b) => previewView.render(b, false)).join("");
  }
}

export default new BookmarksView();
