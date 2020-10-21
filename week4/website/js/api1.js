axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then(response => {
        for(let i=0; i < response.data.drinks.length; i++){
            const h1 = document.createElement('h1')
            h1.textContent = response.data.drinks[i].strDrink
            var att = document.createAttribute("class");
            att.value = "main";
            h1.setAttributeNode(att);
            document.body.appendChild(h1)

            const h2 = document.createElement('h2')
            const img = document.createElement('img')
            
            img.textContent = response.data.drinks[i].strDrinkThumb
            img.setAttribute("src", response.data.drinks[i].strDrinkThumb);
            img.setAttribute("width", "304");
            img.setAttribute("height", "228");
            
            document.body.appendChild(img);

            const i1 = document.createElement('h3')
            const i2 = document.createElement('h3')
            const i3 = document.createElement('h3')
            const i4 = document.createElement('h3')
            const i5 = document.createElement('h3')
            const i6 = document.createElement('h3')
            const i7 = document.createElement('h3')
            const i8 = document.createElement('h3')
            const i9 = document.createElement('h3')
            const i10 = document.createElement('h3')
            const i11 = document.createElement('h3')
            const i12 = document.createElement('h3')
            const i13 = document.createElement('h3')
            const i14 = document.createElement('h3')
            const i15 = document.createElement('h3')

            h2.textContent = "Ingredients: "
            i1.textContent = response.data.drinks[i].strIngredient1
            i2.textContent = response.data.drinks[i].strIngredient2
            i3.textContent = response.data.drinks[i].strIngredient3
            i4.textContent = response.data.drinks[i].strIngredient4
            i5.textContent = response.data.drinks[i].strIngredient5
            i6.textContent = response.data.drinks[i].strIngredient6
            i7.textContent = response.data.drinks[i].strIngredient7
            i8.textContent = response.data.drinks[i].strIngredient8
            i9.textContent = response.data.drinks[i].strIngredient9
            i10.textContent = response.data.drinks[i].strIngredient10
            i11.textContent = response.data.drinks[i].strIngredient11
            i12.textContent = response.data.drinks[i].strIngredient12
            i13.textContent = response.data.drinks[i].strIngredient13
            i14.textContent = response.data.drinks[i].strIngredient14
            i15.textContent = response.data.drinks[i].strIngredient15
            
                 
           
            
            document.body.appendChild(h2)
            document.body.appendChild(i1)
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
            document.body.appendChild(i15)
        }


    })
    .catch (error => console.log(error))