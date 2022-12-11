let info_of_cars=[
    {source :"https://www.arabahabercisi.com/wp-content/uploads/2020/03/en-pop%C3%BCler-10-araba.jpg",name : "Toyota Carolla"},
    {source :"https://arabam-blog.mncdn.com/wp-content/uploads/2021/05/skoda-fabia-2021.jpg", name:"Ford Otosan"},
    {source :"https://www.ilgincgercek.com/wp-content/uploads/2018/05/ilginc-araba.jpg", name:"Mustang 540"}
];

//Settings for the random slide control.
let settings={
    isRandom : true,
    interval : '2000'
}

var interval;

//Display first slide and display function.
let current_car = 0 ;
displaySlide(current_car);

function displaySlide(index){
    document.getElementById("car_image").setAttribute("src",info_of_cars[index].source);
    document.getElementById("car_title").textContent=info_of_cars[index].name;
}

document.getElementById("previousButton").addEventListener("click",previous);
document.getElementById("nextButton").addEventListener("click",next);


//Display slides in a random  or increment order.
function slideGo(settings){
    let prev;
    interval = setInterval(function () {
        if (settings.isRandom) {
            do {
                current_car = Math.floor(Math.random()*info_of_cars.length);
            } while (current_car == prev);
            prev = current_car;
        }
        else{
            if (current_car==info_of_cars.length-1) {
                current_car=0;
            }
            else{
                current_car++;
            }
        }
        displaySlide(current_car);        
    }, settings.interval);
}
slideGo(settings);


//Previous function for the previous button.
function previous(){
    if(current_car!=0){
        current_car--;
    }
    else{
        current_car = info_of_cars.length-1;
    }
    displaySlide(current_car);
}
//Next function for the next button.
function next() {
    if(current_car!= info_of_cars.length-1){
        current_car++;
    }
    else{
        current_car = 0 ;
    }
    displaySlide(current_car);
}

//Mouse enter and leave
document.querySelectorAll(".arrow").forEach(function (arrow) {
    arrow.addEventListener("mouseenter",function () {
        clearInterval(interval);
    })
})
document.querySelectorAll(".arrow").forEach(function(arrow){
    arrow.addEventListener("mouseleave",function(){
        slideGo(settings);
    })
})
