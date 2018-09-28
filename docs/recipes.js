/**
 * @apiVersion 0.0.1
 *
 * @api {GET} /recipes Buscar receitas
 *
 * @apiGroup Receitas
 *
 * @apiDescription Busca receitas que contenham os ingredientes informados na query string.
 * <br/> O paramêtro i da query string é obirgatório
 * <br/> Os ingredientes devem ser informados no formato ingredient1,ingredient2
 * <br/> É permitido informar até 3 ingredientes
 *
 * @apiExample {url} Exemplo de paramêtros
 * ?i=banana,organge  # Válido
 * ?i=rice,beans,meat # Válido
 * ?i=apple,2         # Inválido
 *
 *
 * @apiSuccess (Código de retorno 200 OK) {json} data Receitas
 *
 * @apiSuccessExample
 * Response HTTP/1.1 200 OK
 * {
 *    "keywords": [
 *        "rice",
 *        "beans",
 *        "meat"
 *    ],
 *    "recipes": [
 *        {
 *            "title": "15-Minute Chili & Rice Wraps",
 *            "ingredients": [
 *                "beans",
 *                "flour tortillas",
 *                "rice",
 *                "water"
 *            ],
 *            "link": "http://www.kraftfoods.com/kf/recipes/15-minute-chili-rice-wraps-52165.aspx",
 *            "gif": "https://giphy.com/gifs/snl-saturday-night-live-episode-4-d1JfbcdXbPpsXpYc"
 *        },
 *        {
 *            "title": "9-Grain Rice (Gugokbap)",
 *            "ingredients": [
 *                "barley",
 *                "barley",
 *                "beans",
 *                "black beans",
 *                "rice",
 *                "rice",
 *                "rice"
 *            ],
 *            "link": "http://www.recipezaar.com/9-Grain-Rice-Gugokbap-230490",
 *            "gif": "https://giphy.com/gifs/rupaulsdragrace-3oKIP7wjzdzjbjLugg"
 *        },
 *        {
 *            "title": "VELVEETA® 20 Minute Cheesy Chili 'N Rice Skillet",
 *            "ingredients": [
 *                "beans",
 *                "ground beef",
 *                "rice",
 *                "tomato",
 *                "velveeta cheese",
 *                "water"
 *            ],
 *            "link": "http://www.kraftfoods.com/kf/recipes/velveeta-20-minute-cheesy-51917.aspx",
 *            "gif": "https://giphy.com/gifs/hairspraylive-nbc-hairspray-live-3o7TKy3s759ToiEoak"
 *        },
 *        {
 *            "title": "Beans, Rice And Chicken Recipe",
 *            "ingredients": [
 *                "beans",
 *                "beans",
 *                "chicken",
 *                "rice"
 *            ],
 *            "link": "http://cookeatshare.com/recipes/beans-rice-and-chicken-81174",
 *            "gif": "https://giphy.com/gifs/nqT2V4HpFuomc"
 *        },
 *        {
 *            "title": "Mexican Rice Recipe",
 *            "ingredients": [
 *                "beans",
 *                "butter",
 *                "green pepper",
 *                "onions",
 *                "rice",
 *                "taco seasoning",
 *                "tomato",
 *                "water"
 *            ],
 *            "link": "http://cookeatshare.com/recipes/mexican-rice-57128",
 *            "gif": "https://giphy.com/gifs/unreelco-2sY9RHXa2GNn82LQEE"
 *        },
 *        {
 *            "title": "Mexican Sandwich Recipe",
 *            "ingredients": [
 *                "beans",
 *                "green onion",
 *                "lettuce",
 *                "olives",
 *                "rice",
 *                "tomato",
 *                "tortilla chips",
 *                "velveeta cheese"
 *            ],
 *            "link": "http://cookeatshare.com/recipes/mexican-sandwich-51884",
 *            "gif": "https://giphy.com/gifs/pumpkin-spice-latte-ydNtvvuHP2yA"
 *        },
 *        {
 *            "title": "Chicken Spectacular Recipe",
 *            "ingredients": [
 *                "beans",
 *                "black pepper",
 *                "cherry pepper",
 *                "chicken",
 *                "onions",
 *                "rice",
 *                "soup",
 *                "water chestnuts"
 *            ],
 *            "link": "http://cookeatshare.com/recipes/chicken-spectacular-33998",
 *            "gif": "https://giphy.com/gifs/pumpkin-spice-latte-ydNtvvuHP2yA"
 *        },
 *        {
 *            "title": "Vegetable Mushroom Fried Rice Recipe",
 *            "ingredients": [
 *                "beans",
 *                "broccoli",
 *                "carrot",
 *                "cauliflower",
 *                "mushroom",
 *                "olive oil",
 *                "red onions",
 *                "rice",
 *                "salt"
 *            ],
 *            "link": "http://www.grouprecipes.com/26992/vegetable-mushroom-fried-rice.html",
 *            "gif": "https://giphy.com/gifs/rice-fried-leftover-Aj9EHGocwb4bu"
 *        },
 *        {
 *            "title": "Mexican Casserole II Recipe",
 *            "ingredients": [
 *                "beans",
 *                "cream of chicken soup",
 *                "hamburger",
 *                "rice"
 *            ],
 *            "link": "http://www.cdkitchen.com/recipes/recs/255/Mexican_Casserole_II52926.shtml",
 *            "gif": "https://giphy.com/gifs/pumpkin-spice-latte-ydNtvvuHP2yA"
 *        },
 *        {
 *            "title": "Spicy Saucy Beef And Been Rice Dish Recipe",
 *            "ingredients": [
 *                "beans",
 *                "bell pepper",
 *                "garlic",
 *                "ground beef",
 *                "onions",
 *                "rice",
 *                "salsa",
 *                "spices",
 *                "tomato"
 *            ],
 *            "link": "http://www.grouprecipes.com/51418/spicy-saucy-beef-and-been-rice-dish.html",
 *            "gif": "https://giphy.com/gifs/rice-fried-leftover-Aj9EHGocwb4bu"
 *        }
 *    ]
 * }
 *
 */
