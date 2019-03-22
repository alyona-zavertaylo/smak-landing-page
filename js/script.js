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

  // slider - block "Client"
  initializeClientSlider(".clients");

  // filter
  const dataIdentifier = document.querySelector(".navigation-work-panel > ul");
  dataIdentifier.addEventListener("click", e => {
    if (e.target.tagName != "A") return;

    const attrName = e.target.getAttribute("data-identifier");
    chooseWorks(attrName);
    addActiveClassWorks(e.target);
  });
  function chooseWorks(dataAttr) {
    const worksPanel = document.querySelectorAll(".portfolio .works > li");
    for (let i = 0; i < worksPanel.length; i++) {
      if (
        worksPanel[i].classList.contains(dataAttr) ||
        dataAttr === "all-work"
      ) {
        worksPanel[i].style.display = "block";
      } else {
        worksPanel[i].style.display = "none";
      }
    }
  }
  function addActiveClassWorks(target) {
    const workPanelUlLiA = document.querySelectorAll('.navigation-work-panel > ul li a');
    for(let i = 0; i < workPanelUlLiA.length; i++) {
        workPanelUlLiA[i].classList.remove('active');
      
     
    }
    target.classList.add('active');
  };
};

function initializeClientSlider(sliderSelector) {
  const clientsButtonRight = document.querySelector(
    sliderSelector + " .logo-set .slider-control .right"
  );
  const clientsButtonLeft = document.querySelector(
    sliderSelector + " .logo-set .slider-control .left"
  );

  let timerId = setInterval(selectMainSlideRight, 3000);
  let scheduleTimerId;
  clientsButtonRight.addEventListener("click", () => {
    clearInterval(timerId);
    selectMainSlideRight();
    clearTimeout(scheduleTimerId);

    scheduleTimerId = setTimeout(() => {
      timerId = setInterval(selectMainSlideRight, 3000);
    }, 2000);
  });
  clientsButtonLeft.addEventListener("click", () => {
    clearInterval(timerId);
    selectMainSlideLeft();
    clearTimeout(scheduleTimerId);

    scheduleTimerId = setTimeout(() => {
      timerId = setInterval(selectMainSlideRight, 3000);
    }, 2000);
  });

  function selectMainSlideRight() {
    const sliderUl = document.querySelector(".clients .logo-set ul");
    const sliderLi = document.querySelectorAll(".clients .logo-set ul li");
    const sliderLiActive = document.querySelector(
      ".clients .logo-set ul .active"
    );
    const previosIndex = [].indexOf.call(sliderLi, sliderLiActive);

    if (!sliderLiActive) {
      return;
    }
    sliderLiActive.classList.remove("active");
    sliderUl.style.transition = "0.3s";
    sliderUl.style.left = (previosIndex - 4) * -16.35 + "%";
    if (previosIndex == 9) {
      setTimeout(() => {
        sliderLi[previosIndex - 4].classList.add("active");
        sliderUl.style.transition = "none";
        sliderUl.style.left = 0 + "%";
        setTimeout(() => {
          sliderUl.style.transition = "0.3s";
        }, 50);
      }, 300);
    } else {
      sliderLi[previosIndex + 1].classList.add("active");
    }
  }
  function selectMainSlideLeft() {
    const sliderUl = document.querySelector(".clients .logo-set ul");
    const sliderLi = document.querySelectorAll(".clients .logo-set ul li");
    const sliderLiActive = document.querySelector(
      ".clients .logo-set ul .active"
    );
    const previosIndex = [].indexOf.call(sliderLi, sliderLiActive);

    if (!sliderLiActive) {
      return;
    }
    sliderLiActive.classList.remove("active");

    if (previosIndex == 5) {
      sliderUl.style.transition = "0s";
      sliderUl.style.left = (sliderLi.length - 1 - previosIndex) * -16.35 + "%";
      setTimeout(() => {
        sliderUl.style.transition = "0.3s";
        sliderUl.style.left =
          (sliderLi.length - 2 - previosIndex) * -16.35 + "%";
        sliderLi[sliderLi.length - 2].classList.add("active");
      }, 40);
    } else {
      sliderUl.style.left = (previosIndex - 6) * -16.35 + "%";
      sliderLi[previosIndex - 1].classList.add("active");
    }
  }
}

initializeMainSlider = sliderSelector => {
  const rightSliderButton = document.querySelector(
    sliderSelector + "> .panel-slider-controls .right"
  );
  const leftSliderButton = document.querySelector(
    sliderSelector + "> .panel-slider-controls .left"
  );

  let timerId = setInterval(selectMainSlideRight, 3000);
  let scheduleTimerId;
  rightSliderButton.addEventListener("click", () => {
    clearInterval(timerId);
    selectMainSlideRight();
    clearTimeout(scheduleTimerId);

    scheduleTimerId = setTimeout(() => {
      timerId = setInterval(selectMainSlideRight, 3000);
    }, 5000);
  });

  leftSliderButton.addEventListener("click", () => {
    clearInterval(timerId);
    selectMainSlideLeft();

    clearTimeout(scheduleTimerId);

    scheduleTimerId = setTimeout(() => {
      timerId = setInterval(selectMainSlideRight, 3000);
    }, 5000);
  });

  function selectMainSlideRight() {
    const sliderUl = document.querySelector(".slider .slider-model ul");
    const sliderLi = document.querySelectorAll(".slider .slider-model ul li");
    const sliderLiActive = document.querySelector(
      ".slider .slider-model ul .active"
    );
    const previosIndex = [].indexOf.call(sliderLi, sliderLiActive);

    if (!sliderLiActive) {
      return;
    }

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
  }

  function selectMainSlideLeft() {
    const sliderUl = document.querySelector(".slider .slider-model ul");
    const sliderLi = document.querySelectorAll(".slider .slider-model ul li");
    const sliderLiActive = document.querySelector(
      ".slider .slider-model ul .active"
    );
    const previosIndex = [].indexOf.call(sliderLi, sliderLiActive);
    sliderLiActive.classList.remove("active");

    if (!sliderLiActive) {
      return;
    }

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
  }
};

// function initializeSlider(sliderSelector) {
initializeSlider = sliderSelector => {
  const sliderControl = document.querySelector(
    sliderSelector + " > .slider-controls"
  );

  let timerId = setInterval(autoRun, 3000);

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
