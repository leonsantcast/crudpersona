import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  persona:Persona=new Persona()
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  Guardar(persona:Persona){
    this.service.createPersona(persona).subscribe(dato => {
      alert("Se agregó con éxito !!!")
      this.router.navigate(["listar"])
    })
  }

}
