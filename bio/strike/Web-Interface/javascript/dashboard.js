window.onload = function()
{
	this.popup_collection = new Popup('widget_collection');
	this.popup_dilution = new Popup('widget_dilution');
	this.popup_inoculation = new Popup('widget_inoculation');
	this.popup_incubation_1 = new Popup('widget_incubation_1');
	this.popup_identification = new Popup('widget_identification');
	
	increment(document.getElementById("user_points"), 0, 1337, 1000);
	increment(document.getElementById("group_biostrikesg_points"), 0, 9777, 1000);
	increment(document.getElementById("group_lobservatoire_points"), 0, 1425, 1000);
	
	var chart_agar_data =
	{
		labels: [],
		datasets : [
			{
				fillColor : "rgba(172,194,132,0.4)",
				strokeColor : "#ACC26D",
				pointColor : "#fff",
				pointStrokeColor : "#9DB86D",
				data : []
			}
		]
	};
	
	var chart_ecoli_data =
	{
		labels: [],
		datasets : [
			{
				fillColor : "rgba(172,194,132,0.4)",
				strokeColor : "#ACC26D",
				pointColor : "#fff",
				pointStrokeColor : "#9DB86D",
				data : []
			}
		]
	};
	
	var chart_analysis_data =
	{
		labels: [],
		datasets : [
			{
				fillColor : "rgba(172,194,132,0.4)",
				strokeColor : "#ACC26D",
				pointColor : "#fff",
				pointStrokeColor : "#9DB86D",
				data : []
			}
		]
	};
	
	var y = 0;
	
	for (var i = 0; i < 20; i ++)
	{
		chart_agar_data.labels.push("");
		chart_agar_data.datasets[0].data.push(y += Math.random() * 10 - 5);
		chart_ecoli_data.labels.push("");
		chart_ecoli_data.datasets[0].data.push(y += Math.random() * 10 - 5);
		chart_analysis_data.labels.push("");
		chart_analysis_data.datasets[0].data.push(y += Math.random() * 10 - 5);
	}
	
	var chart_agar = document.getElementById('chart_agar').getContext('2d');
	new Chart(chart_agar).Line(chart_agar_data);
	var chart_ecoli = document.getElementById('chart_ecoli').getContext('2d');
	new Chart(chart_ecoli).Line(chart_ecoli_data);
	var chart_analysis = document.getElementById('chart_analysis').getContext('2d');
	new Chart(chart_analysis).Line(chart_analysis_data);
};

