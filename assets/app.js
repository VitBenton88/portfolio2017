$(document).ready(function() {


	//----------------------------------------------------------------END OF SCRIPT	
});


$( window ).load(function() {

	var htmlData = 80;
	var cssData = 70;
	var bootsrapData = 40;
	var jsData = 50;
	var jqueryData = 70;
	var ajaxData = 50;
	var firebaseData = 30;
	var ctx = $("#myChart");		

	var myChart = new Chart(ctx, {
	    type: 'bar',
	    data: {
	        labels: ["HTML5", "CSS3", "Bootstrap", "Javascript", "jQuery", "AJAX", "Google Firebase"],
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
	            borderWidth: 1
	        }]
	    },
	    options: {
	    	legend: {
        		display: false
    		},
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:true
	                }
	            }]
	        }
	    }
	});



  //----------------------------------------------------------------END OF SCRIPT	
});