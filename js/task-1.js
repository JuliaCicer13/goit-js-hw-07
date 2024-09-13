
const categoryItem = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categoryItem.length}`)


categoryItem.forEach((category) => {
  const textItem = category.querySelector('h2').textContent;
  const allItem = category.querySelectorAll('li').length;
  console.log(`Category: ${textItem}`);
  console.log(`Elements: ${allItem}`);

});



  
