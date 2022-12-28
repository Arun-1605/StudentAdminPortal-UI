import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentservice:StudentService){

  }

  ngOnInit():void{

    this.studentservice.getStudent()
    .subscribe(
      (successful) => {
        console.log(successful);

      },
      (error) =>{
          console.log(error);
      }
    );

  }

}
