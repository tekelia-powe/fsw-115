axios.get("https://api.vschool.io/tekeliapowe/todo")
    .then(response => {
        for(let i=0; i < response.data.length; i++){
            const h1 = document.createElement('h1')
            h1.textContent = response.data[i].title
            const h2 = document.createElement('h1')
            h2.textContent = response.data[i].completed
            if(response.data[i].completed==true){
                h1.style.textDecoration = "line-through";
            }
            var att = document.createAttribute("class");
            att.value = "main";
            h1.setAttributeNode(att);
            document.body.appendChild(h1)
            

        }


    })
    .catch (error => console.log(error))