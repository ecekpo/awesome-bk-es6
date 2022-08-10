const list = document.querySelector('.remove-book');
export const locStore = () => {
  localStorage.getItem('book');
  const bookArray = JSON.parse(localStorage.getItem('book') || '[]');

  const ul = document.createElement('ul');
  ul.innerHTML = `<li>Book</li>
                    <li>Author</li>`;
  list.appendChild(ul);
  bookArray.forEach(({ title, author, id }) => {
    const div = document.createElement('div');

    div.classList.add('items');
    div.innerHTML = `
                        
                            <p>${title}</p>
                            <p>${author}</p>
                        
                        
                        <div><button class='remove' id = '${id}'>Delete</button></div>`;

    list.appendChild(div);
  });
};

export default locStore;