// Get the modal
$( function() {

	$(".close, .let-reset").click(function(){
		$("#labmedia-modal").css("display", "none");
		$(".content-json").html("");
	});


	$(".let-select").click(function(){
		$("#labmedia-modal").css("display", "block");

		$header = $(this).find(".to-modal-header").text();
		$(".head-in-modal").text($header);
		$data_url = $(this).find(".data").text();
		
		


		

		

			 $.ajax(
			        $data_url, {
			            type: 'GET',
			            dataType: 'json',
			            beforeSend: function(xhr) {

			            },
			            complete: function(resp) {
			            	console.log(resp.responseJSON);
			            	$modal_data="";

				            if($data_url == "/data/persons.json"){
				            	$modal_data = "";
				            	resp.responseJSON.forEach(function(item, i, arr) {
				            		$number = i+1;
				            		$modal_data = $modal_data + "<span class'id-person' style='display:none;'>"+item.id+"</span> " + $number + " - " + item.lastname + " " + item.middlename + " " + item.firstname + " (" + item.birthday + ")<hr/>";

				            	});
				            	$(".content-json").html($modal_data);
				            }

				            if($data_url == "/data/positions.json"){
				            	$modal_data = "";
				            	resp.responseJSON.forEach(function(item, i, arr) {
				            		$number = i+1;
				            		$modal_data = $modal_data + "<span class'id-position' style='display:none;'>"+item.id+"</span> " + $number + " - " + item.name + " (" + item.min_age + " - " + item.max_age + " лет)<hr/>";

				            	});
				            	$(".content-json").html($modal_data);
				            }

  							if($data_url == "/data/orgs.json"){
				            	$modal_data = "";
				            	resp.responseJSON.forEach(function(item, i, arr) {
				            		$number = i+1;
				            		$modal_data = $modal_data + "<span class'id-position' style='display:none;'>"+item.id+"</span> " + $number + " - " + item.name + " (" + item.country + ") <hr/>";

				            	});
				            	$(".content-json").html($modal_data);
				            }

			            	
			            	if($data_url == "/data/subs.json"){
				            	$modal_data = "";
				            	resp.responseJSON.forEach(function(item, i, arr) {
				            		$number = i+1;
				            		$modal_data = $modal_data + "<span class'id-position' style='display:none;'>"+item.id+"</span> " + $number + " - " + item.name + "<span class'id-position' style='display:none;'>" + item.org_id + "</span><hr/>";

				            	});
				            	$(".content-json").html($modal_data);
				            }










			                
			            },
			            error: function(jqXHR, textStatus, errorThrown) {
			                console.log(textStatus);
			            }
			        }
			    );



		
	});

});


