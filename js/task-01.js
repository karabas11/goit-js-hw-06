const itemRef = document.querySelectorAll('.item');

console.log('Number of categories:', itemRef.length);
const totalIndex = itemRef.forEach((element, index, arr) => {
  console.log('Category:', element.firstElementChild.textContent);

  const li = element.lastElementChild;
  console.log('Elements:', li.children.length);
});
