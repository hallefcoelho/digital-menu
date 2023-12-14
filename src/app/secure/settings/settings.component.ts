import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  primaryColor: string = "";

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.primaryColor = window.getComputedStyle(document.documentElement).getPropertyValue("--primary-color");
    });}

  teste() {
    console.log(this.primaryColor);
  }

  changeColor() {
    document.documentElement.style.setProperty("--primary-color", this.primaryColor);
  }
}

