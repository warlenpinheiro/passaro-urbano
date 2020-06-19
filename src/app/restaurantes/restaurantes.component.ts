import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [ OfertaService ]
})
export class RestaurantesComponent implements OnInit {

  public ofertas: Oferta[];

  constructor(
    private ofertasService: OfertaService
  ) { }

  ngOnInit(): void {
    this.ofertasService.getOfertasPorCategoria('restaurante')
      .then(( ofertas: Oferta[]) => this.ofertas = ofertas);
  }

}
