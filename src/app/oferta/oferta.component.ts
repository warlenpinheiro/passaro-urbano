import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Oferta } from '../shared/oferta.model'
import { OfertaService } from '../ofertas.service'

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertaService ]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertaService
  ) { }

  ngOnInit() {
    this.ofertasService.getOfertaById(this.route.snapshot.params['id'])
      .then(( oferta: Oferta ) => {
        this.oferta = oferta
      })
  }

}
