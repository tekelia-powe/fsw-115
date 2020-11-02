async function getData(){
    
    try {
        const response = await axios.get("https://rickandmortyapi.com/api/character/1,2,7,25,38,59")
        
        //showResults(location, response)
        for(let i=0; i < response.data.length; i++){
        const location = await axios.get(response.data[i].location.url)
        console.log(response.data[i])
        const whichCharacter = response.data[i]
        console.log(whichCharacter)
        const origin = await axios.get(response.data[i].origin.url)
        
        showResults(location, origin, whichCharacter)
        }
    }

    catch(error){
        console.log(error)
    }
}
getData()

function showResults(location, origin, whichCharacter){
    
    let container = document.getElementById('main_container')
    let mainClass = document.createAttribute("class");
    mainClass.value = "main";
    let mainDiv = document.createElement('div')
    mainDiv.setAttributeNode(mainClass);
    //grid Div
    let gridClass = document.createAttribute("class");
    gridClass.value = "grid-item";
    let gridDiv = document.createElement('div');
    gridDiv.setAttributeNode(gridClass);

    
    //image div
    let imageClass = document.createAttribute("class");
    imageClass.value = "image";
    let imgDiv = document.createElement('div')
    imgDiv.setAttributeNode(imageClass);

    let imageClass2 = document.createAttribute("class");
    imageClass2.value = "image2";
    let imgDiv2 = document.createElement('div')
    imgDiv2.setAttributeNode(imageClass2);

    gridDiv.appendChild(imgDiv);
    gridDiv.appendChild(imgDiv2);
    gridDiv.appendChild(mainDiv);
    //images

    var characterImage = document.createElement('img')
    characterImage.setAttribute("src", `${whichCharacter.image}`);
    characterImage.setAttribute("width", "200");
    characterImage.setAttribute("height", "150");
    characterImage.setAttribute("alt", "The Pulpit Rock");
    imgDiv.appendChild(characterImage);

    var characterImage2 = document.createElement('img')
    characterImage2.setAttribute("src", `${whichCharacter.image}`);
    characterImage2.setAttribute("width", "200");
    characterImage2.setAttribute("height", "150");
    characterImage2.setAttribute("alt", "The Pulpit Rock");
    imgDiv2.appendChild(characterImage2);
    //mainDiv.appendChild(imgDiv)
    container.appendChild(gridDiv);

    const nameh1 = document.createElement('h1')
    nameh1.textContent = `Name: ${whichCharacter.name}`
    mainDiv.appendChild(nameh1)

    let h2 = document.createElement('h2')
    h2.style.color = "red"
    h2.textContent = `Status: ${whichCharacter.status}`
    mainDiv.appendChild(h2)

    h2 = document.createElement('h2')
    h2.textContent = `Location: ${location.data.name}`
    mainDiv.appendChild(h2)

    h2 = document.createElement('h2')
    h2.textContent = `Origin: ${origin.data.name}`
    mainDiv.appendChild(h2)

    
  
    
    //container.appendChild(mainDiv)
    
    
}


