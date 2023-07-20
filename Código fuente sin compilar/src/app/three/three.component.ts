import { Component, HostListener, OnInit } from "@angular/core";
import { AppComponent } from "../app.component";
import { HeaderComponent } from "../header/header.component";
import { AlgoritmosService } from "../algoritmos.service";

interface Resultado {
  idResultado: number;
  tiempo: number;
}

@Component({
  selector: "app-three",
  templateUrl: "./three.component.html",
  styleUrls: ["./three.component.css"],
})
export class threeComponent implements OnInit {
  tiempo: number = 0;
  timerId: any;
  timerActive: boolean = false;
  running: boolean = false;
  tiempos3x3: any[] = [];
  date3: Date = new Date();
  cubo3: number = 3;
  avg3: number = 0;

  constructor(public algoritmosService: AlgoritmosService) {}

  ngOnInit() {
    this.algoritmosService.generarAleatorio();
  }

  startTimer() {
    this.tiempo = 0;
    this.timerActive = true;
    this.timerId = setInterval(() => {
      this.tiempo += 0.01;
      this.tiempo = Number(this.tiempo.toFixed(2));
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
    event.preventDefault(); // Evitar scroll vertical con barra espaciadora, comportamiento por defecto
    if (this.timerActive) {
      this.stopTimer();
    } else {
      this.startTimer();
    }
  }

  @HostListener("window:keydown.enter", ["$event"])
  onEnterKeyDown(event: KeyboardEvent) {
    if (this.timerActive) {
      this.stopTimer(); // Parar el cronómetro si está activo
    }
    this.insertartiempo3(); //Guardar tiempo si el cronómetro no está activo
    this.tiempo = 0;
  }

  insertartiempo3() {
    const data = {
      cubo: this.cubo3,
      tempo: this.tiempo,
      data: this.date3,
    };
    this.date3 = new Date();
    const id = new Date().getTime().toString();
    if (this.tiempo > 0) {
      // Comprobar que el cronómetro sea mayor que cero para no insertar tiempos vacíos
      localStorage.setItem(id, JSON.stringify(data));
      console.log("Data saved to local storage with id:", id, "Data:", data);
      this.tiempos3x3.push(this.tiempo);
      this.avg3 = this.media(this.tiempos3x3);
    }
    this.stopTimer();
    this.tiempo = 0;
  }
}
