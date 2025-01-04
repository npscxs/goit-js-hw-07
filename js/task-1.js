const categoriesList = document.querySelectorAll(".item");
console.log(`number of categories: ${categoriesList.length}`);

categoriesList.forEach((item) => {
  const titleCategory = item.querySelector("h2").textContent;
  console.log(`Category:${titleCategory}`);
  const numberOfCategories = item.querySelectorAll(".item-list-title");
  console.log(`Elements:${numberOfCategories.length}`);
});
