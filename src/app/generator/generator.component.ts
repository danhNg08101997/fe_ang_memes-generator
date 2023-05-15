import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit{
  // @ViewChild('memeCanvas', {static:false});
  constructor() {}

  ngOnInit(): void {
    
  }

  preview() {
    console.log("preview function working")
  }

}
