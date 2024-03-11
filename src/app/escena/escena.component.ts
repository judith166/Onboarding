import { Component, Input } from '@angular/core';
import { iStep } from '../interfaces/iStep.interface';
import { CommonModule, } from '@angular/common';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.css'
})
export class EscenaComponent {
  @Input()
  public ShowPhrases: iStep [] = [];

  public actualStep: number = 0;

  lastStep(): void {
    if (this.actualStep > 0) {
      this.actualStep--;
    } else {
      this.actualStep = this.ShowPhrases.length - 1;
    }
  }

  nextStep(): void {
    if (this.actualStep < this.ShowPhrases.length - 1) {
      this.actualStep++;
    } else {
      this.actualStep = 0
    }
  }

  activeStep(index: number) {
    this.actualStep = index;
  }
}
