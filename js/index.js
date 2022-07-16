// langs active class
$(document).ready(function () {
  $('.langs .icon-btn').click(function () {
    $(this).addClass('active').parent().siblings().find('.icon-btn').removeClass('active');
  });
});


// navbar
$('.menu-bar').click(function (e) { 
  e.preventDefault();
  $('.dropdown').toggleClass('show-menu');
});


// line graph
const xValues = ['2021-yil yakuniga ko\'ra rejada (mlrd so\'m)', '2021-yil yakuniga ko\'ra amalda (mlrd so\'m)'];
const yValues = [1400, 1470];

new Chart("myLineGraph", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "#D3B1E0",
      borderColor: "#8D35B0",
      data: yValues
    }]
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [{ ticks: { min: 6, max: 16 } }],
    },
    plugins: {
      legend: {
        display: false
      }
    },
  }
});


// pie chart
const x = ["Yangi ish joylarini yaratish rejada", "Yangi ish joylarini yaratish amalda"];
const y = [823, 824];
const barColors = ["#80DC87", "#6F009B"];

new Chart("myPieChart", {
  type: "doughnut",
  data: {
    labels: x,
    datasets: [{
      backgroundColor: barColors,
      data: y
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "World Wide Wine Production 2018"
    },
    plugins: {
      legend: {
        display: false
      }
    },
  }
});


// fancybox
$('[data-fancybox="gallery1"]').fancybox({
  loop: true,
});


// dycalendar
dycalendar.draw({
  target: '#dycalendar',
  type: 'month',
  dayformat: 'full',
  monthformat: 'full',
  highlighttargetdate: true,
  prevnextbutton: 'show'
})


// showResult btn
$(document).ready(function () {
  $('.info__btn').click(function (e) {
    e.preventDefault();
    if (!$('.info__form-input').toArray().some(inp => inp.checked)) {
      alert("O'z javobingizni tanlang");
      return;
    }
    $.each($('.info__form .result-bar'), function (ind, elem) {
      $(elem).removeClass('d-none');
    });
    $.each($('.info__form-input'), function (ind, elem) {
      $(elem).css('disabled', true);
    });
    this.disabled = true;
  });
});


// back-to-top btn
// When the user clicks on the button, scroll to the top of the document

$(document).ready(function () {
  $('.back-to-top').click(function (e) {
    e.preventDefault();
    $(document.body).scrollTop(0);
    $(document.documentElement).scrollTop(0);
  });
  
  $(window).scroll(function () {
    if ($(document.body).scrollTop() > 100 || $(document.documentElement).scrollTop() > 100) {
      $('.back-to-top').css('display', 'block');
    } else {
      $('.back-to-top').css('display', 'none');
    }
  });
});