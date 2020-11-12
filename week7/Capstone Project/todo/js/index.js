const container = document.getElementById('list_container')
const suggestion_card = document.createElement('div')
const card = document.createElement('div')
const getList = async () => {
    const mealData = await axios.get("https://api.vschool.io/tekeliapowe/todo")
    
    const ingredient = mealData.data
    const allIngredients = []
    console.log(ingredient)
    
    for (i=0; i<ingredient.length; i++) {
        allIngredients.push(axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient[i].title}`))
        
    }

    Promise.all(allIngredients)
    .then(res => {
        
        displayList(mealData)
        console.log(mealData.data)
        

        for(i=0; i< res.length; i++){
        const data = res[i].data.meals
        console.log(data)
        displaySuggestions(data)
         }
        
    })
        
   
    .catch (error => console.log(error))
}   


getList()

    const displayList = (data) => {
        
        //const container = document.getElementById('list_container')
        data.data.forEach( list => {
            
            let card = document.createElement('div')
            let title = document.createElement('h1')
            title.textContent = list.title
            card.id=list._id
            title.id=list._id
            let deleteButton = document.createElement('button')
            deleteButton.innerHTML="Delete"
            deleteButton.id=list._id
            deleteButton.addEventListener('click', deleteItem)

            let editButton = document.createElement('button')
            editButton.innerHTML="Edit"
            editButton.id=list._id
            editButton.addEventListener('click', editItem)

            let purchaseCheckBox = document.createElement("INPUT");
            purchaseCheckBox.setAttribute("type", "checkbox");
            purchaseCheckBox.setAttribute("id", "check");
            
            purchaseCheckBox.id=list._id
            purchaseCheckBox.value=list.completed
            purchaseCheckBox.addEventListener('click', updateItem)

            let isComplete = list.completed
            let completeLabel = document.createElement("label");
            completeLabel.appendChild(document.createTextNode(""))
            completeLabel.setAttribute("htmlFor", "check")
          
            isComplete ? completeLabel.appendChild(document.createTextNode("Need to Purchased")) : completeLabel.appendChild(document.createTextNode("Already Purchased"))
            isComplete ? title.style.textDecoration = "line-through" : title.style.textDecoration = "none"
            
            let price = document.createElement('h3')
            let hasPrice = list.price
            hasPrice ? price.textContent = `Price: $${list.price}` : price.textContent = "Price: $0"
            
            var att = document.createAttribute("class");
            att.value = "main";
            card.setAttributeNode(att);
            
            
            card.appendChild(editButton)
            card.appendChild(deleteButton)
            card.appendChild(purchaseCheckBox)
            card.appendChild(completeLabel)
            card.appendChild(title)
            card.appendChild(price)
            
            
            container.appendChild(card)
            
            
           
        })

        

    }
    const displaySuggestions = (data) =>{
        console.log(data)
        let container = document.getElementById('suggestions_container')
        let title = document.createElement('h3')
            title.textContent = `Meal Suggestions:`
            card.appendChild(title)
        data.forEach( list => {
    
   var att = document.createAttribute("class");
att.value = "main";
card.setAttributeNode(att);
        let suggestion_title = document.createElement('h6')
            suggestion_title.textContent = list.strMeal
            card.id=list._id
            suggestion_title.id=list._id
          
        card.appendChild(suggestion_title)
        //images
        var x = document.createElement("IMG");
        x.setAttribute("src", `${list.strMealThumb}`);
  x.setAttribute("width", "100");
  x.setAttribute("height", "100");
  x.setAttribute("alt", "The Pulpit Rock");
  card.appendChild(x);
        
        
        container.appendChild(card)

            
    })
    
}
const createNewListItem = (event) => {
    event.preventDefault();
    console.log("ran")
    const newTitle = document.getElementById('title')
    const newPrice = document.getElementById('price')
    const newCompleted = document.getElementById('complete')

    console.log(newTitle, newPrice, newCompleted)

    const newItem = {
        title: newTitle.value,
        price: newPrice.value,
        completed: newCompleted.checked
    }
    console.log(newItem)

    axios.post("https://api.vschool.io/tekeliapowe/todo", newItem)
    .then(res => {
        location.reload()
    })
    .catch (error => console.log(error))
}   


const form = document.getElementById("form_container")
form.addEventListener('submit', createNewListItem)

const deleteItem = (event) => {
    console.log("gonna delete")

    axios.delete(`https://api.vschool.io/tekeliapowe/todo/${event.target.id}`)
    .then(res => {
        location.reload()
    })
    .catch (error => console.log(error))
}

const updateItem = (event) => {

    console.log("updated")

    let isCompleted = null
    event.target.value ==="true" ? isCompleted = true : isCompleted = false

    let update = { completed : !isCompleted}
    axios.put(`https://api.vschool.io/tekeliapowe/todo/${event.target.id}`, update)
    .then(res => {
        location.reload()
    })
    .catch (error => console.log(error))
}
    
const editItem = (event) => {
    let id = event.target.id
    let container = document.getElementById('list_container')
    let card = document.getElementsByTagName('div')

    console.log("edit "+id)
    let title = document.getElementsByTagName(`h1`)
    
    console.dir(title)
    if(title[1].id===id){
        console.log("ok")
    
    let editTitle = document.createElement('input')
    editTitle.setAttribute("type","text")
    //editTitle.value = title
    card.appendChild(editTitle) 
    container.appendChild(card)
    }
    
    let editTitle = document.createElement('input')
    editTitle.setAttribute("type","text")
    
    
   
    

}