import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";

  constructor() {
    this.doSomethingA();
    this.doSomethingB();
  }

  public doSomethingA() {
    for (let i = 0; i < 200; i++) {
      if (i === 50) {
      }

      if (i === 70) {
      }

      if (i === 60) {
      }

      if (i === 90) {
      }

      if (i === 100) {
      }

      if (i === 100) {
      }
    }
  }

  public doSomethingB() {
    for (let i = 0; i < 200; i++) {
      if (i === 50) {
      }

      if (i === 70) {
      }

      if (i === 60) {
      }

      if (i === 90) {
      }

      if (i === 100) {
      }

      if (i === 100) {
      }
    }
  }
}
