const productImages = document.querySelectorAll(".product-images img"); // selecting all image thumbs
const productImageSlide = document.querySelector(".image-slider"); // selecting image slider element
//let activeImageSlide = 0; // default slider image
productImages.forEach((item, i) => {
    console.log (item)
 // looping through each image thumb
 item.addEventListener("click", () => {
  // adding click event to each image thumbnail
  document
   .querySelector(".product-images img.active")
   .classList.remove("active"); //// use the classList API to remove and add classes
  item.classList.add("active");
  
  productImageSlide.style.backgroundImage = `url('${item.src}')`;
 });
});
const sizeBtns = document.querySelectorAll(".size-radio-btn"); // selecting size buttons
let checkedBtn = 0; // current selected button
sizeBtns.forEach((item, i) => {
 // looping through each button
 item.addEventListener("click", () => {
  // adding click event to each
  sizeBtns[checkedBtn].classList.remove("check");
  //sizeBtns[checkedBtn].classList.remove("check"); // removing check class from the current button
  item.classList.add("check"); // adding check class to clicked button
  checkedBtn = i; // upading the variable
 });
});
let itemCount = 0;
 let addedAmount= document.querySelector('#badge');
 let addBtn = document.querySelector('#btnAdd');
 addBtn.addEventListener('click', function(){
  itemCount += 1;
  addedAmount.textContent=itemCount}
  );
  let wishCount = 0;
  let wishedAmount= document.querySelector('#badge2');
  let addWish = document.querySelector('#btnWish');
   addWish.addEventListener('click', function(){
   wishCount += 1;
   wishedAmount.textContent=wishCount}
   );
   