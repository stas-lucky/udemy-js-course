import icons from "url:../../img/icons.svg"; // Parcel 2
import View from "./View";

class ResultsView extends View {
  _parentElement = document.querySelector(".results");
  _message = "Message";
  _errorMessage = "No recipes found. Please try another one!";

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join("");
  }

  _generateMarkupPreview(elm) {
    /*
    id: "5ed6604591c37cdc054bcd09"
    image: "http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg"
    publisher: "Closet Cooking"
    title: "Cauliflower Pizza Crust (with BBQ Chicken Pizza)"
    */
    return `
    <li class="preview">
      <a class="preview__link preview__link--active" href="#${elm.id}">
        <figure class="preview__fig">
          <img src="${elm.image}" alt="${elm.title}" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${elm.title}</h4>
          <p class="preview__publisher">${elm.publisher}</p>
          <div class="preview__user-generated">
            <svg>
              <use href="${icons}#icon-user"></use>
            </svg>
          </div>
        </div>
      </a>
    </li>
    `;
  }
}

export default new ResultsView();
