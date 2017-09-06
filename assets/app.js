$( window ).load(function() {

// chart JS START --------------
	var htmlData = 70;
	var cssData = 70;
	var bootsrapData = 40;
	var jsData = 40;
	var jqueryData = 50;
	var ajaxData = 50;
	var firebaseData = 30;

	var barChartOrientation = 'bar'; 
	var yAxisDisplay = false;
	var xAxisDisplay = true;
	var chartLabels = ["HTML5", "CSS3", "Bootstrap", "Javascript", "jQuery", "AJAX", "Google Firebase"];
	var ctx = $("#myChart");

	if (window.matchMedia('(max-width: 768px)').matches){
    	barChartOrientation = 'horizontalBar';
    	var yAxisDisplay = true;
		var xAxisDisplay = false;
	}

	else if (window.matchMedia('(min-width: 768px)').matches){
		barChartOrientation = 'bar';
		var yAxisDisplay = false;
		var xAxisDisplay = true
	};

	var myChart = function(){//created inside function to be able to called at scroll later
		new Chart(ctx, {
		    type: barChartOrientation,
		    data: {
		        labels: chartLabels,
		        datasets: [{
		            data: [htmlData, cssData, bootsrapData, jsData, jqueryData, ajaxData, firebaseData],
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
		    options: {
		    	tooltips: {enabled: false},
	    		hover: {mode: null},
		    	legend: {
	        		display: false
	    		},
		        scales: {
		            yAxes: [{
		            	display: yAxisDisplay,
		                ticks: {
		                    beginAtZero:true
		                },
		            }],
		            xAxes: [{
	            		display: xAxisDisplay,
	            		ticks: {
		                    beginAtZero:true
		                },
	          		}],
		        }
		    }
		});
	};

	//code for loading graph at scroll

	var inView = false;

	function isScrolledIntoView(elem)
	{
	    var docViewTop = $(window).scrollTop();
	    var docViewBottom = docViewTop + $(window).height();

	    var elemTop = $(elem).offset().top;
	    var elemBottom = elemTop + $(elem).height();

	    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
	}

	$(window).scroll(function() {
	    if (isScrolledIntoView($('canvas'))) {
	        if (inView) { return; }
	        inView = true;
	        myChart();
	    } else {
	        inView = false;  
	    }
	});

	//--------------------------------END OF code for loading graph at scroll

// chart JS END --------------



  //----------------------------------------------------------------END OF .load SCRIPT	
});