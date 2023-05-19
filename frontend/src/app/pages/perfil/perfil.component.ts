import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {
  datoPerfil={id: "", Nombre: "",Apellido: "",Pais: "",Email: "",Contraseña: "",Rol: "",Telefono: "",Direccion: "",Foto: "",Perfil: ""}
  datoPerfil2=[{id: "", Nombre: "",Apellido: "",Pais: "",Email: "",Contraseña: "",Rol: "",Telefono: "",Direccion: "",Foto: "",Perfil: ""}]
 
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam){
    const id = parseInt(idParam, 10);
    this.dataService.getById('perfil',id ).subscribe({
      next: (data) => {
      this.datoPerfil = data;
      console.log(data);
     }});
    };

     this.dataService.getAll('perfil').subscribe({
      next: (data2) => {
      this.datoPerfil2 = data2;
    }});
  }


}
