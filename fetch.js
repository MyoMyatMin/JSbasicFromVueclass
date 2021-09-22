fetch("mm.json")
.then((response)=>{
    if(response.status === 404){
        throw new Error("unavailable")
    }
    return response.json();
   
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err.message);
})