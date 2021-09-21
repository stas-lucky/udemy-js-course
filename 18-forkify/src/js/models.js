//import { set } from "core-js/core/dict";
import "regenerator-runtime/runtime";
import { API_URL, RES_PER_PAGE } from "./config";
import { getJSON } from "./helpers";

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
    const data = await getJSON(`${API_URL}${id}`);

    let { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
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

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}`);
    //console.log(data);

    state.search.results = data.data.recipes.map((rec) => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
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
// clearBookmarks();

// console.log(state.bookmarks);

//loadSearchResults("pizza");

/*
id: "5ed6604591c37cdc054bcd09"
image: "http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg"
publisher: "Closet Cooking"
title: "Cauliflower Pizza Crust (with BBQ Chicken Pizza)"
*/ files: exclude;
