import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { ImageFile } from "../metier/imageFile";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";


@Injectable()
export class ImageService {

  private bas_url: string = "http://localhost:8080/springMvcGalerie/api"
  private imageSubject: BehaviorSubject<ImageFile[]>;
  constructor(private http: Http) {
    this.imageSubject = new BehaviorSubject<ImageFile[]>([]);
   }

   public listenImagesFile(): Observable<ImageFile[]>{
     return this.imageSubject.asObservable();
   }

   // renvoie l'observable
   public refreshListe(): void{
    this.http.get(this.bas_url + "/imagesfull")
      .map(res => res.json() as ImageFile[])
      .toPromise()
      .then(imgs =>{
        // je publies les images provenant du srveur ds le tuyaux imageSubject
        this.imageSubject.next(imgs);
      })
   }

}
