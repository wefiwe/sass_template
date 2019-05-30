$(function () {
  
    $("input[name = 'is']").on("change", function() {
        
        let changeBtn = $(this).prop("disabled");

        if(changeBtn) {
            $(".checkbtn").prop("disabled", false);
            console.log("AAA")
        } else{
            $(".checkbtn").prop("disabled", true);
        }
        
    })

    


})