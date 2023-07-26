import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AlgoritmosService {
  aleatorio: number = 0;
  jsonData: any;

  constructor(private http: HttpClient) {
    this.fetchJsonData();
    console.log(this.jsonData);
  }

  generarAleatorio() {
    // Generar un número aleatório para mostrar en cada resolución del cubo un algoritmo de mezcla diferente
    this.aleatorio = Math.floor(Math.random() * 24);
  }

  fetchJsonData() {
    this.http.get<any>("assets/algoritmos.json").subscribe(
      (data) => {
        console.log("JSON data:", data);
        this.jsonData = data;
      },
      (error) => {
        console.error("Failed to fetch JSON data:", error);
      }
    );
  }
}
