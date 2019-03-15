window.onload = function() {
  /*
    ========================================
   Scrollit.js
    ========================================
  */
   $(function() {
    $.scrollIt();
  });

  // Slider

  // const buttonLeft = document.querySelector('slider-controls .left');

  /*
    ========================================
   Progress bar - easyPieChart
    ========================================
  */

  $(function() {
    $('.chart').easyPieChart({
      barColor: '#ffe600',
      scaleColor: false,
      lineWidth: 6,
      trackColor: '#fff',
      lineCap: 'circle',
      animate: 2000
    })
  })

  initializeSlider(".quote .slider-model");
  
};

function initializeSlider(sliderSelector) {

  const sliderControl = document.querySelector(
    sliderSelector + " > .slider-controls"
  );

  let timerId = setInterval(autoRun, 1000);

  sliderControl.addEventListener("click", e => {
    if (!e.target.classList.contains("pointer")) return;

    clearInterval(timerId);

    selectSlide(e.target);

    setTimeout(() => {
      timerId = setInterval(autoRun, 1000);
    }, 5000);
  });

  function selectSlide(buttonElem) {
    const sliderPointers = document.querySelectorAll(
      sliderSelector + " > .slider-controls > .pointer"
    );
    const sliderUl = document.querySelector(sliderSelector + " > ul");
    const sliderPointerActive = document.querySelector(
      sliderSelector + " > .slider-controls > .active"
    );
    const previosIndex = [].indexOf.call(sliderPointers, sliderPointerActive); //sliderPointers.indexOf(sliderPointerActive)
    sliderPointerActive.classList.remove("active");
    buttonElem.classList.add("active");

    const selectedIndex = Array.from(sliderPointers).findIndex(pointer =>
      pointer.classList.contains("active")
    );

    if (previosIndex === 0 && selectedIndex === sliderPointers.length - 1) {
      // shift left

      sliderUl.style.transition = "none";
      sliderUl.style.left = sliderPointers.length * -100 + "%";
      setTimeout(() => {
        sliderUl.style.transition = "0.3s";
        sliderUl.style.left = (sliderPointers.length - 1) * -100 + "%";
      }, 0);
    } else if (
      previosIndex === sliderPointers.length - 1 &&
      selectedIndex === 0
    ) {
      // shift right
      sliderUl.style.left = sliderPointers.length * -100 + "%";
      setTimeout(() => {
        sliderUl.style.transition = "none";
        sliderUl.style.left = 0;

        setTimeout(() => {
          sliderUl.style.transition = "0.3s";
        }, 50);
      }, 400);
    } else {
      sliderUl.style.left = selectedIndex * -100 + "%";
    }
  }


  function autoRun() {
    const sliderPointers = document.querySelectorAll(
      sliderSelector + " > .slider-controls > .pointer"
    );
    let selectedIndex = Array.from(sliderPointers).findIndex(pointer =>
      pointer.classList.contains("active")
    );

    if (selectedIndex === sliderPointers.length - 1) {
      selectedIndex = 0;
    } else {
      selectedIndex += 1;
    }

    selectSlide(sliderPointers[selectedIndex]);
  }

}
