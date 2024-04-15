import { openModalOnUpdate } from "./modal.js";

// READ 
 export function getNotes() {
fetch("http://localhost:3000/notes")
.then(response => response.json())
.then(notes => {
    const container = document.getElementById("wrapper"); 
    notes.reverse();
    notes.forEach(note => {
        const button = document.createElement("button");
        button.classList.add("card");
        button.setAttribute("id", note.id)
        button.textContent = note.note; 
        container.appendChild(button);
        button.addEventListener("click", () => { 
        openModalOnUpdate(note)
        }) 
    });
})
.catch(error => console.error('Error fetching notes:', error)); // Catch any errors
}
 
// UPDATE
export async function updateNote(note, newText) {
    const noteValue = newText
    const noteId = note.id 
        
    const noteData = {
        id: noteId,
        note: noteValue
    };
    try {
        const response = await fetch(`http://localhost:3000/notes/${note.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(noteData)
        });
    } catch (e) {
        console.log(e);
    }
}

// CREATE
export function  createNote() {
    const noteValue = document.querySelector(".note_modal_textarea").value;
    const noteId = Math.floor(Math.random() * 1000000).toString(); 

    const noteData = {
        id: noteId,
        note: noteValue
    };

    try {
        const response =  fetch("http://localhost:3000/notes", {
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

export function deleteNote(note) {
    const noteId = note.id
    try {
        const response = fetch(`http://localhost:3000/notes/${note.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }

        }
    )
console.log(response)
    }
    catch (e){
        console.log(e)
}

}