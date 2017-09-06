import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Profil } from "../metier/profil";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class ProfilService {

  private searchTerm: string;
  private filter: string;
  private profilSubject: BehaviorSubject<Profil[]>;

  constructor(private http: Http) {
    this.profilSubject = new BehaviorSubject<Profil[]>([]);
    
   }
   listenProfils(): Observable<Profil[]>{
     return this.profilSubject.asObservable();
   }
   refreshListe():void{
     let url: string;
     console.log(this.filter);
     
     if (this.searchTerm != null && this.filter != null && this.searchTerm.length>0 &&this.filter.length>0){
      url = `http://localhost:8080/springmvcExoAngular4Facebook/api/profils/searchBy${this.filter.charAt(0).toUpperCase()+this.filter.slice(1)}/${this.searchTerm}`;
     } 
     else{
      url = "http://localhost:8080/springmvcExoAngular4Facebook/api/profils";
     }
     console.log('url ' + url);
     
     this.http.get(url).map(resp => <Profil[]>resp.json()).toPromise()
      .then(data =>{
        this.profilSubject.next(data)
      });
   }

   deleteProduct(pid: number): Promise<any>{
    return this.http.delete(`http://localhost:8080/springmvcExoAngular4Facebook/api/profils/${pid}`)
       .map(res => res.json() as any)
       .toPromise();
  }

  findById(pid: number): Promise<Profil>{
    return this.http.get(`http://localhost:8080/springmvcExoAngular4Facebook/api/profils/${pid}`)
      .map(res => res.json() as Profil)
      .toPromise();
  }
  save(p: Profil): Promise<Profil>{
    return this.http.post(`http://localhost:8080/springmvcExoAngular4Facebook/api/profils`, p)
      .map(res => res.json() as Profil)
      .toPromise();
  }
  SetSearchTerm(s: string, filter: string): void{
    this.searchTerm = s;
    this.filter = filter;
    this.refreshListe();
  }
}
