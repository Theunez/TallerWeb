import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class VillanoService {

    //private hero:any[]=
    private villano:Villano[]=
        [
            {
              nombre: "Loki",
              bio: "Dios del Engaño, su objetivo de dominar Asgard lo lleva a situarse en el bando de quien más le convenga en cada ocasión, no hay duda de que tiene un buen corazón en el fondo que lo lleva a ayudar a su hermano una y otra vez.",
              img: "assets/img/loki.png",
              aparicion: "1941-11-01",
              casa:"DC"
            },
            {
              nombre: "Nebula",
              bio: "Se nos presenta como una asesina sin escrúpulos que cumple sin rechistar las órdenes de Thanos. Nébula es una niña a la que sacaron de su hogar y torturaron durante el toda su vida. Una guerrera que, en realidad, solo quería una hermana.",
              img: "assets/img/nebula.png",
              aparicion: "1939-05-01",
              casa:"DC"
            },
            {
              nombre: "Ultron",
              bio: "Es una combinación retorcida de la Inteligencia Artificial de Jarvis, los conocimientos adquiridos en la red y los razonamientos del propio Iron Man, su línea de pensamiento pronto gira en sentido similar a la de Thanos y decide que, para salvar la Tierra, debe destruirla.",
              img: "assets/img/ultron.png",
              aparicion: "1964-01-01",
              casa: "Marvel"
            },
            {
              nombre: "Erik Killmonger",
              bio: "Su padre murió a manos de su propio hermano en circunstancias no del todo nobles. Desde entonces, busca vengarse de la familia y la nación que le destrozaron la vida. Es esa empuje y obstinación con reminiscencias de Íñigo Montoya lo que lo convierten en uno de los mejores villanos.",
              img: "assets/img/erik.png",
              aparicion: "1962-05-01",
              casa:"Marvel"
            },
            {
              nombre: "Hela",
              bio: "La hermana secreta de Thor y Loki —y legítima heredera del trono de Asgard— es una de las villanas más poderosas del MCU. Es una de las pocas que puede enfrentarse a Thor cuerpo a cuerpo y salir victoriosa. Ella destruyó el Mjolnir sin apenas esfuerzo y dejó al Dios del Trueno completamente desmotivado.",
              img: "assets/img/hela.png",
              aparicion: "1940-06-01",
              casa: "DC"
            },
            {
              nombre: "Thanos",
              bio: "Él es el hijo de Mentor y el hermano de Starfox. Thanos es uno de los villanos más poderosos de todo el Mundo Marvel y se ha enfrentado con muchos héroes, incluidos los Vengadores, los Guardianes de la Galaxia, los Cuatro Fantásticos, los X-Men, entre otros.",
              img: "assets/img/thanos.png",
              aparicion: "1962-08-01",
              casa: "Marvel"
            },
            {
              nombre: "Harley Quinn",
              bio: "La doctora Harleen Frances Quinzel era una psiquiatra del asilo Arkham cuando se enamoró del Joker, le ayudó a escapar y se convirtió en la villana Harley Quinn.",
              img: "assets/img/harley.png",
              aparicion: "1974-11-01",
              casa: "Marvel"
            }
    ];

    constructor(){
        console.log("Servicio listo para usar!!");
    }

    //getHeros(){
    getVillanos():Villano[]{
        return this.villano;
    }

    getVillano(id:number){
        return this.villano[id];   
    }

    buscarVillano(palabra:string):Villano[]{
      let villanoArr:Villano[] = [];
      palabra = palabra.toLowerCase();
      for( let hero of this.villano){
        let nombre = hero.nombre.toLowerCase();
        if(nombre.indexOf(palabra)>=0){
           villanoArr.push(hero);
        }
      }
      return villanoArr;
    }

}

export interface Villano{
    nombre:string,
    bio:string,
    img:string,
    aparicion:string,
    casa:string
}