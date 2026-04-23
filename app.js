async function harry(){
    let data=await fetch("https://potterapi-fedeperin.vercel.app")
    let fd=await data.json();
    // let result=fd;
    document.getElementById("block").innerText=fd

}