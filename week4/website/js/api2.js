axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then(response => {
        for(let i=0; i < response.data.meals.length; i++){
            const h1 = document.createElement('h1')
            h1.textContent = response.data.meals[i].strMeal
            var att = document.createAttribute("class");
            att.value = "main";
            h1.setAttributeNode(att);
            document.body.appendChild(h1)

            const h2 = document.createElement('h2')
            const img = document.createElement('img')
            
            img.textContent = response.data.meals[i].strMealThumb
            img.setAttribute("src", response.data.meals[i].strMealThumb);
            img.setAttribute("width", "304");
            img.setAttribute("height", "228");
            
            
            

            var att = document.createAttribute("class");
            att.value = "main";
           
           
            
            document.body.appendChild(h2)
            document.body.appendChild(img);
            /* document.body.appendChild(i1)
            document.body.appendChild(i2)
            document.body.appendChild(i3)
            document.body.appendChild(i4)
            document.body.appendChild(i5)
            document.body.appendChild(i6)
            document.body.appendChild(i7)
            document.body.appendChild(i8)
            document.body.appendChild(i9)
            document.body.appendChild(i10)
            document.body.appendChild(i11)
            document.body.appendChild(i12)
            document.body.appendChild(i13)
            document.body.appendChild(i14)
            document.body.appendChild(i15) */
        }


    })
    .catch (error => console.log(error))