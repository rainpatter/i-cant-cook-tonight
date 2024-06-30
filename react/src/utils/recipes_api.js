export async function saveRecipe(array) {
  fetch(`/api/recipes/save`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(array),
  });
}

export async function getRecipesForUser(userId) {
  let res = await fetch(`/api/recipes/${userId}`);
  let recipes = await res.json();

  return recipes;
}
