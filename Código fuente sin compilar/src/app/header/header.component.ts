import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { AppComponent } from "../app.component";
import { HttpClient } from "@angular/common/http";
import { AlgoritmosService } from "../algoritmos.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  showFiller = false;
  musica: boolean = false;

  constructor(public algoritmosService: AlgoritmosService) {}

  ngOnInit() {}

  @ViewChild("myAudio") myAudio!: ElementRef;

  generarAleatorio() {
    this.algoritmosService.generarAleatorio();
  }

  cambiarMusica() {
    const audioElement = this.myAudio.nativeElement;
    if (this.musica) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }
}
