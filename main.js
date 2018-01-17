console.log("script loaded");

const books = [{
        book_id: "harry_potter",
        title: "Harry Potter series",
        author: "J.K Rowling",
        language: "English"
    },
    {
        book_id: "tokyo_ghoul",
        title: "Tokyou Ghoul",
        author: "Sui Ishida, Shin Towada",
        language: "Japanese"
    },
    {
        book_id: "lord_of_rings",
        title: "The lord of the rings trilogy",
        author: "J.R.R Tolkien",
        language: "English"
    },
    {
        book_id: "games_of_thrones",
        title: "A Song of Ice and Fire",
        author: "Goerge R.R. Martin",
        language: "English",
    },
    {
        book_id: "number_six",
        title: "No. 6",
        author: "Atsuko Asuna",
        language: "Japanese"
    },
    {
        book_id: "percy_jackson",
        title: "Percy Jackson and the Olympians series",
        author: "Rick Roirdan",
        language: "English"
    },
    {
        book_id: "mortal_instruments",
        title: "The Mortal Instruments",
        author: "Cassandra Clare, Joshua Lewis",
        language: "English",
    },
    {
        book_id: "maze_runner",
        title: "The Maze Runner Series",
        author: "James Dashner",
        language: "English"
    },
    {
        book_id: "kings_avatar",
        title: "Quan Zhi Gao Shou (The King's Avatar)",
        author: "Hudielan",
        language: "Chinese"
    },
    {
        book_id: "fault_in_stars",
        title: "The Fault in Our Stars",
        author: "John Green",
        language: "English"
    }
];
console.log(books);

const bookImg = {
    harry_potter: "img/harry-potter-series.jpg",
    tokyo_ghoul: "img/tokyo-ghoul.jpg",
    lord_of_rings: "img/lord-rings.jpg",
    games_of_thrones: "img/game-thrones.jpg",
    number_six: "img/number-6.jpg",
    percy_jackson: "img/percy-jackson.jpg",
    mortal_instruments: "img/mortal-instruments.jpg",
    maze_runner: "img/maze-runner.jpg",
    kings_avatar: "img/kings-avatar.jpg",
    fault_in_stars: "img/fault-in-stars.jpg"
}


const body = document.querySelector('body');

const ul = document.createElement('ul');
ul.innerHTML = "";
body.appendChild(ul);

const li = document.createElement('li');
li.innerHTML = "";
ul.appendChild(li);

for (var i = 0; i < books.length; i++) {

    const h1 = document.createElement('h1');
    h1.innerHTML = books[i].title;
    li.appendChild(h1);

    const h2 = document.createElement('h2');
    h2.innerHTML = books[i].author;
    li.appendChild(h2);

    const h3 = document.createElement('h3');
    h3.innerHTML = books[i].language;
    li.appendChild(h3);
}

const arrayCovers = Object.keys(bookImg);
for (let i = 0; i < arrayCovers.length; i++) {
    const img = document.createElement('img');
    img.innerHTML = arrayCovers[i].img;
    body.appendChild(img)
}
