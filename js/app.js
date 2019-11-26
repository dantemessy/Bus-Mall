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
var counter = 20;


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
  var voteArr = [];
  var viewArr = [];
  var container = document.getElementById('result');
  var ulEl = document.createElement('ul');
  container.appendChild(ulEl);
  for (let i = 0; i < Vote.all.length; i++) {
    var liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `${images[i]} had ${Vote.all[i].votes}votes and was shown ${Vote.all[i].views} times`;
    voteArr.push(Vote.all[i].votes);
    viewArr.push(Vote.all[i].views);
  }// the end of the for loop







  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: images,
      datasets: [
        {
          label: '# of Votes',
          data: voteArr,
          backgroundColor: [
            'rgba(0, 0, 0, 1)'
          ],

          borderWidth: 1
        },
        ///////
        {
          label: '# of Views',
          data: viewArr,
          backgroundColor: [
            'rgba(0, 99, 132, 1)'
          ],

          borderWidth: 1
        }

        ///////
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });


  console.log(voteArr);


}
render();


function stopEvent(event) {
  if (counter <= 25) {
    if (event.target.id !== 'imagesSection') {
      for (let i = 0; i < Vote.all.length; i++) {
        if (event.target.title === Vote.all[i].name) {
          Vote.all[i].votes++;
        }


      }
      render();
    } if (counter === 26) {
      display();

    }
  }
}

imagesSection.addEventListener('click', stopEvent);

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//////////////////////////////////////////////////////////////////////////////

