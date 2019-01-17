// Get the modal
$( function() {

	$(".close").click(function(){
		$("#labmedia-modal").css("display", "none");
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
				            if($data_url == "/data/persons.json"){
				            	$modal_data = "";
				            	resp.responseJSON.forEach(function(item, i, arr) {
				            		$number = i+1;
				            		$modal_data = $modal_data + "<span class'id-person' style='display:none;'>"+item.id+"</span>" + $number + " - " + item.lastname + " " + item.middlename + " " + item.firstname + " (" + item.birthday + ")<hr/>";

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


