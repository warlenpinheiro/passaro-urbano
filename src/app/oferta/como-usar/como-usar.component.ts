import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComoUsar } from '../../shared/como-usar.model';
import { OfertaService } from '../../ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ OfertaService ]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: ComoUsar;

  constructor(private route: ActivatedRoute, private ofertaService: OfertaService) { }

  ngOnInit(): void {
    this.ofertaService.getComoUsar(this.route.parent.snapshot.params['id'])
      .then(( uso: ComoUsar ) => {
        this.comoUsar = uso;
      })
  }

}
