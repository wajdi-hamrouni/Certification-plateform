
console.log("main connected")

var createCertificate = function(){
 var name = $('#student-name').val()
 console.log(name);
 $('.person').innerHTML = name
 request.create(name,(res)=>{
     console.log(res)
 })
}

$('#create').on('click',()=>{
    createCertificate()
})