class heroi {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  atacar() {
    let ataque;

    if (this.type === "mago") {
      ataque = "MAGIA";
    } else if (this.type === "guerreiro") {
      ataque = "ESPADA";
    } else if (this.type === "monge") {
      ataque = "ARTES MARCIAIS";
    } else if (this.type === "ninja") {
      ataque = "SHURIKEN";
    }

    console.log(
      `O Herói ${this.name} da classe ${this.type} atacou usando ${ataque}`
    );
  }
}

let heroi1 = new heroi("Naruto Uzumaki", 15, "ninja");
let heroi2 = new heroi("Patolino (O Mago)", 25, "mago");
let heroi3 = new heroi("Liu Kang", 24, "monge");
let heroi4 = new heroi("Seiya de Pégaso", 14, "guerreiro");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
