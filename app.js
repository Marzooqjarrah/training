'use strict';


// let person = {
//     name :'ali',
//     age : 27,
//     job : 'student',
//     likes : ['eat', 'play','good'],
//     regard: function() {
//         console.log('heelo there   '+ this.age);
//     },

//     whatIsThis: function (){

//         console.log(this)
//     },
//     info: function ()    {
//       console.log(`my age is ${this.age} and my job is ${this.job} and my name is ${this.name}` );
//     },
// }
// // person.regard();

// // person.whatIsThis();
// // person.info();
// person.prog= function (){
//     console.log(`my name is ${this.name}`);
// }
// person.prog();


// console.log(person);






// let marzooq = {
//     name : 'marzooq',
//     age:27,
//     weight: 75,
//     likes : [1, 2 , 3],
//     hate : function (){
//         console.log(`hello  ${this.name}`);
//     },

//     eat : {
//         fav: "homs",
//         then : 'falafel',
//     },
// }
// // marzooq.hate();
// console.log(marzooq.eat.fav);



// document.write('<p>hi </p>')

// let container=document.getElementById('parent');

// console.log(container);
// let child = document.createElement('p');

// container.appendChild(child);
// let x= prompt('what is ur name')
// console.log(x);

// child.textContent= `hello ${x}`;


let frank = {
    name: 'frank',
    age: 0,
    likes: ['napping', 'kaddiling', 'eating'],
    isGoodWithCats: true,
    isGoodWithDogs: false,
    breed: 'angora',
    getAge: function () {
        this.getAge = random(2, 11);
        console.log(this.getAge + '  months');
    }

}

frank.getAge();

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let parent = document.getElementById('kitten');
console.log(parent);


let article = document.createElement('article');

parent.appendChild(article);

let h2 = document.createElement('h2');
article.appendChild(h2);

h2.textContent = frank.name;


let ul = document.createElement('ul');
article.appendChild(ul);

for (let i = 0; i < frank.likes.length; i++) {

    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent=frank.likes[i];
}

let img=document.createElement('img');
article.appendChild(img);

img.setAttribute('src', 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/is_my_cat_normal_slideshow/1800x1200_is_my_cat_normal_slideshow.jpg');
