import { Injectable } from '@angular/core';

import { Film } from './../shared/film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor() { }

  filmsList(): Film[] {
    return [
      {
        id: 1,
        title: 'Vingadores: Guerra Infinita',
        description: 'Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade.',
        genre: 'Ação',
        image: '../../assets/filme1.jpg'
      },
      {
        id: 2,
        title: 'Jurassic World: Reino Ameaçado',
        description: 'Owen e Claire retornam à ilha Nublar para salvar os dinossauros restantes de um vulcão que está prestes a entrar em erupção. Eles encontram novas e aterrorizantes raças de dinossauros gigantes ao descobrir uma conspiração que ameaça todo o planeta.',
        genre: 'Aventura',
        image: '../../assets/filme2.jpg'
      },
      {
        id: 3,
        title: 'Piratas do Caribe: A Vingança de Salazar',
        description: 'O capitão Salazar é a nova pedra no sapato do capitão Jack Sparrow. Ele lidera um exército de piratas fantasmas assassinos e está disposto a matar todos os piratas existentes na face da Terra',
        genre: 'Aventura/Comédia',
        image: '../../assets/filme3.jpg'
      },
      {
        id: 4,
        title: 'Por Lugares Incríveis',
        description: 'Traduzido do inglês-All the Bright Places é um filme de drama romântico adolescente americano de 2020, dirigido por Brett Haley, a partir de um roteiro de Jennifer Niven e Liz Hannah, baseado no romance de mesmo nome de Niven.',
        genre: 'Drama',
        image: '../../assets/filme4.jpg'
      }
    ];
  }
}
