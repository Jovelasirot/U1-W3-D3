const pageForm = document.getElementById("firstForm");

pageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const addInputField = document.getElementById("doIt");
  const toDolistThings = document.createElement("div");
  toDolistThings.id = "taskList";
  toDolistThings.innerHTML = `

 <span>${addInputField.value} <i class='bx bx-trash' id ="btn"></i><span>


 `;
  const listShowing = document.getElementById("list");
  listShowing.appendChild(toDolistThings);
  addInputField.value = "";

  toDolistThings.addEventListener("click", () => {
    console.log("COMPLETATO");
    toDolistThings.style.textDecoration = "line-through";
  });

  toDolistThings.addEventListener("dblclick", () => {
    toDolistThings.style.textDecoration = "none";
    console.log("NON COMPLETATO");
  });

  const trash = document.getElementById("btn");
  trash.addEventListener("click", () => {
    console.log("btn trovato");
    trash.parentElement.remove("div");
  });
});

// const trashbtn = () => {
//     const element = document.getElementById("taskList");
//     const addbtn = document.createElement("div");
//     toDolistThings.innerHTML = `

//   <i class='bx bx-trash'></i>

//   `;
//     trashbtn.appendChild(element);
//   };
