// Get the modal
$( function() {
	$(".let-select").click(function(){
		$("#labmedia-modal").css("display", "block");
	});

	$(".close").click(function(){
		$("#labmedia-modal").css("display", "none");
	});


	$(".let-select").click(function(){
		$header = $(this).parent().find(".item-name").text();
		$(".head-in-modal").text($header);

		$data_url = $(this).attr("data");

			 $.ajax(
			        $data_url, {
			            type: 'GET',
			            dataType: 'json',
			            beforeSend: function(xhr) {

			            },
			            complete: function(resp) {

			               // console.log(resp.responseJSON);









			                
			            },
			            error: function(jqXHR, textStatus, errorThrown) {
			                console.log(textStatus);
			            }
			        }
			    );



		
	});

});


