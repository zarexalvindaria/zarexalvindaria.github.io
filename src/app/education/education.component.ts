import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  @Input() schoolName = '';
  @Input() schoolAddress = '';
  @Input() course = '';
  @Input() major  = '';
  @Input() graduation  = '';

  relatedCoursework = ["Database Management", "Mobile & Mobile Programming", 
                      "Data Structures", "UI/UX Design", "Web Programming", 
                      "Information Security", "Software Development",
                      "Systems & Management", "Programming Embedded Systems", 
                      "Systems and Design", "IT Analytics"];

  constructor() { }

  ngOnInit(): void {
  }

}
