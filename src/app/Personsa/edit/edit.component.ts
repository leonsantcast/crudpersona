import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  persona:Persona=new Persona()
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.Editar()
  }

  Editar(){
    let id=localStorage.getItem("id")
    this.service.getPersonaId(+id).subscribe(dato => {
      this.persona=dato
    })
  }

  Actualizar(persona:Persona){
    this.service.modificaPersona(persona).subscribe(dato =>{
      alert("Modificación exitosa !!!")
      this.router.navigate(["listar"])
    })
  }

}
