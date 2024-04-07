/*
  HTML for the project.
  Template
  <div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">FULLNAME HERE</h5>
    </div>
  <small>EMAIL HERE<</small>
  </div>
*/

async function getContacts(){
const response = await fetch('public/data/contacts.json');
const payload = await response.json()
renderContacts(payload);
}

getContacts();

function renderContacts(contacts) {
  // 'use' the element with the id "contacts"
  const contactsElement = document.getElementById('contacts');

  contactsElement.innerHTML = '';

  // Looping through each contact and rendered them using the template
  contacts.forEach(contact => {
    // made a new div element for each contact
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('list-group-item', 'list-group-item-action');
    //use template and fill it in
    contactDiv.innerHTML = `
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">${contact.name}</h5>
    </div>
    <small>${contact.email}</small>
  `;
    //append that sucker
      contactsElement.appendChild(contactDiv);
    });
}