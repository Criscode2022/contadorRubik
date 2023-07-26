import { Component, HostListener, OnInit } from "@angular/core";
import { AppComponent } from "../app.component";
import { HeaderComponent } from "../header/header.component";
import { AlgoritmosService } from "../algoritmos.service";

@Component({
  selector: "app-two",
  templateUrl: "./two.component.html",
  styleUrls: ["./two.component.css"],
  animations: [],
})
export class twoComponent implements OnInit {
  tiempo: number = 0;
  timerId: any;
  timerActive: boolean = false;
  running: boolean = false;
  tiempos2x2: any[] = [];
  cubo2: number = 2;
  date2: Date = new Date();
  avg2: number = 0;

  constructor(public algoritmosService: AlgoritmosService) {}

  ngOnInit() {
    this.algoritmosService.generarAleatorio();
  }

  startTimer() {
    this.tiempo = 0;
    this.timerActive = true;
    this.timerId = setInterval(() => {
      this.tiempo += 0.01;
      this.tiempo = Number(this.tiempo.toFixed(2)); // Mostrar solo dos decimales
    }, 10);
  }
  media(array: Object[]) {
    let sum = 0;
    array.forEach((element: any) => {
      sum += element;
    });
    let average = 0;
    if (array.length > 0) {
      average = sum / array.length;
    }
    return Number(average.toFixed(2));
  }

  stopTimer() {
    this.timerActive = false;
    clearInterval(this.timerId);
  }

  resetStopwatch() {
    this.running = false;
    this.tiempo = 0;
  }
  @HostListener("window:keydown.space", ["$event"])
  onSpaceKeyDown(event: KeyboardEvent) {
    event.preventDefault(); // Prevenir scroll vertical al pulsar la barra espaciadora;
    if (this.timerActive) {
      this.stopTimer();
    } else {
      this.startTimer();
    }
  }

  @HostListener("window:keydown.enter", ["$event"])
  onEnterKeyDown(event: KeyboardEvent) {
    if (this.timerActive) {
      this.stopTimer();
    }
    this.insertartiempo2();
    this.tiempo = 0;
  }

  insertartiempo2() {
    const data = {
      cubo: this.cubo2,
      tempo: this.tiempo,
      data: this.date2,
    };
    this.date2 = new Date();
    const id = new Date().getTime().toString();
    if (this.tiempo > 0) {
      localStorage.setItem(id, JSON.stringify(data));
      console.log(
        "Datos guardados en el Local Storage con id:",
        id,
        "Data:",
        data
      );
      this.tiempos2x2.push(this.tiempo);
      this.avg2 = this.media(this.tiempos2x2);
    }
    this.stopTimer();
    this.tiempo = 0;
  }
}
