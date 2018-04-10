const studentList = document.querySelector('.student-list');
const students = document.querySelectorAll('li');
const page = document.querySelector('.page');
const div = document.createElement('div');




// document.addEventListener('load', showPage(1, students));
document.addEventListener('load', appendPageLinks(students));



// function showPage(pageNumber, list) {
//     for (let i = 0; i <= list.length; i++) {
//         list[i].style.display = "none";
//     }
// }

function appendPageLinks(list) {
    const ul = document.createElement('ul');
    let pages = Math.ceil(list.length / 10);
    page.appendChild(ul).setAttribute('class', 'pagination');
    const paginationList = document.querySelector('.pagination')
    for (let i = 1; i <= pages; i++) {
        let pageNum = i;
        const li = document.createElement('li');
        const a = document.createElement('a');
        paginationList.appendChild(li).appendChild(a);
        let linkText
    }
}


