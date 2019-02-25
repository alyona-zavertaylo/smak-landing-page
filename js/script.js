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


  
};
