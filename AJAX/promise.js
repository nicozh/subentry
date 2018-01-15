window.jQuery=function(){}
window.jQuery.ajax = function ({method,url,body,headers}){
    return new Promise(function (resolve,reject ){
        let request = new XMLHttpRequest()
        request.open(method, url)
        for(let key in headers){
          let value = headers[key]
          request.setRequestHeader(key,value)
        }
        request.onreadystatechange = ()=>{
          if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
              resolve.call(undefined,request.responseText)
            }else if(request.status >= 400){
              reject.call(undefined,request.status)
            }
          }
        }
        request.send(body)
    })
}

window.$ = window.jQuery
myButton.addEventListener('click', (e)=>{
  $.ajax(
    {
     method:'post',
     url: '/xxx',
     body:'name=taylor',
     headers: {key1:'value1',key2:'value2'},
   }
 ).then((r)=>{console.log(r)},(e)=>{console.log(e)})
})

