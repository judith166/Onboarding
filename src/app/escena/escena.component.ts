import { Component, Input } from '@angular/core';
import { iStep } from '../interfaces/iStep.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.css'
})
export class EscenaComponent {
  @Input()
  public ShowPhrases: iStep [] = [{
    title: '',
    description: '',
    img: '',
    bgcolor: ''
  }];

  public actualStep: number = 0;

  lastStep() {
    if (this.actualStep > 0) {
      this.actualStep--;
    } else {
      this.actualStep = this.ShowPhrases.length - 1;
    }
    console.log(this.actualStep);
  }

  nextStep() {
    if (this.actualStep < this.ShowPhrases.length - 1) {
      this.actualStep++;
    } else {
      this.actualStep = 0
    }

    console.log(this.actualStep)
  }

  activeStep(index: number) {
    this.actualStep = index;
  }
}
