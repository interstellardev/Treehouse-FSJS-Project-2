const studentList = document.querySelector('ul');
const students = document.querySelectorAll('li');
const page = document.querySelector('.page');
const paginationList = document.querySelector('.pagination')
const div = document.createElement('div');
const li = document.createElement('li');
const ul = document.createElement('ul');



// document.addEventListener('load', showPage(1, students));
document.addEventListener('load', appendPageLinks(students));



// function showPage(pageNumber, list) {
//     for (let i = 0; i <= list.length; i++) {
//         list[i].style.display = "none";
//     }
// }

function appendPageLinks(list) {
    
    let pages = Math.ceil(list.length / 10);
    if (students.length > 10) {
        page.appendChild(ul);
        ul.setAttribute('class', 'pagination');
        const paginationList = document.querySelector('.pagination');
        paginationList.appendChild(li);
        li.textContent = pages;
        for (let i = 1; i <= pages.length; i++) {
            
        }
    }
}


