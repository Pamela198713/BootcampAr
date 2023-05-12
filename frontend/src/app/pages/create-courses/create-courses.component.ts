import { Component } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-create-courses',
  templateUrl: './create-courses.component.html',
  styleUrls: ['./create-courses.component.css']
})
export class CreateCoursesComponent {
  constructor (private data: DataService

    ) {}

}
