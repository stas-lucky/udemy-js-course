//import { set } from "core-js/core/dict";
import "regenerator-runtime/runtime";
import { API_URL, KEY, RES_PER_PAGE } from "./config";
//import { getJSON, sendJSON } from "./helpers";
import { AJAX } from "./helpers";

export const state = {
  recipe: {},
  search: {
    query: "",
    results: [],
    resultsPerPage: RES_PER_PAGE,
    page: 1,
  },
  bookmarks: [],
};

export const loadRecipe = async function (id) {
  try {
    // key=febf3200-d721-4b6f-8128-222090872beb
    const data = await AJAX(`${API_URL}${id}?key=${KEY}`);
    state.recipe = createRecipeObject(data);
    if (state.bookmarks.some((b) => b.id === id)) {
      state.recipe.bookmarked = true;
    } else {
      state.recipe.bookmarked = false;
    }

    console.log(state.recipe);
  } catch (err) {
    console.error(`ERROR: ${err}`);
    throw err;
  }
};

const createRecipeObject = function (data) {
  const { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    ...(recipe.key && { key: recipe.key }),
  };
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);
    //console.log(data);

    state.search.results = data.data.recipes.map((rec) => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
        ...(rec.key && { key: rec.key }),
      };
    });
    state.search.page = 1; // Start again from page 1
  } catch (err) {
    console.error(`ERROR: ${err}`);
    throw err;
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;
  state.search.page = page;
  return state.search.results.slice(start, end);
};

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach((ing) => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });

  state.recipe.servings = newServings;
};

const presistBookmarks = function () {
  localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
  state.bookmarks.push(recipe);
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
  presistBookmarks();
};

export const deleteBookmark = function (id) {
  const index = state.bookmarks.findIndex((el) => el.id === id);
  state.bookmarks.splice(index, 1);
  // NOT bookmarked anymore
  if (id === state.recipe.id) state.recipe.bookmarked = false;
  presistBookmarks();
};

const init = function () {
  const storage = localStorage.getItem("bookmarks");
  if (storage) state.bookmarks = JSON.parse(storage);
};

init();

const clearBookmarks = function () {
  // Only for debugging
  localStorage.clear("bookmarks");
};

export const uploadRecipe = async function (newRecipe) {
  //console.log(newRecipe);
  console.log("uploadRecipe", Object.entries(newRecipe));
  const ingredients = Object.entries(newRecipe)
    .filter((entry) => {
      return entry[0].startsWith("ingredient") && entry[1] !== "";
    })
    .map((ing) => {
      //const ingArr = ing[1].replaceAll(" ", "").split(",");
      const ingArr = ing[1].split(",").map((el) => el.trim());
      if (ingArr.length !== 3)
        throw new Error("Wrong ingredient formant. Use correct format");
      var [quantity, unit, description] = ingArr;
      return {
        quantity: quantity ? +quantity : null,
        unit,
        description,
      };
    });

  const recipe = {
    title: newRecipe.title,
    source_url: newRecipe.sourceUrl,
    publisher: newRecipe.publisher,
    image_url: newRecipe.image,
    servings: newRecipe.servings,
    cooking_time: newRecipe.cookingTime,
    ingredients: ingredients,
  };

  const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);
  state.recipe = createRecipeObject(data);
  addBookmark(state.recipe);

  console.log("Ingredients", data);
};

/*
cookingTime: "23"
image: "TEST"
ingredient-1: "0.5,kg,Rice"
ingredient-2: "1,,Avocado"
ingredient-3: ",,salt"
ingredient-4: ""
ingredient-5: ""
ingredient-6: ""
publisher: "TEST"
servings: "23"
sourceUrl: "TEST"
title: "TEST"


{
            "publisher": "Closet Cooking",
            "source_url": "http://feedproxy.google.com/~r/ClosetCooking/~3/xvkmVGnlXNQ/cauliflower-pizza-crust-with-bbq.html",
            "image_url": "http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg",
            "title": "Cauliflower Pizza Crust (with BBQ Chicken Pizza)",
            "servings": 4,
            "cooking_time": 75,
            "id": "5ed6604591c37cdc054bcd09"
            "ingredients": [
                {
                    "quantity": 1,
                    "unit": "",
                    "description": "medium head cauliflower cut into florets"
                },
                {
                    "quantity": 1,
                    "unit": "",
                    "description": "egg"
                },
                {
                    "quantity": 0.5,
                    "unit": "cup",
                    "description": "mozzarella shredded"
                },
                {
                    "quantity": 1,
                    "unit": "tsp",
                    "description": "oregano or italian seasoning blend"
                },
                {
                    "quantity": null,
                    "unit": "",
                    "description": "Salt and pepper to taste"
                },
                {
                    "quantity": 1,
                    "unit": "cup",
                    "description": "chicken cooked and shredded"
                },
                {
                    "quantity": 0.5,
                    "unit": "cup",
                    "description": "barbecue sauce"
                },
                {
                    "quantity": 0.75,
                    "unit": "cup",
                    "description": "mozzarella shredded"
                },
                {
                    "quantity": null,
                    "unit": "",
                    "description": "Red onion to taste thinly sliced"
                },
                {
                    "quantity": null,
                    "unit": "",
                    "description": "Fresh cilantro to taste"
                }
            ],

        }
        
*/

// clearBookmarks();

// console.log(state.bookmarks);

//loadSearchResults("pizza");

/*
id: "5ed6604591c37cdc054bcd09"
image: "http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg"
publisher: "Closet Cooking"
title: "Cauliflower Pizza Crust (with BBQ Chicken Pizza)"
*/ files: exclude;
