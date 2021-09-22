let getTodos = (resource) =>{
    return new Promise((resolve,reject)=>{
        let request = new XMLHttpRequest();
        request.addEventListener("readystatechange",()=>{
            if(request.readyState === 4 && request.status===200){
                let datas = JSON.parse(request.responseText);
          // callback(datas,undefined);
                resolve(datas);
            }else if(request.status === 404){
              // callback(undefined,"Wrong address")
              reject("wrong");
            }
        })
        request.open("GET",resource);
        request.send();
    })
    
}
getTodos("mm.json")
.then((data)=>{
    console.log(data);
    /* getTodos("mm1.json")
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err)
    }) */
    return getTodos("mm1.json");
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
});