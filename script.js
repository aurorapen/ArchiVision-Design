const images = document.querySelector('.carousel-images');
    const totalImages = images.children.length;
    let index = 0;

    function slideImages() {
      index++;
      if (index >= totalImages) {
        index = 0;
      }
      images.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(slideImages, 4000); 

    /*Contact us*/
function registeredForm(event){
  event.preventDefault();

}

  let submitForm = document.querySelector('#contact-form');
    submitForm.addEventListener('submit',registeredForm);