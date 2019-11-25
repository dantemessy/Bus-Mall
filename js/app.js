'use strict';


var images = [
  'bag',
  'banana',
  'bathroom',
  'boots',
  'breakfast',
  'bubblegum',
  'chair',
  'cthulhu',
  'dog-duck',
  'dragon',
  'pen',
  'pet-sweep',
  'scissors',
  'shark',
  'sweep',
  'tauntaun',
  'unicorn',
  'usb',
  'water-can',
  'wine-glass',
];
var left = document.querySelector('#left');
var mid = document.querySelector('#mid');
var right = document.querySelector('#right');
var imagesSection = document.querySelector('#imagesSection');
var counter = 0;



function Vote(name) {
  this.name = name;
  this.imagePath = `img/${name}.jpg`;
  this.votes = 0;
  this.views = 0;
  Vote.all.push(this);

}
Vote.all = [];


for (let i = 0; i < images.length; i++) {
  new Vote(images[i]);
}


function render() {

  console.log('hi');
  while (leftVote === rightVote || leftVote === midVote || rightVote === midVote) {

    var leftVote = Vote.all[randomNumber(0, Vote.all.length - 1)];
    var rightVote = Vote.all[randomNumber(0, Vote.all.length - 1)];
    var midVote = Vote.all[randomNumber(0, Vote.all.length - 1)];

  }

  leftVote.views++;
  rightVote.views++;
  midVote.views++;




  left.setAttribute('src', leftVote.imagePath);
  left.setAttribute('alt', leftVote.name);
  left.setAttribute('title', leftVote.name);
  mid.setAttribute('src', midVote.imagePath);
  mid.setAttribute('alt', midVote.name);
  mid.setAttribute('title', midVote.name);
  right.setAttribute('src', rightVote.imagePath);
  right.setAttribute('alt', rightVote.name);
  right.setAttribute('title', rightVote.name);

  counter++;

}


function display() {
  var container = document.getElementById('result');
  var ulEl = document.createElement('ul');
  container.appendChild(ulEl);
  for (let i = 0; i < Vote.all.length; i++) {
    var liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `${images[i]} had ${Vote.all[i].votes}votes and was shown ${Vote.all[i].views} times`;
  }
}
render();


function stopEvent (event){
  if (counter <= 25) {
    if (event.target.id !== 'imagesSection') {
      for (let i = 0; i < Vote.all.length; i++) {
        if (event.target.title === Vote.all[i].name) {
          Vote.all[i].votes++;
        }


      }
      render();
    } if (counter ===26 ) {
      display();
    //   imagesSection.removeEventListener('click', stopEvent(event));
    }
  }
}

imagesSection.addEventListener('click', stopEvent) ;

// imagesSection.addEventListener('click', function finish(event) {
//   if (counter <= 10) {
//     if (event.target.id !== 'imagesSection') {
//       for (let i = 0; i < Vote.all.length; i++) {
//         if (event.target.title === Vote.all[i].name) {
//           Vote.all[i].votes++;
//         }


//       }
//     }
//     render();
//     counter++;
//   } else {
//     display();
//     imagesSection.removeEventListener();
//   }
// });
// console.table(Vote.all[0]);


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
