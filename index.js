let notes = []

let addNoteButton = document.getElementById("addNote")
const noteWindowWrapper = document.createElement("div");
const noteWindow = document.createElement("textarea");


document.addEventListener("DOMContentLoaded", () => {
    addNoteButton.addEventListener("click", () => {
       noteWindow.classList.add("noteWindow")
       noteWindowWrapper.classList.add("noteWindowWrapper");
       noteWindowWrapper.appendChild(noteWindow);
       document.body.appendChild(noteWindowWrapper);
    })
    noteWindowWrapper.addEventListener("click", (event) => {
        if (event.target === noteWindowWrapper) {
            noteWindowWrapper.remove();
        }
    });

    fetch("http://localhost:3000/notes")
    .then(response => console.log(response))
}) 