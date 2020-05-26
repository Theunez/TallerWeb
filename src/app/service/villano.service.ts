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
              bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
              img: "assets/img/loki.png",
              aparicion: "1941-11-01",
              casa:"DC"
            },
            {
              nombre: "Nebula",
              bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
              img: "assets/img/nebula.png",
              aparicion: "1939-05-01",
              casa:"DC"
            },
            {
              nombre: "Ultron",
              bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
              img: "assets/img/ultron.png",
              aparicion: "1964-01-01",
              casa: "Marvel"
            },
            {
              nombre: "Hulk",
              bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
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
              nombre: "Spider-Man",
              bio: "Él es el hijo de Mentor y el hermano de Starfox. Thanos es uno de los villanos más poderosos de todo el Mundo Marvel y se ha enfrentado con muchos héroes, incluidos los Vengadores, los Guardianes de la Galaxia, los Cuatro Fantásticos, los X-Men, entre otros.",
              img: "assets/img/thanos.png",
              aparicion: "1962-08-01",
              casa: "Marvel"
            },
            {
              nombre: "Wolverine",
              bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
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