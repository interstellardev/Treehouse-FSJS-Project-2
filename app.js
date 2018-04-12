const studentList = document.querySelector('.student-list');
const students = document.querySelectorAll('.student-item');
const page = document.querySelector('.page');

let pages = Math.ceil(students.length / 10);




document.addEventListener('load', showPage(1, students));
document.addEventListener('load', appendPageLinks(students));



function showPage(pageNumber, list) {
    let maxList = (pageNumber * 10) - 1;
    let minList = (pageNumber * 10) - 10;
    for (let i = 0; i < list.length; i++) {
        list[i].style.display = 'none';
        if ((i >= minList) && (i <= maxList)) {
            list[i].removeAttribute('style');
        }
    }    
}



function appendPageLinks(list) {
    const ul = document.createElement('ul');
    page.appendChild(ul).setAttribute('class', 'pagination');
    const paginationList = document.querySelector('.pagination')
    for (let i = 1; i <= pages; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        const link = paginationList.appendChild(li).appendChild(a);
        link.innerHTML = i;
    }
    const pageButton = paginationList.querySelectorAll('ul.pagination li a');
    
    
    console.log(pageButton);
}


