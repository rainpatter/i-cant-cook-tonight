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
    title TEXT,
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
    metric_amount FLOAT,
    metric_unit_long text,
    original_name text
);

CREATE TABLE recipe_ingredients_join(
    id SERIAL PRIMARY KEY,
    recipe_id INT,
    ingredient_id INT,
    FOREIGN KEY (recipe_id) REFERENCES saved_recipes(id),
    FOREIGN KEY (ingredient_id) REFERENCES recipe_ingredients(id)
);

CREATE TABLE recipe_steps(
    id SERIAL PRIMARY KEY,
    step_number int,
    step_content TEXT
);

CREATE TABLE recipe_steps_join(
    id SERIAL PRIMARY KEY,
    recipe_id INT,
    step_id INT,
    FOREIGN KEY (recipe_id) REFERENCES saved_recipes(id),
    FOREIGN KEY (step_id) REFERENCES recipe_steps(id)

);

