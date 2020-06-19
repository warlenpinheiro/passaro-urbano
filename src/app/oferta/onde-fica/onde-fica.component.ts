import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OndeFica } from '../../shared/onde-fica.model';
import { OfertaService } from '../../ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [ OfertaService ]
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: OndeFica;

  constructor(private route: ActivatedRoute, private ofertaService: OfertaService) { }

  ngOnInit(): void {
    this.ofertaService.getOndeFica(this.route.parent.snapshot.params['id'])
      .then(( local: OndeFica ) => {
        this.ondeFica = local;
      })
  }

}
