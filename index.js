const API_KEY ="9832484bf85445ea9f9917d1237c37a5";
  
recipeListEl= document.getElementById("recipe-list");

     function displayRecipes(recipes) {
             recipeListEl.innerHTML = "";
             recipes.forEach((recipe) => {
                const recipeItemEl = document.createElement("li");     
                     recipeItemEl.classList.add("recipe-item");
             
                    recipeImageEl = document.createElement("img");
                    recipeImageEl.src = recipe.image;
                    recipeImageEl.alt ="recipe image";


                   recipeTitleEl = document.createElement("h4");
                   recipeTitleEl.innerHTML = recipe.title;

             
                   recipeIngredientsEl = document.createElement("p");
                    recipeIngredientsEl.innerHTML=`
                    <strong>Ingredients:</strong> ${recipe.extendedIngredients
                      .map((ingredient) => ingredient.original)
                      .join(",  ")}
                  `;
                     
                    recipeLinkEl= document.createElement("a");
                    recipeLinkEl.href=recipe.sourceUrl;
                    recipeLinkEl.innerHTML= "view recipe";

                    recipeItemEl.appendChild(recipeImageEl);
                    recipeItemEl.appendChild(recipeTitleEl);
                    recipeItemEl.appendChild(recipeIngredientsEl);
                    recipeListEl.appendChild(recipeItemEl);
                    recipeItemEl.appendChild(recipeLinkEl);
                  });

          };
        
async function getRecipes(){
const response = await fetch(`https://api.spoonacular.com/recipes/random?number=20&apiKey=${API_KEY}`)
const data = await response.json()

  //console.log(recipe);
  return  data.recipes
}
async function init() {
      const recipes = await getRecipes();
      //console.log(recipes);
      //console.log(recipes);

       displayRecipes(recipes)
     
}
init();


     

