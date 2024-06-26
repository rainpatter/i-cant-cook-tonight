export async function saveRecipe(array) {
    fetch(`/api/recipes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(array),
    })
  }
  