import { Component, OnInit } from '@angular/core';
import { ImageService } from "../../service/image.service";
import { Observable } from "rxjs/Observable";
import { ImageFile } from "../../metier/imageFile";


@Component({
  selector: 'app-image-liste',
  templateUrl: './image-liste.component.html',
  styleUrls: ['./image-liste.component.css']
})
export class ImageListeComponent implements OnInit {

  public imagesFile: Observable<ImageFile[]>;
  constructor(private imageservice: ImageService) { }

  ngOnInit() {
    // jecoute au btuyau des image files du service en provenace du serveur
    this.imagesFile = this.imageservice.listenImagesFile();
    this.imageservice.refreshListe();
  }

}
