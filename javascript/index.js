import {closeModal, openNoteModal, closeUpdateModal} from "./modal.js"
import { getNotes, updateNote, createNote } from "./service.js";
import {
    note_add_button,
    note_modal_update_button,
    note_modal,
    note_modal_textarea,
    note_modal_button,
    note_form,
    note_update_form,
    note_modal_update

} from "./variables.js"



document.addEventListener("DOMContentLoaded", () => {

    //note modal textarea for write down note 
    note_add_button.addEventListener("click", () => {
       openNoteModal()
    })

    // READ
    getNotes()

    // CREATE 
    note_form.addEventListener("submit", (event) => {
        event.preventDefault();
        createNote()
        note_modal.remove()
        location.reload()
    }) 

    //closing note modal on click event
    note_modal.addEventListener("click", () => {
     closeModal()
    });

    note_modal_update.addEventListener("click", () => {
        closeUpdateModal()
    });

  
}) 

