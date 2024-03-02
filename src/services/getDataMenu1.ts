//в получаемой из JSON.stringify(stateFirstUndefined) строке убирать кавычки у ключа дня 
// далее делить на строки по образцу кавычки остальных ключей уходят при сохранении 
const savedIngredientHistory1 = {
    day1_feature: {
      "Шакшука.": {
        label: "Шакшука.",
        numberServings: 6,
        ingredients: [
          ["Свиной фарш гр", 600],
          ["Перец сладкий гр", 150],
          ["Лук репчатый гр", 150],
          ["Помидоры гр", 210],
          ["Чеснок гр", 30],
          ["Яйца куриные шт", 6],
          ["Подсолнечное масло гр", 120],
          ["Специи", 12],
        ],
        image: "https://bartcevich.github.io/letter/image/тыквенные_блины.jpg",
      },
      "Борщ.": {
        label: "Борщ.",
        numberServings: 6,
        ingredients: [
          ["Курица гр", 600],
          ["Сметана гр", 120],
          ["Картофель гр", 600],
          ["Капуста белокачанная гр", 180],
          ["Свёкла гр", 300],
          ["Морковь гр", 120],
          ["Соус томатный гр", 18],
          ["Подсолнечное масло гр", 18],
          ["Специи", 18],
        ],
        image:
          "https://bartcevich.github.io/letter/image_soup/beetroot_hot.png",
      },
      "Гуляш.": {
        label: "Гуляш.",
        numberServings: 6,
        ingredients: [
          ["Курица гр", 1002],
          ["Молоко гр", 798],
          ["Лук репчатый гр", 216],
          ["Соус томатный гр", 60],
          ["Мука пшеничная гр", 48],
          ["Подсолнечное масло гр", 60],
          ["Соль гр", 6],
          ["Специи", 6],
        ],
        image: "https://bartcevich.github.io/letter/image/тыквенные_блины.jpg",
      },
      "Картофельное пюре.": {
        label: "Картофельное пюре.",
        numberServings: 6,
        ingredients: [
          ["Картофель гр", 690],
          ["Молоко гр", 120],
          ["Масло сливочное гр", 30],
          ["Соль гр", 6],
        ],
        image:
          "https://bartcevich.github.io/letter/image_side_dish/mashed_potatoes.png",
      },
      "Салат из моркови с изюмом.": {
        label: "Салат из моркови с изюмом.",
        numberServings: 6,
        ingredients: [
          ["Морковь гр", 450],
          ["Изюм гр", 72],
          ["Лимон гр", 30],
          ["Сахар гр", 36],
          ["Подсолнечное масло гр", 42],
        ],
        image: "https://bartcevich.github.io/letter/image/тыквенные_блины.jpg",
      },
    },
    day3_feature:{
        "Сырники.":{
            "label":"Сырники.",
            "numberServings":6,
            "ingredients":[
                ["Творог гр",1080],
                ["Сметана гр",270],
                ["Изюм гр",90],
                ["Мука пшеничная гр",150],
                ["Манка гр",48],
                ["Сахар гр",60],
                ["Яйца куриные шт",3],
                ["Соль гр",6],
                ["Подсолнечное масло гр",120]],
                "image":"https://bartcevich.github.io/letter/image/тыквенные_блины.jpg"},
        "Уха.":{
            "label":"Уха.",
            "numberServings":6,
            "ingredients":[
                ["Рыба гр",600],
                ["Картофель гр",300],
                ["Морковь гр",300],
                ["Лук репчатый гр",300],
                ["Овсяные хлопья гр",90],
                ["Соль гр",6],
                ["Специи",6]],
                "image":"https://bartcevich.github.io/letter/image_soup/fisherman_chowder.png"},
        "Ленивый фаршированный перец":{
            "label":"Ленивый фаршированный перец",
            "numberServings":6,
            "ingredients":[
                ["Свинина гр",600],
                ["Перец сладкий гр",450],
                ["Морковь гр",228],
                ["Лук репчатый гр",300],
                ["Белый рис гр",150],
                ["Яйца куриные шт",1.7999999999999998],
                ["Соус томатный гр",78],
                ["Майонез гр",78],
                ["Подсолнечное масло гр",45],
                ["Специи",6],["Соль гр",6]],
                "image":"https://bartcevich.github.io/letter/image/тыквенные_блины.jpg"},
        "Булгур.":{
            "label":"Булгур.",
            "numberServings":6,
            "ingredients":[
                ["Булгур гр",360],
                ["Соль гр",6],
                ["Масло сливочное гр",120]],
                "image":"https://bartcevich.github.io/letter/image_side_dish/bulgur.png"},
        "Салат из свеклы с чесноком.":{
            "label":"Салат из свеклы с чесноком.",
            "numberServings":6,
            "ingredients":[
                ["Свёкла гр",600],
                ["Грецкий орех гр",60],
                ["Чеснок гр",30],
                ["Изюм гр",60],
                ["Майонез гр",120],
                ["Соль гр",6]],
                "image":"https://bartcevich.github.io/letter/image/тыквенные_блины.jpg"}},
    day5_feature:{
        "Блины бахиры":{
            "label":"Блины бахиры",
            "numberServings":3,
            "ingredients":[
                ["Манка гр",126],
                ["Мука пшеничная гр",51],
                ["Сахар гр",24],
                ["Разрыхлитель гр",9],
                ["Дрожжи сухие гр",6],
                ["Соль гр",3],
                ["Подсолнечное масло гр",2.4000000000000004]],
                "image":"https://bartcevich.github.io/letter/image/honey_kefir.png"},
        "Пшенный суп сяйцом":{
            "label":"Пшенный суп сяйцом",
            "numberServings":3,
            "ingredients":[
                ["Лук репчатый гр",105],
                ["Картофель гр",180],
                ["Морковь гр",120],
                ["Яйца куриные шт",1.5],
                ["Пшено гр",45],
                ["Подсолнечное масло гр",30],
                ["Специи",3],
                ["Соль гр",3]],
                "image":"https://bartcevich.github.io/letter/image_soup/millet_soup.png"},
        "Капуста тушеная с мясом.":{
            "label":"Капуста тушеная с мясом.",
            "numberServings":3,
            "ingredients":[
                ["Свинина гр",195],
                ["Капуста белокачанная гр",375],
                ["Морковь гр",120],
                ["Лук репчатый гр",120],
                ["Соус томатный гр",30],
                ["Специи",3]],
                "image":"https://bartcevich.github.io/letter/image/тыквенные_блины.jpg"}},
    day6_feature:{
        "Манная каша":{
            "label":"Манная каша",
            "numberServings":3,
            "ingredients":[
                ["Манка гр",120],
                ["Молоко гр",600]],
                "image":"https://bartcevich.github.io/letter/image_side_dish/semolina_porridge.png"},
        "Пшенный суп сяйцом":{
                    "label":"Пшенный суп сяйцом",
                    "numberServings":3,
                    "ingredients":[
                        ["Лук репчатый гр",105],
                        ["Картофель гр",180],
                        ["Морковь гр",120],
                        ["Яйца куриные шт",1.5],
                        ["Пшено гр",45],
                        ["Подсолнечное масло гр",30],
                        ["Специи",3],
                        ["Соль гр",3]],
                        "image":"https://bartcevich.github.io/letter/image_soup/millet_soup.png"},
        "Капуста тушеная с мясом.":{
                    "label":"Капуста тушеная с мясом.",
                    "numberServings":3,
                    "ingredients":[
                        ["Свинина гр",195],
                        ["Капуста белокачанная гр",375],
                        ["Морковь гр",120],
                        ["Лук репчатый гр",120],
                        ["Соус томатный гр",30],
                        ["Специи",3]],
                        "image":"https://bartcevich.github.io/letter/image/тыквенные_блины.jpg"}},
    };
  export function getHistory1() {
    return savedIngredientHistory1;
}