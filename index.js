const note_add_button = document.getElementById("addNote")
const note_modal = document.createElement("div");
const note_modal_textarea = document.createElement("textarea");
const note_modal_button = document.createElement("button");
const note_form = document.createElement("form");
note_modal_button.textContent = "Accept";



document.addEventListener("DOMContentLoaded", () => {

    note_add_button.addEventListener("click", () => {
        note_form.classList.add("note_modal_form"),
        note_modal_textarea.classList.add("note_modal_textarea")
       note_modal.classList.add("note_modal");
       note_modal_button.classList.add("note_modal_button");
       note_form.appendChild(note_modal_textarea)
       note_form.appendChild(note_modal_button);
       note_modal.appendChild(note_form);
       document.body.appendChild(note_modal);
    })
    note_modal.addEventListener("click", (event) => {
        if (event.target === note_modal) {
            note_modal.remove();
        }
    });

        
    fetch("http://localhost:3000/notes")
    .then(response => response.json())
    .then(notes => {
        const container = document.getElementById("wrapper"); 
        notes.forEach(note => {
            const button = document.createElement("button");
            button.classList.add("card");
            button.textContent = note.note; // Assuming each note has a 'title' property
            container.appendChild(button);
        });
    })
    .catch(error => console.error('Error fetching notes:', error)); // Catch any errors

        note_form.addEventListener("submit", (event) => {
        event.preventDefault();
        sendNote()
        note_modal.remove()
        location.reload()
    })
}) 


async function sendNote() {
    const noteValue = document.querySelector(".note_modal_textarea").value;

    const noteId = Math.floor(Math.random() * 1000000); 

    const noteData = {
        id: noteId,
        note: noteValue
    };

    try {
        const response = await fetch("http://localhost:3000/notes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(noteData)
        });
    } catch (e) {
        console.log(e);
    }
}

