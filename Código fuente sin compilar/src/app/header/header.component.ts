import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  HostListener,
} from "@angular/core";
import { AppComponent } from "../app.component";
import { HttpClient } from "@angular/common/http";
import { AlgoritmosService } from "../algoritmos.service";
import { MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  showFiller = false;
  musica: boolean = false;

  closeDrawer() {
    this.drawer.close();
  }

  @ViewChild("drawer", { static: true }) drawer!: MatSidenav;

  //Método para cerrar el drawer haciendo click en cualquier parte de la pantalla
  @HostListener("document:click", ["$event"])
  public onClick(event: any): void {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.drawer.close();
      event.preventDefault();
    }
  }

  constructor(
    private _eref: ElementRef,
    public algoritmosService: AlgoritmosService
  ) {}

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
