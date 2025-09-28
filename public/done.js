

const checkboxes = document.querySelectorAll('input[name="done"]');

const form = document.querySelector("#myForm");

const addTaskHere = document.querySelector("#addTaskHere");


form.addEventListener("submit", (event)=> {
    const task = form.task.value
    const time = form.time.value
    let errors = []
    if (!task){
        errors.push("Task is empty")
    }

    if (!time){
        errors.push("Please select a time")
    }

    if (errors.length > 0){
        event.preventDefault()
        alert(errors.join('\n'))
    }
})

addTaskHere.addEventListener("click", (event)=>{
    form.classList.toggle("active")
    if (form.classList.contains("active")){
        addTaskHere.textContent = "Close"
    }
    else{
        addTaskHere.textContent = "Add task here"
    }
})




// checkboxes.forEach(checkbox => {
//   checkbox.addEventListener('change', (event) => {
//     let li = checkbox.parentElement
//     if (event.target.checked) {
//         li.classList.add('doneMark')
//     } else {
//       li.classList.remove('doneMark')
//     }
//   });
// });

