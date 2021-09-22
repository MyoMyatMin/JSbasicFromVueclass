let getJson = async () =>{
    let response = await fetch("mm.json")
    if(response.status === 404){
        throw new Error("Unavailable");
    }
    let datas = await response.json();
    return datas;
}
getJson()
.then((datas)=>{
    console.log(datas);
})
.catch((err)=>{
    console.log(err.message)
})