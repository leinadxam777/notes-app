const text = document.querySelector('#text');
const submitButton = document.querySelector('#submitButton');
const ul = document.querySelector('ul');


submitButton.addEventListener('click', listFunction);

submitButton.disabled = true;

text.onkeyup = () => {
    if (text.value.length > 0) {
        submitButton.disabled = false;
    }
    else {
        submitButton.disabled = true;
    }
}


function listFunction() {
    const li = document.createElement('li');
    let remove = document.createElement('button');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    remove.innerHTML = '<ion-icon name="trash-outline"></ion-icon>'
    remove.className = 'remove';
    checkbox.type = "checkbox";
    checkbox.id = "checkbox" + ul.children.length;
    li.className = 'list';

    label.innerText = text.value;
    label.htmlFor = checkbox.id;

    li.append(remove)
    li.append(checkbox);
    li.append(label);
    ul.append(li)
    text.value = '';
    submitButton.disabled = true;



    const removeButtons = document.querySelectorAll('.remove');
    const list = document.querySelectorAll('.list');

    removeButtons.forEach((remove, index) => {
        remove.addEventListener('click', function () {
            const itemIndex = index;
            list[itemIndex].remove();


        });

    });
    console.log(ul)
}


////////////////////////////////////////////////////////////

// NOTES
// I can still improve this by making a local storage for the task list.