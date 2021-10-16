const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  let ulList = document.querySelector("#ingredients");

  let marcap = ingredients.map(ingredient => {
  let newLi = document.createElement("li");
  newLi.append(ingredient);
   return newLi
});
 ulList.append(...marcap);

