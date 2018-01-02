function scroll(){
 $(".content ul").animate({"margin-left":"-224px"},
                          function(){
  $(".content ul li:eq(0)").appendTo($(".content ul"))
  $(".content ul").css({"margin-left":0})
 })
 }
 setInterval(scroll,1000)