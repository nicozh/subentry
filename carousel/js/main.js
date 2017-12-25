
var children=$('.tags>li')
for(let i=0;i<children.length;i++){
  $(children[i]).on('click',function(y){
    var i = $(y.currentTarget).index()
    var p = i*-224
    $('#images').css({
      transform: 'translate(' + p + 'px)'
    })

  let n=i  
  children.eq(n).addClass('active')
 .siblings('.active').removeClass('active')
   
  })
}

var n=0

timerId=setInterval(()=>{
   children.eq(n%6).trigger('click')
   n+=1
},1000)

$('#window').on('mouseenter', function() {
  window.clearInterval(timerId)
})

$('#window').on('mouseleave', function() {
  timerId=setInterval(()=>{
  children.eq(n%6).trigger('click')
  n+=1
},1000)
  
})

