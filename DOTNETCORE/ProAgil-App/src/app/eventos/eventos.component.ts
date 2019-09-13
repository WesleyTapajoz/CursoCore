import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  // eventos: any = [{
  //   EventoId: 1,
  //   Tema: 'Angular',
  //   Local: 'Cuiabá'
  // },
  // {
  //   EventoId: 2,
  //   Tema: '.NET Core',
  //   Local: 'Várzea Grande'
  // },
  // {
  //   EventoId: 1,
  //   Tema: 'Angular e .NET Core',
  //   Local: 'Poconé'
  // }];

  _filtroLista: string;

  get filtroLista(): string{
    return this._filtroLista;
  }

  set filtroLista(value: string){
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  eventosFiltrados: any = [];
  eventos: any = [];
  imagemLargura = 70;
  imagemMargem = 2;
  mostrarImagem = false;
 // filtroLista = '';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
  }

  alternarImagem(){
    this.mostrarImagem = !this.mostrarImagem;
  }

  filtrarEventos(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      evento => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  getEventos(){
      this.eventos = this.http.get('http://localhost:5000/api/values').subscribe(
      response => {
        this.eventos = response;
      }, error => {
        console.log(error);
      }
    );
  }
}
