import { 
    note_form,
    note_modal_textarea,
    note_modal,
    note_modal_button,
    note_modal_update_button,
    note_update_form,
    note_modal_update_textarea,
    note_modal_update,
    note_modal_delete_button,
    note_modal_delete_form

 } from "./variables.js";
import { updateNote,deleteNote } from "./service.js";

// opening note modal for creating note 
export function openNoteModal() {
    note_form.classList.add("note_modal_form"),
           note_modal.classList.add("note_modal");
           note_modal_textarea.classList.add("note_modal_textarea")
           note_modal_button.classList.add("note_modal_button");
           note_form.appendChild(note_modal_textarea)
           note_form.appendChild(note_modal_button);
           note_modal.appendChild(note_form);
           document.body.appendChild(note_modal);
}

// closing modal on click 
export function closeModal() {
    if (event.target === note_modal) {
        note_modal.remove();
    }
}

export function closeUpdateModal() {
    if (event.target === note_modal_update) {
        note_modal_update.remove();
    }

}

export function openModalOnUpdate(note) {
   note_update_form.classList.add("note_modal_form"),
   note_modal_update_textarea.classList.add("note_modal_textarea")
   note_modal_update.classList.add("note_modal");
   note_modal_update_button.classList.add("note_modal_button");
   note_modal_delete_button.classList.add("note_modal_delete_button")
   note_update_form.appendChild(note_modal_update_textarea);
   note_update_form.appendChild(note_modal_update_button);
   note_modal_delete_form.appendChild(note_modal_delete_button)
   note_modal_update.appendChild(note_modal_delete_form)
   note_modal_update.appendChild(note_update_form);
   
   document.body.appendChild(note_modal_update);
   note_modal_update_textarea.value = note.note
   
   note_update_form.addEventListener("submit", (event) => {
        event.preventDefault()
        let newText  = note_modal_update_textarea.value
        updateNote(note, newText)
        console.log("update")
        note_modal_update.remove()
        location.reload()
   })
   note_modal_delete_form.addEventListener("submit", event => {
    event.preventDefault()
    deleteNote(note)
    note_modal_update.remove()
    location.reload()
   })
}