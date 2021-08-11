console.log('八连发')
const request=new XMLHttpRequest()
request.open('GET','/friends.json')
request.onreadystatechange=()=>{
    if(request.readyState===4&&request.status===200){
        console.log(request.response)
    }
}
request.send()
