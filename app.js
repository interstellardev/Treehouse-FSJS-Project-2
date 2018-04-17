const studentList = document.querySelector('.student-list');
const students = document.querySelectorAll('.student-item');
const page = document.querySelector('.page');
const header = document.querySelector('.page-header');
const div = document.createElement('div');
const input = document.createElement('input');
const button = document.createElement('button');
const ul = document.createElement('ul');
let matchedList = [];
// creating search input and betton 

document.addEventListener('load', searchBuild(students));
document.addEventListener('load', showPage(1, students));
document.addEventListener('load', appendPageLinks(students));




/* this function hides all of a list and then displays  
the list items that belong on the page*/
function showPage(pageNumber, list) {
    /* these first two variables  create a range from the
    page number so we can look for the index of the node list items
    so we can compare and only show the neccesary list items*/
    let maxList = (pageNumber * 10) - 1;
    let minList = (pageNumber * 10) - 10;
    for (let i = 0; i < list.length; i++) {
        list[i].style.display = 'none';
        if ((i >= minList) && (i <= maxList)) {
            list[i].removeAttribute('style');
        }
    }    
}



/*This function creates and unordered list below the student list
and then generates page buttons based on how many students are in the list */
function appendPageLinks(list) {
    page.appendChild(ul).setAttribute('class', 'pagination');
    const paginationList = document.querySelector('.pagination');
    const pagiantionListItems = paginationList.children;
    let pages = Math.ceil(list.length / 10);
    for (let i = 1; i <= pages; i++) {
        const link = paginationList.appendChild(document.createElement('li')).appendChild(document.createElement('a'));
        link.href = '#'
        link.innerHTML = i;
    }
    const pageButton = paginationList.querySelectorAll('ul.pagination li a');
    pageButton[0].classList.add('active');
    // looping over pagination buttons and listening for clicks
    for (let i = 0; i < pageButton.length; i++) {
        pageButton[i].addEventListener('click', function (e) {
            // removeing active class on all pagination buttons
            pageButton.forEach(function(button) {
                button.classList.remove('active');
            }); 
            // adding active class to clicked pagination button.
            pageButton[i].classList.add('active');
            /* assigning i to page number and increasing the 
            index by 1 to us a page number in showPage function call back*/
            let pageNumber = i + 1;
            showPage(pageNumber, list);
        });
    }
}



function searchBuild() {
    header.appendChild(div).setAttribute('class', 'student-search');
    const searchDiv = document.querySelector('.student-search')
    searchDiv.appendChild(input).setAttribute('placeholder', 'Search for students...');
    searchDiv.appendChild(button).innerHTML = 'Search';
    const searchButton = searchDiv.querySelector('button');
    searchButton.addEventListener('click', () => {
        matchedList = [];
        let searchValue = searchDiv.querySelector('input').value.toLowerCase();
        console.log(searchValue);
        for (let i = 0; i < students.length; i++) {
            let studentNames = students[i].querySelector('.student-details h3').innerHTML.toLowerCase();
            let studentEmail = students[i].querySelector('.student-details .email').innerHTML.toLowerCase();
            let doesContainName = studentNames.search(searchValue);
            let doesContainEmail = studentEmail.search(searchValue);
            if (doesContainName != -1 || doesContainEmail != -1) {
                matchedList.push(students[i]);
                students[i].removeAttribute('style');
            } else if (doesContainName === -1 || doesContainEmail === -1) {
                students[i].style.display = 'none';
            }
        }
        if (matchedList.length > 10) {
            appendPageLinks(matchedList);
        }
    
    });
}
