let mainSliderControls = document.querySelectorAll('.mainSlider__content-controls');
let mainSliderBox = document.querySelector('.mainSlider__slides');
let mainSlidesArr = document.querySelectorAll('.mainSlider__slides-slide');

function slider(controls, slider, slides, dots){
  let position = -100;
  let slide = 1; 

  controls.forEach((elem, index, arr) => {

    elem.children[1].onclick = function(){
      toRight();

      if(dots){
        dots.forEach((item)=>{
          item.className = 'comments__controls-dot';
        });
        dots[slide].classList.toggle('comments__controls-dot-active');
      }
    }

    elem.children[0].onclick = function(){
      toLeft()

      if(dots){
        dots.forEach((item)=>{
          item.className = 'comments__controls-dot';
        });
        dots[slide].classList.toggle('comments__controls-dot-active');
      }
    }

  })

  slider.addEventListener('transitionend', function(){
    if(slides[slide].dataset.clone === 'firstClone'){
      position = -100;
      slide = 1; 
      sliderPosition();
      if(dots){
        dots[slide].classList.toggle('comments__controls-dot-active');
      }
    }else if(slides[slide].dataset.clone === 'lastClone'){
      position = (slides.length - 2) * -100 ;
      slide = slides.length - 2; 
      sliderPosition();
      if(dots){
        dots[slide].classList.toggle('comments__controls-dot-active');
      }
    }
  });


  function toRight(){
    position -= 100;
    slide += 1;
    slider.setAttribute('style', `
      transform: translateX(${position}%);
      transition: .3s ease-in-out;
    `);
  }

  function toLeft(){
    position += 100;
    slide -= 1;
    slider.setAttribute('style', `
      transform: translateX(${position}%); 
      transition: .3s ease-in-out;
      `);
  }

  function sliderPosition(){
    slider.setAttribute('style', `transform: translateX(${position}%); transition: none`);
  }
  sliderPosition();
}

slider(mainSliderControls, mainSliderBox, mainSlidesArr);


let sliderControls = document.querySelectorAll('.slider__controls');
let sliderBox = document.querySelector('.slider__slides');
let slidesArr = document.querySelectorAll('.slider__slides-slide')


slider(sliderControls, sliderBox, slidesArr);

let commentsControls = document.querySelectorAll('.comments__controls-arrows');
let commentsBox = document.querySelector('.comments__slider-slides');
let commentsArr = document.querySelectorAll('.comments__slider-slide')
let commentsDots = document.querySelectorAll('.comments__controls-dot')

slider(commentsControls, commentsBox, commentsArr, commentsDots);
