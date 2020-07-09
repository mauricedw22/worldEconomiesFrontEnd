var country;

$(document).ready(function(){
  // fetch all DOM elements for the input
  country = document.getElementById("country");
  // alert('JQUERY BABY')
  //feature2_ = document.getElementById("feature2");
  //feature3_ = document.getElementById("feature3");
  
  $('#submit').on('click', function(e){
    // on clicking submit fetch values from DOM elements and use them to make request to our flask API
    var country1 = country.value;
	// alert(country1)
    //var feature2 = feature2_.value;
    //var feature3 = feature3_.value;
    if(country1 == ""){
      // you may allow it as per your model needs
      // you may mark some fields with * (star) and make sure they aren't empty here
      alert("empty fields not allowed or your country is not top 50 nominal GDP nation");
    }
    else{
      // replace <username> with your pythonanywhere username
      // also make sure to make changes in the url as per your flask API argument names
	  //alert(country1)
      var requestURL = "https://mauricedw22.pythonanywhere.com/country/?country="+country1;
      console.log(requestURL); // log the requestURL for troubleshooting
	  $.ajax({url: requestURL, success: function(result){
		$(".result").html(result);
	  }});
      /* $.getJSON(requestURL, function(data) {
		//$.each(result, function(i, field){
			console.log(data); // log the data for troubleshooting
			prediction = data; //['Unemployment_Rank']; //data['json_key_for_the_prediction'];
			//$(".result").html("Prediction is:" + prediction);
	   //});
      }); */
      // following lines consist of action that would be taken after the request has been read
      // for now i am just changing a <h2> tag's inner html using jquery
      // you may simple do: alert(prediction);
      // $(".result").html("Prediction is:" + prediction);
    }
  });
})


