CREATE DATABASE cant_cook_api;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    username TEXT NOT NULL UNIQUE,
    password_digest TEXT NOT NULL
);

CREATE TABLE saved_recipes(
    id SERIAL PRIMARY KEY,
    user_id int,
    spoonacular_dish_id int,
    image text,
    vegetarian BOOLEAN,
    vegan BOOLEAN,
    gluten_free BOOLEAN,
    ready_in_minutes INT,
    source_url TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE recipe_ingredients(
    id SERIAL PRIMARY KEY,
    recipe_id int,
    metric_amount int,
    metric_unit_long text,
    original_name text,
    FOREIGN KEY (recipe_id) REFERENCES saved_recipes(id),
    FOREIGN KEY (ingredient_id) REFERENCES ingredients(id)
);

CREATE TABLE recipe_steps(
    id SERIAL PRIMARY KEY,
    recipe_id int,
    step_number int,
    step_content TEXT,
    FOREIGN KEY (recipe_id) REFERENCES saved_recipes(id)
);

