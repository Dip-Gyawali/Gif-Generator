let btn = document.querySelector('.btn');
let giftext = document.querySelector('.giftext');
let content = document.querySelector('.contents');

let apiKey = "";

btn.onclick = getGifs;

async function getGifs() {
    //To get the user input in textbox and save in a variable
    content.innerHTML="";
    let searchValue = giftext.value;

    //api url which consist of apikey and search value
    let apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchValue}`;
    let response = await fetch(apiUrl);
    if(!response.ok){
        console.log("error");
    }
    let data = await response.json();
    //here data.data is used as res.json is saved in data and return callback's data key stores values
    let finalData = data.data;
    finalData.forEach((element)=>{
        let div = document.createElement("div");
        div.classList.add("gifs");

        let image = document.createElement("img");
        image.src = element.images.downsized_medium.url;

        let sourceBtn = document.createElement("button");
        sourceBtn.innerHTML="Source Of GIF";


        sourceBtn.
        sourceBtn.value = element.source;


        div.appendChild(image);
        div.appendChild(sourceBtn);
        content.appendChild(div);

        console.log(element);


        giftext.value='';
    })
}
