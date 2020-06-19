import { Oferta } from './shared/oferta.model';
import { ComoUsar } from './shared/como-usar.model';
import { OndeFica } from './shared/onde-fica.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';

@Injectable()
export class OfertaService {

  private url_api = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }


  public ofertas: Array<Oferta> = [
    {
      id: 1,
      categoria: "restaurante",
      titulo: "Super Burger",
      descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
      anunciante: "Original Burger",
      valor: 29.90,
      destaque: true,
      imagens: [
        {url: "/assets/ofertas/1/img1.jpg"},
        {url: "/assets/ofertas/1/img2.jpg"},
        {url: "/assets/ofertas/1/img3.jpg"},
        {url: "/assets/ofertas/1/img4.jpg"}
      ]
    },
    {
      id: 2,
      categoria: "restaurante",
      titulo: "Cozinha Mexicana",
      descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
      anunciante: "Mexicana",
      valor: 32.90,
      destaque: true,
      imagens: [
        {url: "/assets/ofertas/2/img1.jpg"},
        {url: "/assets/ofertas/2/img2.jpg"},
        {url: "/assets/ofertas/2/img3.jpg"},
        {url: "/assets/ofertas/2/img4.jpg"}
      ]

    },
    {
      id: 4,
      categoria: "diversao",
      titulo: "Estância das águas",
      descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
      anunciante: "Estância das águas",
      valor: 31.90,
      destaque: true,
      imagens: [
        {url: "/assets/ofertas/3/img1.jpg"},
        {url: "/assets/ofertas/3/img2.jpg"},
        {url: "/assets/ofertas/3/img3.jpg"},
        {url: "/assets/ofertas/3/img4.jpg"},
        {url: "/assets/ofertas/3/img5.jpg"},
        {url: "/assets/ofertas/3/img6.jpg"}
      ]
    }
  ];

  public getOfertas(): Promise<Oferta[]> {
    return this.http.get(`${this.url_api}ofertas?destaque=true`)
      .toPromise()
      .then((resposta: any) => resposta)
  }

  public getOfertasPorCategoria(categoria: string) : Promise<Oferta[]> {
    return this.http.get(`${this.url_api}ofertas?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta)
  }

  public getOfertaById(id: number) : Promise<Oferta> {
    return this.http.get(`${this.url_api}ofertas?id=${id}`)
      .toPromise()
      .then((resposta: any) => resposta[0])
  }

  public getComoUsar(id: number) : Promise<ComoUsar> {
    return this.http.get(`${this.url_api}como-usar?id=${id}`)
      .toPromise()
      .then((resposta: any) => resposta[0])
  }

  public getOndeFica(id: number) : Promise<OndeFica> {
    return this.http.get(`${this.url_api}onde-fica?id=${id}`)
      .toPromise()
      .then((resposta: any) => resposta[0])
  }
}
