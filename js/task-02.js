const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  let ulList = document.querySelector("#ingredients");

  ingredients.map(ingredient => {
  let newLi = document.createElement("li");
  newLi.innerHTML = ingredient;
  ulList.append(newLi)
});
  

console.log(ulList);