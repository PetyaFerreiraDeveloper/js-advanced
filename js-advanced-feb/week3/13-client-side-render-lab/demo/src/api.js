import * as request from './request.js';

const baseUrl = 'http://localhost:3030';
const recipesUrl = `${baseUrl}/data/recipes`;
const usersUrl = `${baseUrl}/users/login`;


export const getAllRecipes = () => request.get(recipesUrl).then(data => Object.values(data));


export const createRecipe = (recipeData) => {
    return request.post(recipesUrl, recipeData);
};

export const login = (email, password) => {
    return request.post(usersUrl, { email, password })
}