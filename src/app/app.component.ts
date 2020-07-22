import { Component, OnInit } from '@angular/core';

import * as htmlPdf from 'html2pdf.js';

import { FilmsService } from './services/films.service';

import { Film } from './shared/film.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'ng-html-to-pdf';
  films: Film[];

  constructor(private serviceFilms: FilmsService) {}

  ngOnInit() {
    this.films = this.serviceFilms.filmsList();
  }

  generatePdf() {
    const options = {
      filename: 'lista_de_filmes.pdf',
      image: {type: 'png'},
      html2Canvas: {},
      jsPDF: {orientation: 'landscape'}
    };

    const content: Element = document.getElementById('export');

    htmlPdf()
      .from(content)
      .set(options)
      .save();
  }

}
