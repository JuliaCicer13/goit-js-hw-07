
const categoryItems = document.querySelectorAll('li.item');
console.log(`Total categories: ${categoryItems.length}`);

categoryItems.forEach((category) => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('li').length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements in category: ${categoryElements}`);
});



  
