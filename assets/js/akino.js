// $(function () {
  
//     $("input[name='prop']").on("change", function() {
    
//         let prop = $("input[name='prop']").prop("disabled");

//         if(prop) {
//             $("#checkBtn").prop("disabled", true);
//         } else{
//             $("#checkBtn").prop("disabled", true);
//         }
        
//     })
// })

$(function () {
    $("#check-box").on("change", function () {
        $(".check-btn").prop("disabled", false);
    })
})