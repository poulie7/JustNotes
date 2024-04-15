
//variables
export const note_add_button = document.getElementById("addNote");

//create form 
export const note_modal = document.createElement("div");
export const note_form = document.createElement("form");
export const note_modal_textarea = document.createElement("textarea");
export const note_modal_button = document.createElement("button");
note_modal_button.textContent = "Accept";
note_modal_button.setAttribute("id", "1")

//update form 

export const note_modal_update = document.createElement("div")
export const note_update_form = document.createElement("form");
export const note_modal_update_textarea = document.createElement("textarea");
export const note_modal_update_button = document.createElement("button");
export const note_modal_delete_button = document.createElement("button");
export const note_modal_delete_form = document.createElement("form");
note_modal_update_button.textContent = "Update";
note_modal_delete_button.textContent = "Delete";
note_modal_delete_button.setAttribute("id", "2")
