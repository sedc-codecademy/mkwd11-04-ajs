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
const errorEl = document.getElementById('error')

// DATA
const baseUrl = 'https://jsonplaceholder.typicode.com';
let allPosts = [];
let isEditing = false;
let editedPostId = null;

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
                  <a href="#" class="btn btn-primary" id="comments-link-${post.id}">Comments</a>
                  <a href="#" class="btn btn-warning" id="post-edit-${post.id}">Edit</a>
                  <a href="#" class="btn btn-danger" id="post-delete-${post.id}">Delete</a>
                  <ul class="list-group list-group-flush" id="comments-list-${post.id}"></ul>
                </div>
              </div>
            </div>
        `        
    })

    // for loading comments
    posts
        .map(post => document.getElementById(`comments-link-${post.id}`))
        .forEach(btn => btn.addEventListener('click', (e) => {
            e.preventDefault()
            const id = Number(e.target.id.split('-')[2])
            renderComments(id)
        }))

    // for edit buttons
    posts
        .map(post => document.getElementById(`post-edit-${post.id}`))
        .forEach(btn => btn.addEventListener('click', (e) => {
            const id = Number(e.target.id.split('-')[2])
            onEditPost(id)
        }))

    // for delete buttons
    posts
        .map(post => document.getElementById(`post-delete-${post.id}`))
        .forEach(btn => btn.addEventListener('click', (e) => {
            e.preventDefault();
            const id = Number(e.target.id.split('-')[2])
            onDeletePost(id)
        }))
}

const renderComments = async (postId) => {
    const response = await fetch(`${baseUrl}/posts/${postId}/comments`)
    const data = await response.json()
    const comments = data.map(comment => new PostComment(comment.id, comment.name, comment.email, comment.body, comment.postId))

    const commentsContainer = document.getElementById(`comments-list-${postId}`)

    const commentsListItems = comments.map(comment => `<li class="list-group-item"><strong>${comment.name}</strong><p>${comment.body}</p><em>Author: ${comment.email}</em></li>`).join('')

    commentsContainer.innerHTML = commentsListItems
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
        changeDisplay([errorEl])
        throw new Error('Form is invalid')
    }
    
    // submit blog post
    changeDisplay([], [errorEl])
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

    // re-render blog posts
    allPosts.unshift(createdBlogPost)
    renderPosts(allPosts)

    //clean up input
    bpTitleInput.value = '';
    bpContentInput.value = '';

    // go back to home page
    changeDisplay([homePage], [formPage], [navHome], [navForm])
}

const onEditPost = (postId) => {
    isEditing = true;
    editedPostId = postId;
    // change view to form
    changeDisplay([formPage], [homePage], [navForm], [navHome])

    // find blog post
    const blogPost = allPosts.find((post) => post.id === postId)

    // populate input fields
    bpTitleInput.value = blogPost.title;
    bpContentInput.value = blogPost.body;
}

const handleEditPost = async (bpTitle, bpContent) => {
    // validate input
    if (!bpTitle || !bpContent) {
        changeDisplay([errorEl])
        throw new Error('Form is invalid')
    }

    // find blog post
    const bpBody = {
        title: bpTitle,
        body: bpContent
    }

    // PATCH blog post
    const response = await fetch(`${baseUrl}/posts/${editedPostId}`, {
        method: "PATCH",
        body: JSON.stringify(bpBody),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }
    })
    const { id, userId, title, body } = await response.json()
    const updatedBlogPost = new BlogPost(id, userId, title, body)

    const index = allPosts.findIndex(post => post.id === id)

    allPosts[index] = updatedBlogPost;

    // rerender blog posts
    renderPosts(allPosts)

    // cleanup
    bpTitleInput.value = '';
    bpContentInput.value = '';

    // go back to home
    changeDisplay([homePage], [formPage], [navHome], [navForm])
}

const onDeletePost = async (postId) => {
    changeDisplay([loader], [bpContainer])
    // delete post
    await fetch(`${baseUrl}/posts/${postId}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }
    })

    const index = allPosts.findIndex(post => post.id === postId)

    allPosts.splice(index, 1)

    renderPosts(allPosts)
    changeDisplay([bpContainer], [loader])
}

// EVENT HANDLERS
navForm.addEventListener('click', () => {
    changeDisplay([formPage], [homePage], [navForm], [navHome])
})
navHome.addEventListener('click', () => {
    changeDisplay([homePage], [formPage], [navHome], [navForm])
})
searchInput.addEventListener('input', (e) => onSearch(e.target.value))
submitBtn.addEventListener('click', () => {
    if (isEditing) {
        handleEditPost(bpTitleInput.value, bpContentInput.value)
    } else {
        onFormSubmit(bpTitleInput.value, bpContentInput.value)
    }
})

// MODELS

function BlogPost(id, userId, title, body) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.body = body;
}

function PostComment(id, name, email, body, postId) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.body = body;
    this.postId = postId;
}

// INIT
(async () => {
    changeDisplay([loader, homePage], [formPage, errorEl], [navHome], [navForm])
    await getPosts()
    changeDisplay([bpContainer], [loader])
    renderPosts(allPosts)
})()