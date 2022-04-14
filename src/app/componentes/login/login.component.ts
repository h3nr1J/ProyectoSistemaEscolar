import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  public usuario:string = "dushan";
  public contrasenia: string = "123";
  public p1:string = "-";
  public p2:string = "-";
  validar(page:string):void{
    if(this.p1 == this.usuario && this.contrasenia == this.p2){
      this.router.navigate([`${page}`]);
    }
    else{
      console.log("datos incorrectos")
    }
  }
}
