import { Component, HostListener, OnInit } from "@angular/core";
import { AlgoritmosService } from "../algoritmos.service";

@Component({
  selector: "app-four",
  templateUrl: "./four.component.html",
  styleUrls: ["./four.component.css"],
})
export class FourComponent implements OnInit {
  tiempo: number = 0;
  timerId: any;
  timerActive: boolean = false;
  running: boolean = false;
  tiempos4x4: any[] = [];
  cubo4: number = 4;
  date4: Date = new Date();
  avg4: number = 0;

  constructor(public algoritmosService: AlgoritmosService) {}

  ngOnInit() {
    this.algoritmosService.generarAleatorio();
  }

  startTimer() {
    this.tiempo = 0;
    this.timerActive = true;
    this.timerId = setInterval(() => {
      this.tiempo += 0.01;
      this.tiempo = Number(this.tiempo.toFixed(2)); // Método para mostrar solo dos decimales
    }, 10);
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
    event.preventDefault(); // Prevenir scroll vertical con la barra espaciadora
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
    this.insertartiempo4();
    this.tiempo = 0; // Reiniciar el contador a 0
  }

  insertartiempo4() {
    const data = {
      cubo: this.cubo4,
      tempo: this.tiempo,
      data: this.date4,
    };
    this.date4 = new Date();
    const id = new Date().getTime().toString();
    if (this.tiempo > 0) {
      localStorage.setItem(id, JSON.stringify(data));
      console.log("Data saved to local storage with id:", id, "Data:", data);
      this.tiempos4x4.push(this.tiempo);
      this.avg4 = this.media(this.tiempos4x4);
    }
    this.stopTimer();
    // this.instanciar();
    this.tiempo = 0;
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
}
