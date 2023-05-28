//czas
  function time(){
  let czas = new Date();
  let h = czas.getHours();
  let m = czas.getMinutes();
  let s = czas.getSeconds();
  if(h<10){h="0"+h}
  if(m<10){m="0"+m}
  if(s<10){s="0"+s}
  h.toString();
  m.toString();
  s.toString();
  let time = document.getElementById("time")
  time.innerHTML=`${h}:${m}:${s}`
  setTimeout("time()",1000);
  }
  time();

//data
  function data(){
    let czas = new Date();
    let weekday = czas.getDay();
    let day = czas.getDate();
    let month = czas.getMonth()+1;
    let data = document.getElementById("data")   
    if(weekday == 1){weekday="Monday"}
    if(weekday == 2){weekday="Tuesday"}
    if(weekday == 3){weekday="Wednesday"}
    if(weekday == 4){weekday="Thursday"}
    if(weekday == 5){weekday="Friday"}
    if(weekday == 6){weekday="Saturday"}
    if(weekday == 0){weekday="Sunday"} 
    if(month<10){
      month="0"+month;
    }
    weekday.toString();
    day.toString();
    month.toString();
    data.innerHTML = `${weekday}, ${day}.${month}`
  }
  data();
//konstruktor
  class champions {
    constructor(imie, strenght, avatar, id, id2 , k){
    this.k = Math.floor(Math.random() * (900 - 308 + 1) + 308); //sila enemy
    this.imie = imie;
    this.avatar = avatar;
    this.strenght= strenght;
    this.id=id;
    this.id2=id2
}
//ogolne wypisanie na poczatek
wypisz(){
document.querySelector("#wynik").innerHTML+=`
    <div class='info' onclick="change(x=${this.id})">
            <img src='grafy/${this.avatar}' > <br>
            <div class='info2' style='padding:15px;'>${this.imie} </div>
        </div>` 
}

//wybranego heroesa pole
walka(){
  document.querySelector("#walka").innerHTML=`
<div class='info'>
            <img src='grafy/${this.avatar}'> <br>
            <div class='info2' style='padding:15px;'>${this.imie} </div>
            <input type="hidden" value="${this.strenght}" id="a1">
        </div>` 

}
//enemy pole
walka1(){
  document.querySelector("#walka1").innerHTML=`
<div class='info'>
            <img src='grafy/${this.avatar}'> <br>
            <div class='info2' style='padding:15px;'>${this.imie}</div>
            <input type="hidden" value="${this.k}" id="a2">
        </div>` 

}
}
//heroes
var p1 = new champions("Connor", "719", "1.png", 1,0)
p1.wypisz(x=1);
var p2 = new champions("Jacob", "512", "2.png",2,0)
p2.wypisz(x=2);
var p3 = new champions("Joe","600", "3.png",3,0)
p3.wypisz(x=3);
var p4 = new champions("James", "515", "4.png",4,0)
p4.wypisz(x=4);
var p5 = new champions("Joseph", "592", "5.png",5,0)
p5.wypisz(x=5);
var p6 = new champions("Richard", "500", "6.png",6,0)
p6.wypisz(x=6);
var p7 = new champions("William", "486", "7.png",7,0)
p7.wypisz(x=7);
var p8 = new champions("Robert", "638", "8.png",8,0)
p8.wypisz(x=8);
var p9 = new champions("Isabella", "600", "9.png",9,0)
p9.wypisz(x=9);
var p10 = new champions("Mia", "209", "10.png",10,0)
p10.wypisz(x=10);


//enemy delkaracja
var e1 = new champions("Enemy", "0", "1.png", 0, 1)
var e2 = new champions("Enemy", "0", "2.png", 0, 2)
var e3 = new champions("Enemy", "0", "3.png", 0, 3)
var e4 = new champions("Enemy", "0", "4.png", 0, 4)
var e5 = new champions("Enemy", "0", "5.png", 0, 5)
var e6 = new champions("Enemy", "0", "6.png", 0, 6) 
var e7 = new champions("Enemy", "0", "7.png", 0, 7)
var e8 = new champions("Enemy", "0", "8.png", 0, 8)
var e9 = new champions("Enemy", "0", "9.png", 0, 9)
var e10 = new champions("Enemy", "0", "10.png", 0, 10)


//reload funkcja
function reload() {
location.reload();
}

    //funkcja wyboru heroesa                                                                   
function change(){
switch(x){
case 1:
p1.walka()
break;
case 2:
p2.walka()
break;
case 3:
p3.walka()
break;
case 4:
p4.walka()
break;
case 5:
p5.walka()
break;
case 6:
p6.walka()
break;
case 7:
p7.walka()
break;
case 8:
p8.walka()
break;
case 9:
p9.walka()
break;
case 10:
p10.walka()
break;
}

//pokazanie pól w walce
let walka1 = document.querySelector("#walka1");
let walka = document.querySelector("#walka");
walka1.style.display = "block";
walka.style.display = "block"; 
   document.querySelector("#wynik").style.display ="none";     
  change1();
}

//losowanie enemy
function change1(){
var y =  Math. floor(Math. random() * 10+1);    
  switch(y){
  case 1:
  e1.walka1()
  break;
  case 2:
  e2.walka1()
  break;
  case 3:
  e3.walka1()
  break;
  case 4:
  e4.walka1()
  break;
  case 5:
  e5.walka1()
  break;
  case 6:
  e6.walka1()
  break;
  case 7:
  e7.walka1()
  break;
  case 8:
  e8.walka1()
  break;
  case 9:
  e9.walka1()
  break;
  case 10:
  e10.walka1()
  break;

  
}
//przyciski wyswietlanie
document.getElementById('walcz').style.display ="inline-block";  
document.getElementById('uciekaj').style.display ="inline-block";
}
//walka na przycisk
function fight(){
  let walcz = document.querySelector("#walcz");
  walcz.style.display = "none";  
  let uciekaj = document.querySelector("#uciekaj");
  uciekaj.style.display = "none";

   

  //wywolanie fnct animacji i pokazanie funkcji fight2 
  animation();
  setTimeout(fight2, 500);

}

//dodatek do funkcji fight2
function fight2(){
  //ukrycie przeciwnika
  let enemy = document.querySelector("#walka1")
//nasza wybrana postac
  let a = document.querySelector("#a1").value;
//przeciwnik
  let b = document.querySelector("#a2").value;
  //ukrycie karty naszej
  let champions = document.querySelector(".info")
  //pokazanie przycisku powrotnego
  let powrot = document.querySelector("#powrot")
  powrot.style.display = "block";
  champions.style.display ="none"
  enemy.style.display ="none"
  if(a>b){
    //wyswietlenie zdj wygrana
      let win = document.querySelector("#win");
      win.style.display = "block";
      //wywołanie funkcji dodaj pkt
      IncPoints();
  }else if(a<b){
    //wyswietlenie zdj przegrana
      let lose = document.querySelector("#lose");
      lose.style.display = "block";
      //wywołanie funkcji decPoints
      decPoints();
  } else if(a==b){
    let remis = document.querySelector("#remis");
      remis.style.display = "block";
  }

}

//dodawanie pkt
function IncPoints(){
let points = document.getElementById("points").innerHTML;
let randomNumber = Math.floor(Math.random() * (160 - 100 + 1) + 100);
let result = Number(points) + randomNumber;
document.getElementById("points").innerHTML = result;
}
//odejmowanie pkt
function decPoints(){
  let points = document.getElementById("points").innerHTML;
  let result = Number(points) - 110;
  document.getElementById("points").innerHTML = result;
}

//animacja kart
function animation(){
  let info = document.querySelectorAll(".info");
  for(let x of info){
      x.style.transform = "rotateY(360deg)";
      x.style.transition = "all linear 0.5s";
  }
 
 }

 //spowrotem na ekran startowy bez resetu pkt
function back(){
    let walka1 = document.querySelector("#walka1");
    let walka = document.querySelector("#walka");
    walka1.style.display = "none";
    walka.style.display = "none";  
    let wynik = document.querySelector("#wynik");
    wynik.style.display = "block";
    let walcz = document.querySelector("#walcz");
    walcz.style.display = "none";
    let uciekaj = document.querySelector("#uciekaj");
    uciekaj.style.display = "none";
       let win = document.querySelector("#win");
       win.style.display = "none";
        let lose = document.querySelector("#lose");
        let remis = document.querySelector("#remis");
        lose.style.display = "none";
        remis.style.display = "none";
        let powrot = document.querySelector("#powrot");
        powrot.style.display = "none";
}

//uciekaj
function run(){
  let points = document.getElementById("points").innerHTML;
  let result = Number(points) - 50;
  document.getElementById("points").innerHTML = result;
  let walka1 = document.querySelector("#walka1");
  let walka = document.querySelector("#walka");
  walka1.style.display = "none";
  walka.style.display = "none";  
  let wynik = document.querySelector("#wynik");
  wynik.style.display = "block";
  let walcz = document.querySelector("#walcz");
  walcz.style.display = "none";
  let uciekaj = document.querySelector("#uciekaj");
  uciekaj.style.display = "none";
}

