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
    $(".chart").easyPieChart({
      barColor: "#ffe600",
      scaleColor: false,
      lineWidth: 6,
      trackColor: "#fff",
      lineCap: "circle",
      animate: 2000
    });
  });
  // slider - blok "Header"
  initializeMainSlider(".slider");
  // slider - blok "Quote"
  initializeSlider(".quote .slider-model");
};

initializeMainSlider = (sliderSelector) => {
  const rightSliderButton = document.querySelector(sliderSelector + "> .panel-slider-controls .right");
  const leftSliderButton = document.querySelector(sliderSelector + "> .panel-slider-controls .left");

  let timerId = setInterval(selectMainSlideRight, 1000);

  rightSliderButton.addEventListener("click", () => {
  clearInterval(timerId);
  selectMainSlideRight();

  setTimeout(() => {
    timerId = setInterval(selectMainSlideRight, 1000);
  }, 5000);
  });

  leftSliderButton.addEventListener("click", () => {

  clearInterval(timerId);
  selectMainSlideLeft();

  setTimeout(() => {
    timerId = setInterval(selectMainSlideRight, 1000);
  }, 5000);
  });

  function selectMainSlideRight() {
    const sliderUl = document.querySelector(".slider .slider-model ul");
    const sliderLi = document.querySelectorAll(".slider .slider-model ul li");
    const sliderLiActive = document.querySelector(
      ".slider .slider-model ul .active"
    );
    const previosIndex = [].indexOf.call(sliderLi, sliderLiActive);
    sliderLiActive.classList.remove("active");

    if (previosIndex == sliderLi.length - 2) {
      sliderUl.style.left = (previosIndex + 1) * -100 + "%";
      setTimeout(() => {
        sliderUl.style.transition = "none";
        sliderUl.style.left = 0 + "%";
        sliderLi[0].classList.add("active");
        setTimeout(() => {
          sliderUl.style.transition = "0.3s";
        }, 50);
      }, 400);
    } else {
      sliderUl.style.transition = "0.3s";
      sliderUl.style.left = (previosIndex + 1) * -100 + "%";

      sliderLi[previosIndex + 1].classList.add("active");
    }
  };

  selectMainSlideLeft = () => {
    const sliderUl = document.querySelector(".slider .slider-model ul");
    const sliderLi = document.querySelectorAll(".slider .slider-model ul li");
    const sliderLiActive = document.querySelector(
      ".slider .slider-model ul .active"
    );
    const previosIndex = [].indexOf.call(sliderLi, sliderLiActive);
    sliderLiActive.classList.remove("active");

    if (previosIndex == 0) {
      sliderUl.style.transition = "none";
      sliderUl.style.left = (sliderLi.length - 1) * -100 + "%";
      sliderLi[sliderLi.length - 2].classList.add("active");
      setTimeout(() => {
        sliderUl.style.transition = "0.3s";
        sliderUl.style.left = (sliderLi.length - 2) * -100 + "%";
      }, 300);
    } else {
      sliderUl.style.left = (previosIndex - 1) * -100 + "%";
      sliderUl.style.transition = "0.3s";
      sliderLi[previosIndex - 1].classList.add("active");
    }
  };
};

// function initializeSlider(sliderSelector) {
initializeSlider = sliderSelector => {
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
};
