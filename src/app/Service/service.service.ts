import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Persona } from '../Modelo/Persona'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient){
  }

  Url = 'http://localhost:8095/personas'
  getPersonas(){
    return this.http.get<Persona[]>(this.Url)
  }

  createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url, persona)
  }

  getPersonaId(id:Number){
    return this.http.get<Persona>(this.Url+"/"+id)
  }

  modificaPersona(persona:Persona){
    return this.http.put<Persona>(this.Url+"/"+persona.id, persona)
  }

  borrarPersona(persona:Persona){
    return this.http.delete<Persona>(this.Url+"/"+persona.id)
  }
}
