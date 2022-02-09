window.addEventListener('load', solve);

function solve() {
    
    let addBtnElement = document.getElementById('add-btn');
    let formLabels = document.querySelectorAll('form label');
    let formInputs = document.querySelectorAll('form input');
    let hitsContainer = document.getElementsByClassName('all-hits-container')[0];
    let saveBtn = document.createElement('button');
    let likeBtn = document.createElement('button');
    let deleteBtn = document.createElement('button');
    let hitsInfoContainer = document.createElement('div');

    let formInputArr = Array.from(formInputs);
    let formLabelsArr = Array.from(formLabels);
    
    let songObj = {};
    formLabelsArr.forEach(el => 
        songObj[el.htmlFor] = ''
    )

    // formInputArr.forEach(x => {
    //     if (x.getAttribute("placeholder") !== '') {
    //         if (songObj.hasOwnProperty(x.id)) {
    //             songObj[x.id] = x.getAttribute("placeholder")
    //         }
    //     }
    // });
    formInputArr.forEach(x => {
        if (x.value !== '') {
            // if (songObj.hasOwnProperty(x.id)) {
            //     songObj[x.id] = x.value
            // }
            console.log(x.value)}
    });

    
    hitsInfoContainer.classList.add('hits-info');
    let imgSongs = document.createElement('img');
    imgSongs.src = './static/img/img.png';
    hitsInfoContainer.appendChild(imgSongs);
    let songGenre = document.createElement('h2');
    songGenre.textContent = `Genre: ${songObj['genre']}`;
    hitsInfoContainer.appendChild(songGenre);
    let songName = document.createElement('h2');
    songName.textContent = `Name: ${songObj['name']}`;
    hitsInfoContainer.appendChild(songName);
    let songAuthor = document.createElement('h2');
    songAuthor.textContent = `Author: ${songObj['author']}`;
    hitsInfoContainer.appendChild(songAuthor);
    let songDate = document.createElement('h3');
    songDate.textContent = `Date: ${songObj['date']}`;
    hitsInfoContainer.appendChild(songDate);

    
    
    saveBtn.classList.add('save-btn');
    saveBtn.textContent = 'Save song';
    hitsInfoContainer.appendChild(saveBtn);

    
    likeBtn.classList.add('like-btn');
    likeBtn.textContent = 'Like song';
    hitsInfoContainer.appendChild(likeBtn);

    
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete song';
    hitsInfoContainer.appendChild(deleteBtn);

    addBtnElement.addEventListener('click', (e) => {
        e.preventDefault();
        formInputArr.forEach(x => {
            x.value = null;
        });
        
        hitsContainer.appendChild(hitsInfoContainer);

    });
   
    

    console.log(songObj);
   
    
}