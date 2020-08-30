import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../../Service/service.service'
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  personas:Persona[]
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
  
    this.service.getPersonas()
    .subscribe(datos => {
      this.personas=datos;
    })
  }

  Editar(persona:Persona){
    localStorage.setItem("id", persona.id.toString())
    this.router.navigate(["edit"])
  }

  Borrar(persona:Persona){
    this.service.borrarPersona(persona).subscribe(dato => {
      this.personas=this.personas.filter(p => p!==persona)
      alert("Eliminación exitosa !!!")
      this.router.navigate(["listar"])
    })
  }
}
