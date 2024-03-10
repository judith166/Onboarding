import { Component,OnInit } from '@angular/core';
import { EscenaComponent } from '../escena/escena.component';
import { CommonModule } from '@angular/common';
import { iStep } from '../interfaces/iStep.interface';
import { StepsPhraseService } from '../service/steps.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EscenaComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
 showPhrasesArr: iStep[] = [];
 constructor(private stepsPhraseService: StepsPhraseService) {
  
 }

 ngOnInit(): void {
   this.showPhrasesArr = this.stepsPhraseService.getOnboardingPhrase();
 }
}
