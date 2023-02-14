// SELECTORS


// Pages
const formPage = document.getElementById('form-page');
const homePage = document.getElementById('home-page');

// Nav links
const navHome = document.querySelector('#nav-home')
const navForm = document.querySelector('#nav-form')

// BP Elements
const bpContainer = document.getElementById('blog-posts-container')
const loader = document.getElementById('loader')

// DATA
const baseUrl = 'https://jsonplaceholder.typicode.com';
let posts = []

// FUNCTIONS

const changeDisplay = (showEl, hideEl) => {
    hideEl.style.display = 'none';
    showEl.style.display = 'block';
}

const init = () => {
    getPosts()
    changeDisplay(homePage, formPage)
}

const getPosts = async () => {
    const response = await fetch(`${baseUrl}/posts`)
    const data = await response.json()
    posts = data.map(bp => new BlogPost(bp.id, bp.userId, bp.title, bp.body));
}

// EVENT HANDLERS
navForm.addEventListener('click', () => {
    changeDisplay(formPage, homePage)
})
navHome.addEventListener('click', () => {
    changeDisplay(homePage, formPage)
})

// MODELS

function BlogPost(id, userId, title, body) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.body = body;
}

// INIT

init();