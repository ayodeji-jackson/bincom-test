for (const itemHeading of document.querySelectorAll('section > div > h3')) {
  const itemName = itemHeading.innerHTML.split(' - ')[0]; 
  const itemDetails = itemHeading.innerHTML.split(' - ')[1];
  itemHeading.innerHTML = `<span>${itemName}</span> - <span>${itemDetails}</span>`;
}