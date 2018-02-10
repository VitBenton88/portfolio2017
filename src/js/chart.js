$(window).load( () => {

    // chart JS START --------------
    const htmlData = 70;
    const cssData = 70;
    const bootsrapData = 45;
    const jsData = 50;
    const reactData = 50;
    const jqueryData = 50;
    const respDes = 55;
    const ajaxData = 50;
    const firebaseData = 30;
    const mySQLdata = 35;
    const nodeData = 40;
    const expressData = 40;
    const handlebarsData = 35;
    const MongoDBData = 30;
    const photoshopData = 70;

    const frontEndData = [htmlData, cssData, bootsrapData, jsData, jqueryData, reactData, respDes, photoshopData];
    const backEndData = [ajaxData, nodeData, expressData, handlebarsData, firebaseData, mySQLdata, MongoDBData];

    let barChartOrientation = 'bar';
    const frontendLabels = ["HTML5", "CSS3", "Bootstrap", "Javascript", "jQuery", "React.JS", "Responsive Design", "Abode Photoshop"];
    const backendLabels = ["AJAX", "Node.js", "Express.js", "Handlebars.js", "Google Firebase", "mySQL", "MongoDB"];
    const ctxFrontend = $("#frontendCanvas");
    const ctxBackend = $("#backendCanvas");
    const chartOptions = {
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


    const myFrontendChart = () => { //created inside function to be able to called at scroll later
        new Chart(ctxFrontend, {
            type: barChartOrientation,
            data: {
                labels: frontendLabels,
                datasets: [{
                    data: frontEndData,
                    backgroundColor: returnColorData('rgba(207, 99, 121, 0.4)', frontEndData.length),
                    borderColor: returnColorData('rgba(227,76,38,1)', frontEndData.length),
                    borderWidth: 2
                }]
            },
            options: chartOptions
        });
    };

    const myBackendChart = () => { //created inside function to be able to called at scroll later
        new Chart(ctxBackend, {
            type: barChartOrientation,
            data: {
                labels: backendLabels,
                datasets: [{
                    data: backEndData,
                    backgroundColor: returnColorData('rgba(34, 34, 34, 0.8)', backEndData.length),
                    borderColor: returnColorData('rgba(0,0,0,1)', backEndData.length),
                    borderWidth: 2
                }]
            },
            options: chartOptions
        });
    };

    //code for loading graph at scroll

    let backendInView = false;
    let frontendInView = false;

    isScrolledIntoView = (elem) => //function for determining if HTML element is scrolled into view
    {
        const docViewTop = $(window).scrollTop();
        const docViewBottom = docViewTop + $(window).height();

        const elemTop = $(elem).offset().top;
        const elemBottom = elemTop + $(elem).height();

        return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
    }

    $(window).scroll( () => { //load front-end chart when section is in viewport
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

    $(window).scroll( () => { //load back-end chart when section is in viewport
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

    returnColorData = (String, Num) => {

        const data = [];

        for (let i = 0; i < Num; i++) {
            data.push(String);
        }

        return data;
    }

    //--------------------------------END OF code for loading graph at scroll

    //----------------------------------------------------------------END OF .load SCRIPT
});
