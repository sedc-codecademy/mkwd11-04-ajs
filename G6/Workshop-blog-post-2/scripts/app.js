// SELECTORS

// Pages
const formPage = document.getElementById('form-page');
const homePage = document.getElementById('home-page');

// Nav links
const navHome = document.querySelector('#nav-home')
const navForm = document.querySelector('#nav-form')

//Inputs
const searchInput = document.getElementById('search');
const bpTitleInput = document.getElementById('bp-title-input');
const bpContentInput = document.getElementById('bp-content-input');

//Buttons
const submitBtn = document.getElementById('submit')

// BP Elements
const bpContainer = document.getElementById('blog-posts-container')
const loader = document.getElementById('loader')

// DATA
const baseUrl = 'https://jsonplaceholder.typicode.com';
let allPosts = [];

// FUNCTIONS

const changeDisplay = (showEls = [], hideEls = [], activateLinks = [], deactivateLinks = []) => {
    hideEls.forEach(el => el.style.display = 'none')
    showEls.forEach(el => el.style.display = 'block')
    deactivateLinks.forEach(link => link.classList.remove('active'))
    activateLinks.forEach(link => link.classList.add('active'))
}

const renderPosts = (posts) => {
    bpContainer.innerHTML = ''

    posts.forEach(post => {
        bpContainer.innerHTML += `
            <div class="col-sm mt-2" id="bp-element-${post.id}">
              <div class="card">
                <h5 class="card-header">${post.title}</h5>
                <div class="card-body">
                  <p class="card-text">
                    ${post.body}
                  </p>
                </div>
              </div>
            </div>
        `
    })
}

const getPosts = async () => {
    const response = await fetch(`${baseUrl}/posts`)
    const data = await response.json()
    allPosts = data.map(bp => new BlogPost(bp.id, bp.userId, bp.title, bp.body));
}

const onSearch = (searchTerm) => {
    const filteredPosts = allPosts.filter(post => post.title.includes(searchTerm.toLowerCase()))
    renderPosts(filteredPosts)
}

const onFormSubmit = async (bpTitle, bpContent) => {
    // validate inputs
    if (!bpTitle || !bpContent) {
        return
    }

    // submit blog post
    const newBlogPost = new BlogPost(allPosts.length + 1, 1, bpTitle, bpContent)
 
    const response = await fetch(`${baseUrl}/posts`, {
        method: "POST",
        body: JSON.stringify(newBlogPost),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }
    })
    const { id, userId, title, body } = await response.json();
    const createdBlogPost = new BlogPost(id, userId, title, body)
    console.log(createdBlogPost)

    // re-render blog posts

    // go back to home page
}

// EVENT HANDLERS
navForm.addEventListener('click', () => {
    changeDisplay([formPage], [homePage], [navForm], [navHome])
})
navHome.addEventListener('click', () => {
    changeDisplay([homePage], [formPage], [navHome], [navForm])
})
searchInput.addEventListener('input', (e) => onSearch(e.target.value))
submitBtn.addEventListener('click', () => onFormSubmit(bpTitleInput.value, bpContentInput.value))

// MODELS

function BlogPost(id, userId, title, body) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.body = body;
}

// INIT
(async () => {
    changeDisplay([loader, homePage], [formPage], [navHome], [navForm])
    await getPosts()
    changeDisplay([bpContainer], [loader])
    renderPosts(allPosts)
})()