import axios from "axios";

//dev
// const instance = axios.create({
//   baseURL: "http://localhost:8000",
// });

//prod
const instance = axios.create({
  baseURL: "https://recipe-react-native-server-production.up.railway.app/",
});

//=======================( GET )===========================

// fetch all recipes
export const getAllRecipes = async () => {
  const response = await instance.get("all-recipes");
  return response.data.recipes;
};

// get recipe by id
export const getRecipeById = async (id: string | string[]) => {
  const response = await instance.get(`recipe/${id}`);
  return response.data.recipe;
};
