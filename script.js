//Box Count Input
const input = document.querySelector("#size-input")
let userInput
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter"){
        if (input.value >= 16 && input.value <= 200){
            e.preventDefault()
            userInput = input.value
            console.log(userInput)
            createDivs(userInput)
        }
    }
})


//Color Picker
const colorInput = document.querySelector("#color-input")
let color = "black"

if (color === null) {
    color = "black"
}

colorInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter"){
        color = `${colorInput.value}`
        console.log(color)
    }
})


//Main Container
const mainContainer = document.querySelector("#main-container")


//Grid Creation Logic
function createDivs(userInput) {

    mainContainer.replaceChildren()

    for (i=0; i<userInput; i++) {
        const columnDiv = document.createElement("div")
        columnDiv.classList.add("column-div")
        columnDiv.style.width = `${650/userInput}px`
        columnDiv.style.height = '650px'
        mainContainer.appendChild(columnDiv)
    } 

    const columns = document.querySelectorAll(".column-div")
    
    for (const div of columns ) {
        for (i=0; i<userInput; i++) {
            const singularDiv = document.createElement("div")
            singularDiv.classList.add("singular-div")
            singularDiv.style.height = `${650/userInput}px` 
            div.appendChild(singularDiv)
        }
    }

    //Drawing Logic
    const boxes = document.querySelectorAll(".singular-div")
    let isDrawing = false
    for (const box of boxes) {
        box.addEventListener("mousedown", () => {
        isDrawing = true
    })
    }

    for (const box of boxes) {
        box.addEventListener("mouseup", () => {
        isDrawing = false   
    })
    }

    for (const box of boxes) {
        box.addEventListener("mouseenter", () => {
            if (isDrawing === true) {
                box.style.backgroundColor = `${color}`
            }
        })
    }
}


/*
Where I left off:
-
*/