$(document).ready(function(){
    $("#btnSubmit").on("click", function(e) {
        e.preventDefault();
        console.log($("#txtDate").val());
        //process text
        getPSI($("#txtDate").val());
        //call Ajax by sending the text data
        
    });
    //our PSI function 
    //internally we will call it Ajax function
    function getPSI(datetime = ""){
        console.log("sending psi data request ");
        var params = {
            url: https://api.data.gov.sg/v1/environment/psi?datetime=${datetime},
            method: "GET",
            timeout: 0,

        };
        //process our params and change HTML content
        $.ajax(params).done(function (data){
            console.log("API status: " + data.api_info.status);
            const readings = data.items[0].readings;
            //PM10 readings 
            var reading_pm10 = readings.pm10_twenty_four_hourly;
            //reset content
            content = "";
            
            //utilising jQuery loop feature
            $.each(reading_pm10, function (key, obj) {
            console.log(PM10: ${key} : ${obj});
            content += ${key} : ${obj} <br/>;
            });  
            $("#pm10-twenty-four-hourly").html(content);

            //24hr reading updates 
            var reading_twenty_four = readings.psi_twenty_four_hourly;
            var content = "";
            $.each(reading_twenty_four, function (key, obj) {
                console.log(key + ": "+ obj);
                content += key + ": "+ obj + "<br/>";
            });
            $("#psi-twenty-four-hourly").html(content);

            //store info as local storage
            localStorage.setItem("three_hourly", JSON.stringify(reading_twenty_four));
                
        });
    }    
})