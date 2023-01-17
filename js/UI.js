function displaySearch(data, searchResultsList) {
  searchResultsList.innerHTML = '';

  data.forEach((el) => {
    const li = document.createElement('li');
    const linkTitle = el.title.replaceAll(' ', '');
    li.innerHTML = `
    <li>
        <div class="image">
            <img
                src="${el.image}"
                alt=""
            />
        </div>
        <div class="description">
            <h3>${el.title}</h3>
            <a href="${el.url}">https://en.wikipedia.org/${linkTitle}</a>
        <p>
            ${el.description}
        </p>
        </div>
    </li>
    `;

    searchResultsList.append(li);
  });
}

export { displaySearch };
