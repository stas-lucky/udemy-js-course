import icons from "url:../../img/icons.svg"; // Parcel 2
import View from "./View";
import previewView from "./previewView.js";

class ResultsView extends View {
  _parentElement = document.querySelector(".results");
  _message = "Message";
  _errorMessage = "No recipes found. Please try another one!";

  _generateMarkup() {
    return this._data.map((b) => previewView.render(b, false)).join("");
  }
}

export default new ResultsView();
