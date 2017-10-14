$(window).load(function() {

    // chart JS START --------------
    var htmlData = 70;
    var cssData = 70;
    var bootsrapData = 40;
    var jsData = 40;
    var jqueryData = 50;
    var respDes = 50;
    var ajaxData = 50;
    var firebaseData = 30;
    var mySQLdata = 30;
    var nodeData = 40;
    var expressData = 30;
    var handlebarsData = 30;
    var photoshopData = 70;

    var frontEndData = [htmlData, cssData, bootsrapData, jsData, jqueryData, photoshopData, respDes];
    var backEndData = [ajaxData, firebaseData, mySQLdata, nodeData, expressData, handlebarsData];

    var barChartOrientation = 'bar';
    var frontendLabels = ["HTML5", "CSS3", "Bootstrap", "Javascript", "jQuery", "Abode Photoshop", "Responsive Design"];
    var backendLabels = ["AJAX", "Google Firebase", "mySQL", "Node.js", "Express.js", "Handlebars.js"];
    var ctxFrontend = $("#frontendCanvas");
    var ctxBackend = $("#backendCanvas");
    var chartOptions = {
        tooltips: {
            enabled: false
        },
        hover: {
            mode: null
        },
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                display: false,
                ticks: {
                    beginAtZero: true,
                    fontSize: 12
                },
            }],
            xAxes: [{
                display: true,
                ticks: {
                    beginAtZero: true,
                    fontSize: 16
                },
            }],
        }
    };

    if (window.matchMedia('(max-width: 599px)').matches) { //mobile chart
        barChartOrientation = 'horizontalBar';
        chartOptions.scales.yAxes[0].display = true;
        chartOptions.scales.xAxes[0].display = false;
    };


    var myFrontendChart = function() { //created inside function to be able to called at scroll later
        new Chart(ctxFrontend, {
            type: barChartOrientation,
            data: {
                labels: frontendLabels,
                datasets: [{
                    data: frontEndData,
                    backgroundColor: [
                        'rgba(207, 99, 121, 0.4)',
                        'rgba(207, 99, 121, 0.4)',
                        'rgba(207, 99, 121, 0.4)',
                        'rgba(207, 99, 121, 0.4)',
                        'rgba(207, 99, 121, 0.4)',
                        'rgba(207, 99, 121, 0.4)',
                        'rgba(207, 99, 121, 0.4)',
                    ],
                    borderColor: [
                        'rgba(227,76,38,1)',
                        'rgba(227,76,38,1)',
                        'rgba(227,76,38,1)',
                        'rgba(227,76,38,1)',
                        'rgba(227,76,38,1)',
                        'rgba(227,76,38,1)',
                        'rgba(227,76,38,1)',
                    ],
                    borderWidth: 2
                }]
            },
            options: chartOptions
        });
    };

    var myBackendChart = function() { //created inside function to be able to called at scroll later
        new Chart(ctxBackend, {
            type: barChartOrientation,
            data: {
                labels: backendLabels,
                datasets: [{
                    data: backEndData,
                    backgroundColor: [
                        'rgba(34, 34, 34, 0.8)',
                        'rgba(34, 34, 34, 0.8)',
                        'rgba(34, 34, 34, 0.8)',
                        'rgba(34, 34, 34, 0.8)',
                        'rgba(34, 34, 34, 0.8)',
                        'rgba(34, 34, 34, 0.8)',
                        'rgba(34, 34, 34, 0.8)',
                    ],
                    borderColor: [
                        'rgba(0,0,0,1)',
                        'rgba(0,0,0,1)',
                        'rgba(0,0,0,1)',
                        'rgba(0,0,0,1)',
                        'rgba(0,0,0,1)',
                        'rgba(0,0,0,1)',
                        'rgba(0,0,0,1)',
                    ],
                    borderWidth: 2
                }]
            },
            options: chartOptions
        });
    };

    //code for loading graph at scroll

    var backendInView = false;
    var frontendInView = false;

    function isScrolledIntoView(elem) //function for determining if HTML element is scrolled into view
    {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
    }

    $(window).scroll(function() { //load front-end chart when section is in viewport 
        if (isScrolledIntoView($('#frontendCanvas'))) {
            if (frontendInView) {
                return;
            }
            frontendInView = true;
            myFrontendChart();
        } else {
            frontendInView = false;
        }
    });

    $(window).scroll(function() { //load back-end chart when section is in viewport 
        if (isScrolledIntoView($('#backendCanvas'))) {
            if (backendInView) {
                return;
            }
            backendInView = true;
            myBackendChart();
        } else {
            backendInView = false;
        }
    });

    //--------------------------------END OF code for loading graph at scroll

    //----------------------------------------------------------------END OF .load SCRIPT	
});