// langs active class

const langs = document.querySelector('.langs');
const langItems = langs.querySelectorAll('.icon-btn');

langItems.forEach(item => {
  item.addEventListener('click', function() {
    for (const lang of langItems) {
      lang.classList.remove('active');
    }
    this.classList.add('active');
  })
})

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

function showResult() {
  const infoForm = document.querySelector('.info__form');
  const radioInputs = infoForm.querySelectorAll('.info__form-input');

  if (!Array.from(radioInputs).some(inp => inp.checked == true)) {
    alert('Birorta javobni tanlang');
    return;
  }

  infoForm.querySelectorAll('.result-bar').forEach(bar => {
    bar.classList.remove('d-none');
  });

  radioInputs.forEach(input => {
    input.disabled = true;
  });

  infoForm.querySelector('.info__btn').disabled = true;
}

// back-to-top btn

const backToTop = document.querySelector('.back-to-top');

// When the user clicks on the button, scroll to the top of the document
backToTop.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};