export async function getIngredients(array) {
  let data = {
    ingredients: array,
  };

  let res = await fetch(`/ingredients/find`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  let recipes = await res.json();

  return recipes;
}

export async function analyseQuery(str) {
  let searchData = {
    searchIngredients: str.split("/,\s*/").join("+"),
  };

  let res = await fetch("ingredients/analyse", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(searchData),
  });

  let resIngredients = await res.json();

  return resIngredients;
}
