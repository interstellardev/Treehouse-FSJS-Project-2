const studentList = document.querySelector('ul')
const students = document.querySelectorAll('li');
let pageCount = 1;

for (i = 0; i <= students.length; i++) {
    if (i >= 10) {
        students[i].style.display = "none";
    }
}


