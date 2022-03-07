function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/blog';
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';
    
    const loadPostsBtn = document.getElementById('btnLoadPosts');
    const postsElement = document.getElementById('posts');
    const viewPostBtn = document.getElementById('btnViewPost');
    const commentsList = document.getElementById('post-comments');
    const postTitleElement = document.getElementById('post-title');
    const postBodyElement = document.getElementById('post-body');


    loadPostsBtn.addEventListener('click', loadPosts);
    viewPostBtn.addEventListener('click', viewPost);

    async function loadPosts() {
        postsElement.innerHTML = '';
        const res = await fetch(`${baseUrl}/posts`);
        const data = await res.json();
        for (let el of Object.values(data)) {
            const optionElement = document.createElement('option');
            optionElement.setAttribute('value', el.id);
            optionElement.textContent = el.title;
            postsElement.appendChild(optionElement);
        }
    }

    async function loadPostBody() {
        let optionSelected = postsElement.options[postsElement.selectedIndex].value;
        const res = await fetch(`${baseUrl}/posts`);
        const data = await res.json();
        postBodyElement.textContent = '';
        postTitleElement.textContent = '';
        for (let el of Object.values(data)) {
            if (el.id === optionSelected) {
                postBodyElement.textContent = el.body;
                postTitleElement.textContent = el.title;
            }
        }
    }

    async function viewPost() {
        commentsList.innerHTML = '';
        const res = await fetch(`${commentsUrl}`);
        const data = await res.json();
        
        let optionSelected = postsElement.options[postsElement.selectedIndex].value;
        
        for (let el of Object.values(data)) {
            if (el.postId === optionSelected) {
                let liElement = document.createElement('li');
                liElement.textContent = el.text;
                commentsList.appendChild(liElement);
            }
        }
        loadPostBody()
    }
}

attachEvents();