    const getPosts = async () => {
        
        try {
            uri = 'https://jsonplaceholder.typicode.com/posts'
            const resp = await fetch(uri);
            const data = await resp.json();
            mostrarPosts(data)
            return;
        } catch (error) {
            throw Error(`error en consulta: ${error}`)
        }
    }
    
    function mostrarPosts(posts){
        const div = document.querySelector('#post-data')
        div.innerHTML = '';
        const ul = document.createElement('ul')
        ul.style.listStyleType='circle';
        div.appendChild(ul);
        posts.map(post=>{
            ul.innerHTML += 
            `
            <li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>
            `
        })
    }


