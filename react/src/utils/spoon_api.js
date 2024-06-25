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

export async function analyseQuery() {
  let searchString = "soy sauce with rice and egg";

  let searchData = {
    searchIngredients: searchString.split(" ").join("+"),
  };

  let res = await fetch("ingredients/analyse", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(searchData),
  });

  let resIngredients = await res.json();

  return resIngredients;
}
