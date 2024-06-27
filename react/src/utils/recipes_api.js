export async function saveRecipe(array) {
    fetch(`/api/recipes/save`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(array),
    })
  }
  

export async function getRecipesForUser(userId) {
    fetch(`/`)
}