const studentList = document.querySelector('.student-list');
const students = document.querySelectorAll('.student-item');
const page = document.querySelector('.page');
const header = document.querySelector('.page-header');
const div = document.createElement('div');
const input = document.createElement('input');
const button = document.createElement('button');

//rounding up to a whole number 
let pages = Math.ceil(students.length / 10);

// creating search input and betton 
header.appendChild(div).setAttribute('class', 'student-search');
const searchDiv = document.querySelector('.student-search')
searchDiv.appendChild(input).setAttribute('placeholder', 'Search for students...');
searchDiv.appendChild(button).innerHTML = 'Search';
const searchButton = searchDiv.querySelector('button');


document.addEventListener('load', showPage(1, students));
document.addEventListener('load', appendPageLinks(students));
searchButton.addEventListener('click', search(students));




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
    const ul = document.createElement('ul');
    // adds pagination class to ul
    page.appendChild(ul).setAttribute('class', 'pagination');
    const paginationList = document.querySelector('.pagination')
    //generating the pagiantion buttons based on how many pages there are
    for (let i = 1; i <= pages; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        const link = paginationList.appendChild(li).appendChild(a);
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

// This function creates an input element then searches the student list items
function search(list) {
    let searchValue = searchDiv.querySelector('input').value.toLowerCase();
    for (let i = 0; i < list.length; i++) {
        let studentNames = list[i].querySelector('.student-details h3').innerHTML.toLowerCase();
        let studentEmail = list[i].querySelector('.student-details .email').innerHTML.toLowerCase();
        let doesContainName = studentNames.search(searchValue);
        let doesContainEmail = studentEmail.search(searchValue);
        if ((doesContainName === -1) || (doesContainEmail === -1) ) {
            console.log('match');
        } else {
            list[i].style.display = 'none';
        }
    }
};

