$(document).ready(function() {


	//----------------------------------------------------------------END OF SCRIPT	
});


$( window ).load(function() {

	var htmlData = 90;
	var cssData = 70;
	var jsData = 70;
	var ctx = $("#myChart");		

	var myChart = new Chart(ctx, {
	    type: 'bar',
	    data: {
	        labels: ["HTML5", "CSS3", "Javascript"],
	        datasets: [{
	            data: [htmlData, cssData, jsData],
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(255, 206, 86, 0.2)',
	            ],
	            borderColor: [
	                'rgba(255,99,132,1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(255, 206, 86, 1)',
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