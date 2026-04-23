async function api(){
    let data=await fetch("https://corporatebs-generator.sameerkumar.website/")
    let fd=await data.json();
    let result=fd.phrase
    document.getElementById('res').innerHTML=result

}
