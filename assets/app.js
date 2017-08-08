$( window ).load(function() {

// chart JS START --------------
	var htmlData = 80;
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

	var myChart = new Chart(ctx, {
	    type: barChartOrientation,
	    data: {
	        labels: chartLabels,
	        datasets: [{
	            data: [htmlData, cssData, bootsrapData, jsData, jqueryData, ajaxData, firebaseData],
	            backgroundColor: [
	                'rgba(237, 95, 40, 0.4)',
	                'rgba(40, 171, 226, 0.4)',
	                'rgba(86, 61, 124, 0.4)',
	                'rgba(247, 223, 30, 0.4)',
	                'rgba(20, 43, 70, 0.4)',
	                'rgba(255, 255, 255, 0.4)',
	                'rgba(255, 203, 43, 0.4)',
	            ],
	            borderColor: [
	                'rgba(227,76,38,1)',
	                'rgba(0, 113, 188, 1)',
	                'rgba(255, 255, 255, 1)',
	                'rgba(0, 0, 0, 1)',
	                'rgba(255, 255, 255, 1)',
	                'rgba(40, 171, 226, 1)',
	                'rgba(245, 130, 12, 1)',
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
// chart JS END --------------


// smoothScroll START --------------

	var $root = $('html, body'); 

	$('a').click(function(){
    $root.animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

// smoothScroll END --------------

  //----------------------------------------------------------------END OF .load SCRIPT	
});