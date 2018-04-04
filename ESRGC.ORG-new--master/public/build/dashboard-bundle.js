webpackJsonp([0],{

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

//app entry point

React.createElement("script", { src: "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js" });
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [{
      data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
      lineTension: 0,
      backgroundColor: 'transparent',
      borderColor: '#007bff',
      borderWidth: 4,
      pointBackgroundColor: '#007bff'
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: false
        }
      }]
    },
    legend: {
      display: false
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(52)))

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(142);
module.exports = __webpack_require__(141);


/***/ })

},[363]);
//# sourceMappingURL=dashboard-bundle.js.map