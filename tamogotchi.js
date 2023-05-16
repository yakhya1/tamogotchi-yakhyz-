const tamogotchi = {
  name: 'egg',
  meal: 2,
  energy: 2,
  mood: 4,
  weigth: 73, 
  getStatus: function (status) {
    let goloden;
    let spat;
    let nastroy;
    let fatty;
    if(this.weigth >= 75){fatty= "Я жирный"
}else{fatty= "Я похудел"};
    if(this.meal < 3){
        goloden = "Я голоден"
    }else{ goloden= "Я не голоден"};
    if(this.energy < 3){
        spat = "Я хочу спать"
    }else { 
        spat="Я не хочу спать "};
    if(this.mood < 3){
        nastroy = "Мне скучно"
    }else { 
        nastroy = "Мне весело"};
        if(this.meal <= 0 || this.energy <= 0 || this.mood <= 0) {console.log(`${this.name} умер :(`)}
         else {
console.log(`Имя: ${this.name}, Еда: ${goloden}(${this.meal}), Энергия: ${spat}(${this.energy}), Настроение: ${nastroy}(${this.mood}), вес: ${fatty}(${this.weigth})`)}
},
 


setName: function(nameNew) {
  this.name = nameNew
  },
  eat: function () {
    this.meal++,
    this.mood--,
    this.weigth ++
  },
  sleep: function(){
    this.energy++,
    this.meal--,
    this.weigth++
  },
  play: function(){
    this.mood++,
    this.energy--,
    this.weigth--
  },
  run: function(){
    this.weigth--
  }
  
  
}   
tamogotchi.setName("Jamic");
tamogotchi.eat();
tamogotchi.eat();
tamogotchi.sleep();
tamogotchi.run();
tamogotchi.run();
tamogotchi.run();
tamogotchi.run();
tamogotchi.run();
tamogotchi.run();
tamogotchi.getStatus()
