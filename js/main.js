"use strict";





function let_work_function($data_url, resp, $th){
			            
			            var	$modal_data="";
			            
				            if($data_url == "data/persons.json"){
				            	$modal_data = "";
				            	
				            	var $sort_persons = Array();
				            	resp.forEach(function(item, i, arr) {
				            		$sort_persons.push([item.lastname + " " + item.middlename + " " + item.firstname + " " + item.birthday , arr[i] ]  );
				            	});

				            	var $sp = $sort_persons.sort();

				         		var $th_id = $th.parent().find(".id-person").text();

									var $ages = $("#position").find(".ages").text();
									var $ages_arr;
									if($ages){
										$ages_arr = $ages.split("-");
									}else{
										$ages_arr = Array( 0, 200);
									}
				            		
									var $number; 
									var $act;
									var $date_arr;
									var $birthday;
									var $now;
									var $delta_year;
									var $block;
				            	$sp.forEach(function(item, i, arr) {
				            		$number = i+1;
				            		$act = "";
				            		
				            		$date_arr = item[1].birthday.split(".");
				            		$birthday = new Date($date_arr[2], $date_arr[1], $date_arr[0]);
				            		$now = new Date();
				            		
				            		$delta_year = $now.getFullYear() - $birthday.getFullYear();


				            		$block = "stop";
				            		if($delta_year > $ages_arr[0] && $delta_year < $ages_arr[1]){
				            				$block = "";
				            		}

				            		if(item[1].id == $th_id){
				            			$act = "active";
				            		}
				            		$modal_data = $modal_data + "<span class='linen " + $block + " " + $act + "' ><span class='id-person' style='display:none;'>"+item[1].id+"</span> " + $number + " - " + item[1].lastname + " " + item[1].middlename + " " + item[1].firstname + " (" + item[1].birthday + ")<span class='age' style='display:none'>" + $delta_year + "</span></span><hr/>";
								
								});

				            	$(".content-json").html($modal_data);
				            	$(".linen").unbind("click");
				            	$(".linen").click(function(){
				            		if($(this).hasClass("stop")){
				            			alert("Сотрудник не подходит по возрасту!");
				            			return false;
				            		}else{
				            			$(this).parent().find(".active").removeClass("active");
										$(this).addClass("active");
				            		}

				            	});
				            }

				            if($data_url == "data/positions.json"){
				            	var $modal_data = "";
				            	
								var $sort_positions = Array();
				            	resp.forEach(function(item, i, arr) {
				            		$sort_positions.push([item.name , arr[i] ]  );
				            	});

				            	var $sp = $sort_positions.sort();
				      
				         		var $th_id = $th.parent().find(".id-position").text();
				         		var $delta_year_obj = $("#person").find(".age");
				         		//console.log($delta_year_obj.length);
				         		var $delta_year = $("#person").find(".age").text();
			


								var $number;
								var $act;
								var $block
				            	$sp.forEach(function(item, i, arr) {
				            		$number = i+1;
				            		$act = "";
				            		
				            		$block = "";

				            			if($delta_year_obj.length > 0){
					            			if($delta_year < item[1].min_age || $delta_year > item[1].max_age){
					            				$block = "stop";
					            			}
					            		}
				            	


				            		if(item[1].id == $th_id){
				            			$act = "active";
				            		}
				            		$modal_data = $modal_data + "<span class='linen " + $block + " " + $act + "' ><span class='id-position' style='display:none;'>"+item[1].id+"</span> " + $number + " - " + item[1].name + " (" + item[1].min_age + " - " + item[1].max_age + " лет)<span class='ages' style='display:none'>" + item[1].min_age + "-" + item[1].max_age + "</span></span><hr/>";

				            	});
				            	$(".content-json").html($modal_data);

				            	$(".linen").unbind("click");
				            	$(".linen").click(function(){
				            		if($(this).hasClass("stop")){
				            			if (confirm("Действительно ли Вы хотите назначить сотрудника на данную должность? Дело в том, что он не проходит рекомендации по возрасту!")){
				            				$(this).parent().find(".active").removeClass("active");
											$(this).addClass("active");
				            			}else{
				            				return false;
				            			}
				            			
				            		}else{
				            				$(this).parent().find(".active").removeClass("active");
											$(this).addClass("active");
				            		}

				            	});
				            }

  							if($data_url == "data/orgs.json"){
				            	var $modal_data = "";
				            	
								var $sort_orgs = Array();
				            	resp.forEach(function(item, i, arr) {
				            		$sort_orgs.push([item.name + item.country , arr[i] ]  );
				            	});

				            	var $sp = $sort_orgs.sort();

				         		var $th_id = $th.parent().find(".id-org").text();

				         		var $number;
				         		var $act;
				            	$sp.forEach(function(item, i, arr) {
				            		$number = i+1;
				            		$act = "";
				            		
				            		
				            		if(item[1].id == $th_id){
				            			$act = "active";
				            		}
				            		$modal_data = $modal_data + "<span  class='linen " + $act + "' ><span class='id-org' style='display:none;'>"+item[1].id+"</span> " + $number + " - " + item[1].name + " (" + item[1].country + ") </span><hr/>";

				            	});
				            	$(".content-json").html($modal_data);
				            	$(".linen").unbind("click");
				            	$(".linen").click(function(){
				            		if($("#sub").find(".id-sub").text()){
				            			alert("Удалите сначала подразделение!");
				            			return false;
				            		}else{
				            			$(this).parent().find(".active").removeClass("active");
										$(this).addClass("active");
				            		}

				            	});
				            }

			            	
			            	if($data_url == "data/subs.json"){
				            	var $modal_data = "";
				            	
								var $sort_subs = Array();


								var $id_org = $("#org").find(".id-org").text();

				            	resp.forEach(function(item, i, arr) {
				            		if ($id_org == arr[i].org_id){
				            			$sort_subs.push([item.name , arr[i] ]  );
				            		}
				            		
				            	});

				            	var $sp = $sort_subs.sort();

				         		var $th_id = $th.parent().find(".id-sub").text();


				          		var $count = 0;
				          		var $number;
				          		var $act;
				            	$sp.forEach(function(item, i, arr) {
				            		$number = i+1;
				            		$act = "";
				            		
				            		$count++;
				            		if(item[1].id == $th_id){
				            			$act = "active";
				            		}
				            		$modal_data = $modal_data + "<span  class='linen " + $act + "' ><span class='id-sub' style='display:none;'>"+item[1].id+"</span> " + $number + " - " + item[1].name + "<span class'id-position-key' style='display:none;'>" + item[1].org_id + "</span></span><hr/>";

				            	});
				            	if($count == 0){
				            		$modal_data = "<h2>Не выбрана организация!</h2>";
				            	}
				            	$(".content-json").html($modal_data);
				            }
			                
			            }

$( function() {
		$( "#labmedia-modal" ).on( "click", ".close, .let-reset", function() {
		$("#labmedia-modal").css("display", "none");
		$(".content-json").html("");
		$(".active-selected").removeClass("active-selected");
		$(".active-selected-text").removeClass("active-selected-text");
		
	});

	$(".remove").click( function() {

			$(this).addClass("unvisible");
			$(this).parent().find(".selected-text").html("");

		
	});

	$( "#labmedia-modal" ).on( "click", ".linen", function() {

			$(this).parent().find(".active").removeClass("active");
			$(this).addClass("active");
	

		});


		$( "#labmedia-modal" ).on( "click", ".let-ok", function() {
			var $selected_item = $( "#labmedia-modal" ).find(".active").html();
	
			if($( "#labmedia-modal" ).find(".active")[0]){

				$(".active-selected").find(".remove").removeClass("unvisible");

				$(".active-selected-text").html($selected_item);
				$(".close").click();
			}else{
				alert("Вы не выбрали!");
			}
			
		});

	$(".let-select").click(function(){


		 $("#labmedia-modal").html("<div class='modal-content'><span class='close'>&times;</span><div class='head-in-modal'></div><div class='content-json'></div><div class='let-ok'>OK</div><div class='let-reset'>Отмена</div></div>");

		$("#labmedia-modal").css("display", "block");
		var $selected = $(this).parent().find(".selected").addClass("active-selected");

		var $selected_text = $(this).parent().find(".selected-text").addClass("active-selected-text");
		var $header = $(this).find(".to-modal-header").text();
		$(".head-in-modal").text($header);
		var $data_url = $(this).find(".datas").text();
		
		


		
		var resp;
		if($data_url == "data/persons.json"){
			resp = $persons;
		}
		if($data_url == "data/positions.json"){
			resp = $positions;
		}
		if($data_url == "data/orgs.json"){
			resp = $orgs;
		}
		if($data_url == "data/subs.json"){
			resp = $subs;
		}

		var $th = $(this);

		
			let_work_function($data_url, resp, $th);
		
		
	});

});