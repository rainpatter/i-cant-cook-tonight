--
-- PostgreSQL database dump
--

-- Dumped from database version 14.12 (Ubuntu 14.12-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.12 (Ubuntu 14.12-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: recipe_ingredients; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.recipe_ingredients (
    id integer NOT NULL,
    metric_amount double precision,
    metric_unit_long text,
    original_name text
);


ALTER TABLE public.recipe_ingredients OWNER TO postgres;

--
-- Name: recipe_ingredients_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.recipe_ingredients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.recipe_ingredients_id_seq OWNER TO postgres;

--
-- Name: recipe_ingredients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.recipe_ingredients_id_seq OWNED BY public.recipe_ingredients.id;


--
-- Name: recipe_ingredients_join; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.recipe_ingredients_join (
    id integer NOT NULL,
    recipe_id integer,
    ingredient_id integer
);


ALTER TABLE public.recipe_ingredients_join OWNER TO postgres;

--
-- Name: recipe_ingredients_join_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.recipe_ingredients_join_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.recipe_ingredients_join_id_seq OWNER TO postgres;

--
-- Name: recipe_ingredients_join_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.recipe_ingredients_join_id_seq OWNED BY public.recipe_ingredients_join.id;


--
-- Name: recipe_steps; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.recipe_steps (
    id integer NOT NULL,
    step_number integer,
    step_content text
);


ALTER TABLE public.recipe_steps OWNER TO postgres;

--
-- Name: recipe_steps_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.recipe_steps_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.recipe_steps_id_seq OWNER TO postgres;

--
-- Name: recipe_steps_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.recipe_steps_id_seq OWNED BY public.recipe_steps.id;


--
-- Name: recipe_steps_join; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.recipe_steps_join (
    id integer NOT NULL,
    recipe_id integer,
    step_id integer
);


ALTER TABLE public.recipe_steps_join OWNER TO postgres;

--
-- Name: recipe_steps_join_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.recipe_steps_join_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.recipe_steps_join_id_seq OWNER TO postgres;

--
-- Name: recipe_steps_join_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.recipe_steps_join_id_seq OWNED BY public.recipe_steps_join.id;


--
-- Name: saved_recipes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.saved_recipes (
    id integer NOT NULL,
    user_id integer,
    spoonacular_dish_id integer,
    title text,
    image text,
    vegetarian boolean,
    vegan boolean,
    gluten_free boolean,
    ready_in_minutes integer,
    source_url text
);


ALTER TABLE public.saved_recipes OWNER TO postgres;

--
-- Name: saved_recipes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.saved_recipes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.saved_recipes_id_seq OWNER TO postgres;

--
-- Name: saved_recipes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.saved_recipes_id_seq OWNED BY public.saved_recipes.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email text NOT NULL,
    username text NOT NULL,
    password_digest text NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: recipe_ingredients id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recipe_ingredients ALTER COLUMN id SET DEFAULT nextval('public.recipe_ingredients_id_seq'::regclass);


--
-- Name: recipe_ingredients_join id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recipe_ingredients_join ALTER COLUMN id SET DEFAULT nextval('public.recipe_ingredients_join_id_seq'::regclass);


--
-- Name: recipe_steps id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recipe_steps ALTER COLUMN id SET DEFAULT nextval('public.recipe_steps_id_seq'::regclass);


--
-- Name: recipe_steps_join id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recipe_steps_join ALTER COLUMN id SET DEFAULT nextval('public.recipe_steps_join_id_seq'::regclass);


--
-- Name: saved_recipes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.saved_recipes ALTER COLUMN id SET DEFAULT nextval('public.saved_recipes_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: recipe_ingredients; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.recipe_ingredients (id, metric_amount, metric_unit_long, original_name) FROM stdin;
5	226.796	grams	ziti (or other shape pasta)
6	453.592	grams	ricotta cheese
7	336	grams	mozzarella cheese , grated
8	735	milliliters	spaghetti sauce
9	50	grams	parmesan cheese , grated
10	180	grams	bow tie pasta
11	50	grams	Parmigiano Reggiano
12	5	servings	Kraft Recipe Makers Chicken Bruschetta Pasta
13	680.389	grams	pork chops
14	226.796	grams	mild Italian sausage
15	1	inch	package Nidi capellini nest (store-bought dried capellini, shaped like little nest the package)
16	680.389	grams	marinara sauce
17	1	container	fresh marinated mozzarella balls
18	4	servings	Fresh shredded basil
19	4	servings	Fresh shredded basil
20	453.592	grams	bulk sausage
21	108	milliliters	bread crumbs or corn meal
22	9		eggs
23	2		Japanese cucumber, cut into long sticks
24	4	inches sheets	inches sheets of nori (dried seaweed), cut half
25	740	grams	sushi rice
26	2		Japanese cucumber, cut into long sticks
27	4	inches sheets	inches sheets of nori (dried seaweed), cut half
28	740	grams	sushi rice
29	2		Japanese cucumber, cut into long sticks
30	4	inches sheets	inches sheets of nori (dried seaweed), cut half
31	740	grams	sushi rice
32	2		Japanese cucumber, cut into long sticks
33	4	inches sheets	inches sheets of nori (dried seaweed), cut half
34	740	grams	sushi rice
35	2		Japanese cucumber, cut into long sticks
36	4	inches sheets	inches sheets of nori (dried seaweed), cut half
37	740	grams	sushi rice
38	2		Japanese cucumber, cut into long sticks
39	4	inches sheets	inches sheets of nori (dried seaweed), cut half
40	740	grams	sushi rice
41	2		Japanese cucumber, cut into long sticks
42	4	inches sheets	inches sheets of nori (dried seaweed), cut half
43	740	grams	sushi rice
44	2		Japanese cucumber, cut into long sticks
45	4	inches sheets	inches sheets of nori (dried seaweed), cut half
46	740	grams	sushi rice
47	2		Japanese cucumber, cut into long sticks
48	4	inches sheets	inches sheets of nori (dried seaweed), cut half
49	740	grams	sushi rice
50	1		coffee spoon of your best Balsamic vinegar
51	3	slices	fat strawberries, cleaned, green stuff cut out & cut up thicker slices
52	1		thicker slice of bread, I prefer spelt bread or sourdough br
53	4	servings	a bit of minarine or butter ( unsalted )
54	4	servings	a bit of minarine or butter ( unsalted )
\.


--
-- Data for Name: recipe_ingredients_join; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.recipe_ingredients_join (id, recipe_id, ingredient_id) FROM stdin;
6	2	5
7	2	6
8	2	7
9	2	8
10	2	9
11	3	10
12	3	11
13	3	12
14	3	13
15	4	14
16	4	15
17	4	16
18	4	17
19	4	18
20	4	19
21	5	20
22	5	21
23	5	22
24	6	23
25	6	24
26	6	25
27	7	26
28	7	27
29	7	28
30	8	29
31	8	30
32	8	31
33	9	32
34	9	33
35	9	34
36	10	35
37	10	36
38	10	37
39	11	38
40	11	39
41	11	40
42	12	41
43	12	42
44	12	43
45	13	44
46	13	45
47	13	46
48	14	47
49	14	48
50	14	49
51	15	50
52	15	51
53	15	52
54	15	53
55	15	54
\.


--
-- Data for Name: recipe_steps; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.recipe_steps (id, step_number, step_content) FROM stdin;
2	1	Preheat oven to 35
3	2	Boil ziti or other pasta, i.e. rigatoni, penne, farfalle, rotini, following package directions, drain and place in a large bowl.
4	3	To ricotta, add salt and pepper (about 1tsp each), dried parsley and blend.
5	4	Mix all the ricotta cheese and half of the mozzarella with the ziti.
6	5	Spray a 13x9 pan with Pam.
7	6	Cover the bottom half of the pan with about half the sauce.
8	7	Put the ziti mixture on top of sauce.
9	8	Pour remaining sauce on top of ziti.
10	9	Sprinkle with the parmesan cheese.
11	10	Top with the remaining mozzarella cheese.
12	11	Bake for 20-30 minutes until cheese is melted and it is lightly golden.
13	1	wash and rinse pork chops and place into the skillet.cut them into bite sized pieces and add half of the Basil Garlic simmer sauce.boil your water and start working on cooking your bow-tie pasta.when you have finished with boiling and draining your pasta, add it to the pork along with the rest of the Basil Garlic Simmering Sauce, mixing lightly.Next you will top with the Chunky Bruschetta Finishing Sauce, cover with Parmesan, and cover. Cooking on low heat 2 to 3 minutes or until heated through.
14	1	Brown Italian sausage in skillet. Boil capellini nests according to directions. Meanwhile, combine sausage with marinara in saucepan; heat while boiling capellini. Once meat sauce is hot, spread onto flour plates to cover.
15	2	Place cooked nest on top of sauce.
16	3	Add one dollop of sauce into middle of each nest.
17	4	Add one to three mozzarella balls into each nest. If desire, garnish with basil.
18	1	Divide sausage into 8 portions. On a lightly crumb sprinkled surface, pat out each portion to about 1/8 inch thickness. Wrap 1 sausage portion completely around 1 hard boiled egg, pressing edges together to seal. Repeat with remaining sausage and hard boiled eggs.Dip sausage-covered eggs in 1 beaten egg and then roll in breadcrumbs.Deep fry or place on baking sheet and bake in a 375 degree oven for 20 minutes until lightly browned.
19	1	Put a half-size nori on top of a bamboo mat (makisu).
20	2	Spread a half cup of sushi rice on top.
21	3	Place cucumber sticks lengthwise on the rice.
22	4	Roll up the bamboo mat, pressing forward to shape the sushi into a cylinder. Press the bamboo mat firmly with hands.Unwrap the bamboo mat.
23	5	Cut the sushi roll into bite-size pieces.
24	1	Put a half-size nori on top of a bamboo mat (makisu).
25	2	Spread a half cup of sushi rice on top.
26	3	Place cucumber sticks lengthwise on the rice.
27	4	Roll up the bamboo mat, pressing forward to shape the sushi into a cylinder. Press the bamboo mat firmly with hands.Unwrap the bamboo mat.
28	5	Cut the sushi roll into bite-size pieces.
29	1	Put a half-size nori on top of a bamboo mat (makisu).
30	2	Spread a half cup of sushi rice on top.
31	3	Place cucumber sticks lengthwise on the rice.
32	4	Roll up the bamboo mat, pressing forward to shape the sushi into a cylinder. Press the bamboo mat firmly with hands.Unwrap the bamboo mat.
33	5	Cut the sushi roll into bite-size pieces.
34	1	Put a half-size nori on top of a bamboo mat (makisu).
35	2	Spread a half cup of sushi rice on top.
36	3	Place cucumber sticks lengthwise on the rice.
37	4	Roll up the bamboo mat, pressing forward to shape the sushi into a cylinder. Press the bamboo mat firmly with hands.Unwrap the bamboo mat.
38	5	Cut the sushi roll into bite-size pieces.
39	1	Put a half-size nori on top of a bamboo mat (makisu).
40	2	Spread a half cup of sushi rice on top.
41	3	Place cucumber sticks lengthwise on the rice.
42	4	Roll up the bamboo mat, pressing forward to shape the sushi into a cylinder. Press the bamboo mat firmly with hands.Unwrap the bamboo mat.
43	5	Cut the sushi roll into bite-size pieces.
44	1	Put a half-size nori on top of a bamboo mat (makisu).
45	2	Spread a half cup of sushi rice on top.
46	3	Place cucumber sticks lengthwise on the rice.
47	4	Roll up the bamboo mat, pressing forward to shape the sushi into a cylinder. Press the bamboo mat firmly with hands.Unwrap the bamboo mat.
48	5	Cut the sushi roll into bite-size pieces.
49	1	Put a half-size nori on top of a bamboo mat (makisu).
50	2	Spread a half cup of sushi rice on top.
51	3	Place cucumber sticks lengthwise on the rice.
52	4	Roll up the bamboo mat, pressing forward to shape the sushi into a cylinder. Press the bamboo mat firmly with hands.Unwrap the bamboo mat.
53	5	Cut the sushi roll into bite-size pieces.
54	1	Put a half-size nori on top of a bamboo mat (makisu).
55	2	Spread a half cup of sushi rice on top.
56	3	Place cucumber sticks lengthwise on the rice.
57	4	Roll up the bamboo mat, pressing forward to shape the sushi into a cylinder. Press the bamboo mat firmly with hands.Unwrap the bamboo mat.
58	5	Cut the sushi roll into bite-size pieces.
59	1	Put a half-size nori on top of a bamboo mat (makisu).
60	2	Spread a half cup of sushi rice on top.
61	3	Place cucumber sticks lengthwise on the rice.
62	4	Roll up the bamboo mat, pressing forward to shape the sushi into a cylinder. Press the bamboo mat firmly with hands.Unwrap the bamboo mat.
63	5	Cut the sushi roll into bite-size pieces.
64	1	Take your slice of bread.Smear it with minarine or butter.Smear a thick layer of the sheep's ricotta, evenly onto the bread.Arrange your slices of the strawberries on top.Take your coffee spoon of the best Balsamic vinegar & drizzle it over your strawberries & the ricotta!Enjoy!!
\.


--
-- Data for Name: recipe_steps_join; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.recipe_steps_join (id, recipe_id, step_id) FROM stdin;
1	2	2
2	2	3
3	2	4
4	2	5
5	2	6
6	2	7
7	2	8
8	2	9
9	2	10
10	2	11
11	2	12
12	3	13
13	4	14
14	4	15
15	4	16
16	4	17
17	5	18
18	6	19
19	6	20
20	6	21
21	6	22
22	6	23
23	7	24
24	7	25
25	7	26
26	7	27
27	7	28
28	8	29
29	8	30
30	8	31
31	8	32
32	8	33
33	9	34
34	9	35
35	9	36
36	9	37
37	9	38
38	10	39
39	10	40
40	10	41
41	10	42
42	10	43
43	11	44
44	11	45
45	11	46
46	11	47
47	11	48
48	12	49
49	12	50
50	12	51
51	12	52
52	12	53
53	13	54
54	13	55
55	13	56
56	13	57
57	13	58
58	14	59
59	14	60
60	14	61
61	14	62
62	14	63
63	15	64
\.


--
-- Data for Name: saved_recipes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.saved_recipes (id, user_id, spoonacular_dish_id, title, image, vegetarian, vegan, gluten_free, ready_in_minutes, source_url) FROM stdin;
2	1	633876	Baked Ziti	https://img.spoonacular.com/recipes/633876-312x231.jpg	f	f	f	45	https://www.foodista.com/recipe/QJCRNHC6/baked-ziti
3	1	715538	What to make for dinner tonight?? Bruschetta Style Pork & Pasta	https://img.spoonacular.com/recipes/715538-312x231.jpg	f	f	f	35	http://www.pinkwhen.com/make-dinner-tonight/
4	1	634995	Bird's Nest Marinara	https://img.spoonacular.com/recipes/634995-312x231.jpg	f	f	f	45	https://www.foodista.com/recipe/87H2XMNW/birds-nest-marinara
5	1	659581	Scotch Eggs	https://img.spoonacular.com/recipes/659581-312x231.jpg	f	f	f	45	https://www.foodista.com/recipe/SD57XNHR/scotch-eggs
6	\N	648742	Kappa Maki	https://img.spoonacular.com/recipes/648742-312x231.jpg	t	t	t	45	https://www.foodista.com/recipe/VJ3JTZWL/kappa-maki
7	\N	648742	Kappa Maki	https://img.spoonacular.com/recipes/648742-312x231.jpg	t	t	t	45	https://www.foodista.com/recipe/VJ3JTZWL/kappa-maki
8	1	648742	Kappa Maki	https://img.spoonacular.com/recipes/648742-312x231.jpg	t	t	t	45	https://www.foodista.com/recipe/VJ3JTZWL/kappa-maki
9	1	648742	Kappa Maki	https://img.spoonacular.com/recipes/648742-312x231.jpg	t	t	t	45	https://www.foodista.com/recipe/VJ3JTZWL/kappa-maki
10	1	648742	Kappa Maki	https://img.spoonacular.com/recipes/648742-312x231.jpg	t	t	t	45	https://www.foodista.com/recipe/VJ3JTZWL/kappa-maki
11	1	648742	Kappa Maki	https://img.spoonacular.com/recipes/648742-312x231.jpg	t	t	t	45	https://www.foodista.com/recipe/VJ3JTZWL/kappa-maki
12	1	648742	Kappa Maki	https://img.spoonacular.com/recipes/648742-312x231.jpg	t	t	t	45	https://www.foodista.com/recipe/VJ3JTZWL/kappa-maki
13	1	648742	Kappa Maki	https://img.spoonacular.com/recipes/648742-312x231.jpg	t	t	t	45	https://www.foodista.com/recipe/VJ3JTZWL/kappa-maki
14	1	648742	Kappa Maki	https://img.spoonacular.com/recipes/648742-312x231.jpg	t	t	t	45	https://www.foodista.com/recipe/VJ3JTZWL/kappa-maki
15	1	652861	My Favourite Ricotta Sandwich	https://img.spoonacular.com/recipes/652861-312x231.jpg	f	f	f	45	https://www.foodista.com/recipe/MPGH3KPY/my-favourite-ricotta-sandwich
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, username, password_digest) FROM stdin;
1	gs@example.com	georgia	$2b$10$kab0.vtnJS5GR2.ibj5fBO8Uy8xxpa3ufhlLEdFQrN5krzhQ5hbma
2	alice94@example.com	alice94	$2b$10$/iyS9/8AJURTAbEyxerB..pZKyiLwiFTjP9fcf6RBug7JWcG6TSXm
3	bob.jones@example.com	bob_jones	$2b$10$zOyJt7uvn27IrVQ3jbUHEuGpIusQGHJUMsV.QT.yECQn6Q3WrsugW
4	carol.smith@example.com	carol.smith	$2b$10$fz5vZrtqzx41D0r5MHUEu.a1dzQweM1kYT4CykVsjraeAu19mDY4a
5	david.green@example.com	david.green	$2b$10$LuzE6mXdNq3nQc0EZlHkOO7HDvGAOs5WUVJNxfzLgpIiH1hZtxrLC
6	emily87@example.com	emily87	$2b$10$Is5uul6GUhQWqlitlUTZAu4VKClS6mH1qN9CZCU1i.pkuJ2WwN4a6
7	frank.thomas@example.com	frank_thomas	$2b$10$cK2WhJ.MRlrxalSo/kGO0.jhf533p3lTppXB2uscka1etaubthWMC
8	grace.walker@example.com	grace_walker	$2b$10$0zlcre2SydDopBN6/bAyE.PLgz4/M2ogu.yFss5esIvSitXwHe6T.
9	henry.king@example.com	henry_king	$2b$10$PXrO4mBvUICErA94R43KJOJfKDBwGi5ausskvldEEo7b5NScS06QK
10	isabella03@example.com	isabella03	$2b$10$Vdg5kQy0RBFdSHtWzW3wp.BzgDODjp47TLZP9z3WmsAlD5OmC2KBG
11	jack.smith@example.com	jack_smith	$2b$10$wPBRXU.TkGz9LwNhWaQO7.tnyVumvDBR5Ui8syrFfKMEwPA7jvYHi
12	kate.miller@example.com	kate.miller	$2b$10$ksRRoKENKP6dTD05QI7rV.Rr02QhL1y8lnjrQFSYjkrFlPMwQzkl6
13	liam.jones@example.com	liam_jones	$2b$10$s5exbdrlGiKT26XNX.R/Rec3Xp2e9rFqwUxrTuwZSb7gsZrkKs01y
14	megan89@example.com	megan89	$2b$10$fEChvJkJ5QZURdCt9d9YCOZD2HZM6bD170d.ygBDrVHMl.zYL38kC
15	nathan.brown@example.com	nathan.brown	$2b$10$/dnlO5KTlkKXtpd/bt0e..7COelq6J2EUmOU.Lve/t8wdiInsMlhu
16	olivia.green@example.com	olivia.green	$2b$10$IEyEoDzPDa18zXcIYTLn..bzDw69oIJ6i43pPT7QhxipgCN9.NDCK
17	peter.parker@example.com	peter_parker	$2b$10$.TeLYpQth5WlTpAtwM1XHuyZNblgs0YBCiKtnpnXZNdMI8xdJkBYW
18	quinn.taylor@example.com	quinn_taylor	$2b$10$T.yq2KiDN1ypYp2xQ.NeMOhO1nbL20tJ5LCSyvsUMDKo35F9bV/bm
19	rachel.smith@example.com	rachel.smith	$2b$10$aOTuwWt6cdOUyA1paPGc2.w/ldU56bbS3QGdpn6vKay3yHSX24aiC
20	samuel94@example.com	samuel94	$2b$10$nKOuGspzrjkTUoggvnLphevWxZp21MYoOuyrCzWYZxbe1eUvmDQNq
21	tina.wang@example.com	tina_wang	$2b$10$lEpWwDqMdZrwG4AdC2VJTOshTwUxWhZRQbVgI5r4GiZLDumOhhTd6
22	georgias@gmail.com	georgias	$2b$10$BMnMcL/IC2wvwTsQ6G54xuhMXdaIoOoZAOuOxkNQT5aX5AJg17Jm2
24	geo@gmail.com	georgiassss	$2b$10$Eh71w.eZ0U2VRmuFk.D4qOqR8d.nh4RBPqoty1sBo0MjpF4BmlxRu
25	geosss@gmail.com	georgiasssssss	$2b$10$V.Jk3t1VLnWD5XMG8SDjy.DTan3YLBD2QcuSEJ54m.HfaNm8jijli
27	test2@gmail.com	test2	$2b$10$9dZaBqmANdklt9MuAQ.Nte99uu0i8Ajo1Dg3yv77k4EhXnUslvMfu
31	test22@gmail.com	test22	$2b$10$2Yh0ddjdWnfQsF38p6uw0.y.T6T83kXHU84EDI22C9ZTcPpeVCHrq
\.


--
-- Name: recipe_ingredients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.recipe_ingredients_id_seq', 54, true);


--
-- Name: recipe_ingredients_join_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.recipe_ingredients_join_id_seq', 55, true);


--
-- Name: recipe_steps_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.recipe_steps_id_seq', 64, true);


--
-- Name: recipe_steps_join_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.recipe_steps_join_id_seq', 63, true);


--
-- Name: saved_recipes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.saved_recipes_id_seq', 15, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 31, true);


--
-- Name: recipe_ingredients_join recipe_ingredients_join_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recipe_ingredients_join
    ADD CONSTRAINT recipe_ingredients_join_pkey PRIMARY KEY (id);


--
-- Name: recipe_ingredients recipe_ingredients_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recipe_ingredients
    ADD CONSTRAINT recipe_ingredients_pkey PRIMARY KEY (id);


--
-- Name: recipe_steps_join recipe_steps_join_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recipe_steps_join
    ADD CONSTRAINT recipe_steps_join_pkey PRIMARY KEY (id);


--
-- Name: recipe_steps recipe_steps_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recipe_steps
    ADD CONSTRAINT recipe_steps_pkey PRIMARY KEY (id);


--
-- Name: saved_recipes saved_recipes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.saved_recipes
    ADD CONSTRAINT saved_recipes_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: recipe_ingredients_join recipe_ingredients_join_ingredient_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recipe_ingredients_join
    ADD CONSTRAINT recipe_ingredients_join_ingredient_id_fkey FOREIGN KEY (ingredient_id) REFERENCES public.recipe_ingredients(id);


--
-- Name: recipe_ingredients_join recipe_ingredients_join_recipe_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recipe_ingredients_join
    ADD CONSTRAINT recipe_ingredients_join_recipe_id_fkey FOREIGN KEY (recipe_id) REFERENCES public.saved_recipes(id);


--
-- Name: recipe_steps_join recipe_steps_join_recipe_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recipe_steps_join
    ADD CONSTRAINT recipe_steps_join_recipe_id_fkey FOREIGN KEY (recipe_id) REFERENCES public.saved_recipes(id);


--
-- Name: recipe_steps_join recipe_steps_join_step_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recipe_steps_join
    ADD CONSTRAINT recipe_steps_join_step_id_fkey FOREIGN KEY (step_id) REFERENCES public.recipe_steps(id);


--
-- Name: saved_recipes saved_recipes_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.saved_recipes
    ADD CONSTRAINT saved_recipes_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

