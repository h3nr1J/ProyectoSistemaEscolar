import { Component, OnInit } from '@angular/core';
import { Cursos, RAlumno } from './interfaces/alumno';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  AlumnoVacio(): RAlumno {
    return {
      codigo: "",
      nombre: "",
      email: "",
      ApellidoPaterno: "",
      ApellidoMaterno: "",
    }
  };
  public alumno: RAlumno = this.AlumnoVacio();
  public alumnos: RAlumno[] = [];
  public nombre: string = "Roberto";
  public curso: Cursos = {
    primero: "Matematica",
    segundo: "Quimica",
    tercero: "Fisica",
    cuarto: "Educacion Fisica",
    quinto: "Religion",
    sexto: "Arte"
  }
  onDatos(): void {
    if (this.posicion = -1){
          console.log(this.alumno);
    this.alumnos.push(this.alumno);
    this.alumno = this.AlumnoVacio();
    console.log('El arreglo tiene ', this.alumnos.length, 'elementos')
    }else{ 
      let seleccion: RAlumno = this.alumnos[this.posicion];

      seleccion.codigo = this.alumno.codigo;
      seleccion.nombre = this.alumno.nombre;

      this.posicion =-1;
      this.alumno = this.AlumnoVacio();
    }
  }
  // onChange(event: Event):void{
  //   const elemento = event.target as HTMLInputElement;
  //   this.alumno.nombre = elemento.value;
  // }
  public posicion:number = -1;

  onEditar(i:number) {
    let seleccion: RAlumno = this.alumnos[i];
    this.alumno.codigo = seleccion.codigo;
    this.alumno.nombre = seleccion.nombre;
    this.alumno.ApellidoPaterno = seleccion.ApellidoPaterno;
    this.alumno.ApellidoMaterno = seleccion.ApellidoMaterno;
    this.alumno.email = seleccion.email;
    this.posicion = i;
  }
  onEliminar(i: number): void {
    this.alumnos.splice(i, 1);
  }
}
