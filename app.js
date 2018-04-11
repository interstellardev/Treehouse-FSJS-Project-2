const studentList = document.querySelector('.student-list');
const students = document.querySelectorAll('.student-item');
const page = document.querySelector('.page');
let pages = Math.ceil(students.length / 10);
let showStudents = [];



document.addEventListener('load', showPage(4, students));
document.addEventListener('load', appendPageLinks(students));



function showPage(pageNumber, list) {
    let maxList = (pageNumber * 10) - 1;
    let minList = (pageNumber * 10) - 10;
    console.log(maxList);
    console.log(minList);
    for (let i = 0; i <= list.length; i++) {
        let studentName = list[i];
        studentName.style.display = 'none';
    }
}



function appendPageLinks(list) {
    const ul = document.createElement('ul');
    page.appendChild(ul).setAttribute('class', 'pagination');
    const paginationList = document.querySelector('.pagination')
    for (let i = 1; i <= pages; i++) {
        let pageNum = i;
        const li = document.createElement('li');
        const a = document.createElement('a');
        const link = paginationList.appendChild(li).appendChild(a);
        link.innerText = i;
    }
}


