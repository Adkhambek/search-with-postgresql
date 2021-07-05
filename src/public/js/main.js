const results = document.querySelector('.results')

const renderUsers = async () => {
    const users = await request('/users', 'GET')
    const h2 = document.createElement('h2')
    h2.textContent = 'Users'
    const hr = document.createElement('hr')
    const ul = document.createElement('ul')
    ul.setAttribute('class', 'result-list')
    let innerHtml = ''
    for (const user of users) {
        innerHtml += `
        <li class="result-item">
                    <div class="header">
                        <span class="fas fa-user"></span>
                        <h2 class="header-title">User</h2>
                    </div>
                    <div class="user-body">
                        <p><b>First name:</b> ${user.first_name}</p>
                        <p><b>Last name:</b> ${user.last_name}</p>
                        <p><b>Contact:</b> ${user.contact_name}</p>
                    </div>
                </li>
        `
    }
    ul.innerHTML = innerHtml
    results.appendChild(h2)
    results.appendChild(hr)
    results.appendChild(ul)
}

const renderBooks = async () => {
    const books = await request('/books', 'GET')
    const h2 = document.createElement('h2')
    h2.textContent = 'Books'
    const hr = document.createElement('hr')
    const ul = document.createElement('ul')
    ul.setAttribute('class', 'result-list')
    let innerHtml = ''
    for (const book of books) {
        innerHtml += `
        <li class="result-item">
                    <div class="header">
                    <span class="fas fa-book"></span>
                    <h2 class="header-title">Book</h2>
                    </div>
                    <div class="user-body">
                        <p><b>Name:</b> ${book.name}</p>
                        <p><b>Category:</b> ${book.category}</p>
                        <p><b>Release Date:</b> ${book.date}</p>
                    </div>
                </li>
        `
    }
    ul.innerHTML = innerHtml
    results.appendChild(h2)
    results.appendChild(hr)
    results.appendChild(ul)
}

const renderFilms = async () => {
    const films = await request('/films', 'GET')
    const h2 = document.createElement('h2')
    h2.textContent = 'Films'
    const hr = document.createElement('hr')
    const ul = document.createElement('ul')
    ul.setAttribute('class', 'result-list')
    let innerHtml = ''
    for (const film of films) {
        innerHtml += `
        <li class="result-item">
                    <div class="header">
                    <span class="fas fa-video"></span>
                    <h2 class="header-title">Film</h2>
                    </div>
                    <div class="user-body">
                        <p><b>Name:</b> ${film.name}</p>
                        <p><b>Category:</b> ${film.category}</p>
                        <p><b>Release Date:</b> ${film.date}</p>
                    </div>
                </li>
        `
    }
    ul.innerHTML = innerHtml
    results.appendChild(h2)
    results.appendChild(hr)
    results.appendChild(ul)
}

renderBooks()
renderFilms()
renderUsers()
