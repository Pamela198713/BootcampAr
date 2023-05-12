import { Component } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  constructor (private data: DataService

    ) {}

}

