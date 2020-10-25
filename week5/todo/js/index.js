const getList = () => {
    axios.get("https://api.vschool.io/tekeliapowe/todo")
    .then(res => {
        displayList(res.data)
    })
    .catch (error => console.log(error))
}   

getList()

    const displayList = (data) => {
        let container = document.getElementById('list_container')
        data.forEach( list => {
            
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

            let completeCheckBox = document.createElement("INPUT");
            completeCheckBox.setAttribute("type", "checkbox");
            completeCheckBox.setAttribute("id", "check");
            
            completeCheckBox.id=list._id
            completeCheckBox.value=list.completed
            completeCheckBox.addEventListener('click', updateItem)

            let isComplete = list.completed
            let completeLabel = document.createElement("label");
            completeLabel.appendChild(document.createTextNode(""))
            completeLabel.setAttribute("htmlFor", "check")
          
            isComplete ? completeLabel.appendChild(document.createTextNode("Mark Incomplete")) : completeLabel.appendChild(document.createTextNode("Mark Complete"))
            isComplete ? title.style.textDecoration = "line-through" : title.style.textDecoration = "none"
            

            let description = document.createElement('h3')
            let hasDescription = list.description
            hasDescription ? description.textContent = `Description: ${list.description}` : description.textContent = "Description: None"
            

            let price = document.createElement('h3')
            price.textContent = `Price: $${list.price}`
            
            let hasPrice = list.price
            hasPrice ? price.textContent = `Price: $${list.price}` : price.textContent = `Price: $0`

            var att = document.createAttribute("class");
            att.value = "main";
            card.setAttributeNode(att);
            
            //card.appendChild(editButton)
            card.appendChild(deleteButton)
            card.appendChild(completeCheckBox)
            card.appendChild(completeLabel)
            card.appendChild(title)
            card.appendChild(description)
            card.appendChild(price)
            
            container.appendChild(card)
            
            
           
        })

    }

const createNewListItem = (event) => {
    event.preventDefault();
    console.log("ran")
    const newTitle = document.getElementById('title')
    const newDescription = document.getElementById('description')
    const newPrice = document.getElementById('price')
    const newCompleted = document.getElementById('complete')

    console.log(newTitle, newDescription, newPrice, newCompleted)

    const newItem = {
        title: newTitle.value,
        description: newDescription.value,
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