const results = document.querySelector('.results')
const checks = document.querySelectorAll("input[type='checkbox']")
const searchInput = document.querySelector('.search-input')
let arr = []

for (const check of checks) {
        check.addEventListener('click', () => {
            if(check.checked){
            arr.push(check.value) 
            }else {
              arr = arr.filter(e => e != check.value)
            }
        })
    }

function renderElements (title, tableName, icon, arr1, arr2 ) {
        const h2 = document.createElement('h2')
        h2.textContent = title
        const hr = document.createElement('hr')
        const ul = document.createElement('ul')
        ul.setAttribute('class', 'result-list')
        let innerHtml = ''
        for (const value of tableName) {
            innerHtml += `
            <li class="result-item">
                        <div class="header">
                            <span class="fas fa-${icon}"></span>
                            <h2 class="header-title">${title}</h2>
                        </div>
                        <div class="user-body">
                            <p><b>${arr1[0]}:</b> ${value[arr2[0]]}</p>
                            <p><b>${arr1[1]}:</b> ${value[arr2[1]]}</p>
                            <p><b>${arr1[2]}</b> ${value[arr2[2]]}</p>
                        </div>
                    </li>
            `
        }
        ul.innerHTML = innerHtml
        results.appendChild(h2)
        results.appendChild(hr)
        results.appendChild(ul)  
    } 

const renderUsers = async () => {
    const users = await request('/users', 'GET')
    renderElements('Users', users, 'user', ['First name', 'Last name', 'Contact'], ['first_name', 'last_name', 'contact'])    
}

const renderBooks = async () => {
    const books = await request('/books', 'GET')
    renderElements('Books', books, 'book', ['Name', 'Category', 'Release Date'], ['name', 'category', 'date'])    
}

const renderFilms = async () => {
    const films = await request('/films', 'GET')
    renderElements('Films', films, 'video', ['Name', 'Category', 'Release Date'], ['name', 'category', 'date']) 
}

searchInput.addEventListener('input', async () => {
    if(searchInput.value.length) {
        results.innerHTML = null
        const checkValues = arr
        for (const checkvalue of checkValues) {
            if(checkvalue == 'users'){
                const result = await request('/api/'+checkvalue+'/search', 'POST', {
                    search: searchInput.value
                })
                if(result.length){
                    renderElements('Users', result, 'user', ['First name', 'Last name', 'Contact'], ['first_name', 'last_name', 'contact']) 
                }
               
            } else if(checkvalue == 'books'){
                const result = await request('/api/'+checkvalue+'/search', 'POST', {
                    search: searchInput.value
                })
                if(result.length){
                    renderElements('Books', result, 'book', ['Name', 'Category', 'Release Date'], ['name', 'category', 'date'])
                }
                
            } else if(checkvalue == 'films'){
                const result = await request('/api/'+checkvalue+'/search', 'POST', {
                    search: searchInput.value
                })
                if(result.length){
                    renderElements('Films', result, 'video', ['Name', 'Category', 'Release Date'], ['name', 'category', 'date'])  
                }
                 
            }
        }
    }else {
        results.innerHTML = null
        renderBooks()
        renderFilms()
        renderUsers() 
    }
        
        
    
}) 


renderBooks()
renderFilms()
renderUsers()
