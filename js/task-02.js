const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  let ulList = document.querySelector("#ingredients");
  const listIngredients = ingredients.forEach(ingredient => {
  let newLi = document.createElement("li");
  newLi.innerHTML = ingredient;
  ulList.appendChild(newLi)});
  

console.log(ulList);