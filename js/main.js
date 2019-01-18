function click_position( thisis ){
	thisis.parent().find(".active").removeClass("active");
	thisis.addClass("active");
	
}




$( function() {

	$(".close, .let-reset").click(function(){
		$("#labmedia-modal").css("display", "none");
		$(".content-json").html("");
	});


	$(".remove").click(function(){
		if(confirm("Удалить?")){
			$(this).addClass("unvisible");
			$(this).parent().find(".selected-text").html("");
		}
		
	});

	$(".let-select").click(function(){

		$("#labmedia-modal").css("display", "block");
		$selected = $(this).parent().find(".selected");

		$selected_text = $(this).parent().find(".selected-text");
		$header = $(this).find(".to-modal-header").text();
		$(".head-in-modal").text($header);
		$data_url = $(this).find(".datas").text();
		
		
		$(".let-ok").unbind("click");
		$(".let-ok").click(function(){
			$selected_item = $(this).parent().find(".active").html();

			if($(this).parent().find(".active")[0]){

				$selected.find(".remove").removeClass("unvisible");


				$selected_text.html($selected_item);
				$(".close").click();
			}else{
				alert("Вы не выбрали!");
			}



			

		});
		

		$th = $(this);

			 $.ajax(
			        $data_url, {
			            type: 'GET',
			            dataType: 'json',
			            beforeSend: function(xhr) {

			            },
			            complete: function(resp) {
			            
			            	$modal_data="";

				            if($data_url == "/data/persons.json"){
				            	$modal_data = "";

				            	$sort_persons = Array();
				            	resp.responseJSON.forEach(function(item, i, arr) {
				            		$sort_persons.push([item.lastname + " " + item.middlename + " " + item.firstname + " " + item.birthday , arr[i] ]  );
				            	});

				            	$sp = $sort_persons.sort();

				         		$th_id = $th.parent().find(".id-person").text();

				            	$sp.forEach(function(item, i, arr) {
				            		$number = i+1;
				            		$act = "";
				            		
				            		
				            		if(item[1].id == $th_id){
				            			$act = "active";
				            		}
				            		$modal_data = $modal_data + "<span onclick='click_position($(this));' class='linen " + $act + "' ><span class='id-person' style='display:none;'>"+item[1].id+"</span> " + $number + " - " + item[1].lastname + " " + item[1].middlename + " " + item[1].firstname + " (" + item[1].birthday + ")</span><hr/>";
								
								});

				            	$(".content-json").html($modal_data);
				            }

				            if($data_url == "/data/positions.json"){
				            	$modal_data = "";

								$sort_positions = Array();
				            	resp.responseJSON.forEach(function(item, i, arr) {
				            		$sort_positions.push([item.name , arr[i] ]  );
				            	});

				            	$sp = $sort_positions.sort();
				      
				         		$th_id = $th.parent().find(".id-position").text();



				            	$sp.forEach(function(item, i, arr) {
				            		$number = i+1;
				            		$act = "";
				            		
				            		
				            		if(item[1].id == $th_id){
				            			$act = "active";
				            		}
				            		$modal_data = $modal_data + "<span onclick='click_position($(this));' class='linen " + $act + "' ><span class='id-position' style='display:none;'>"+item[1].id+"</span> " + $number + " - " + item[1].name + " (" + item[1].min_age + " - " + item[1].max_age + " лет)</span><hr/>";

				            	});
				            	$(".content-json").html($modal_data);
				            }

  							if($data_url == "/data/orgs.json"){
				            	$modal_data = "";

								$sort_orgs = Array();
				            	resp.responseJSON.forEach(function(item, i, arr) {
				            		$sort_orgs.push([item.name + item.country , arr[i] ]  );
				            	});

				            	$sp = $sort_orgs.sort();

				         		$th_id = $th.parent().find(".id-org").text();


				            	$sp.forEach(function(item, i, arr) {
				            		$number = i+1;
				            		$act = "";
				            		
				            		
				            		if(item[1].id == $th_id){
				            			$act = "active";
				            		}
				            		$modal_data = $modal_data + "<span onclick='click_position($(this));' class='linen " + $act + "' ><span class='id-org' style='display:none;'>"+item[1].id+"</span> " + $number + " - " + item[1].name + " (" + item[1].country + ") </span><hr/>";

				            	});
				            	$(".content-json").html($modal_data);
				            }

			            	
			            	if($data_url == "/data/subs.json"){
				            	$modal_data = "";

								$sort_subs = Array();
				            	resp.responseJSON.forEach(function(item, i, arr) {
				            		$sort_subs.push([item.name , arr[i] ]  );
				            	});

				            	$sp = $sort_subs.sort();

				         		$th_id = $th.parent().find(".id-sub").text();


				          
				            	$sp.forEach(function(item, i, arr) {
				            		$number = i+1;
				            		$act = "";
				            		
				            		
				            		if(item[1].id == $th_id){
				            			$act = "active";
				            		}
				            		$modal_data = $modal_data + "<span onclick='click_position($(this));' class='linen " + $act + "' ><span class='id-sub' style='display:none;'>"+item[1].id+"</span> " + $number + " - " + item[1].name + "<span class'id-position-key' style='display:none;'>" + item[1].org_id + "</span></span><hr/>";

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


