import { Component, OnInit } from '@angular/core';
import { Feedback } from '../data_feedback/model/Feedback';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { NgIf } from '@angular/common';
import { emailDomainValidator } from '../Validators/email.validator';
import{inappropriateKeywordsValidator} from  '../Validators/keywords.validator'


@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [FormsModule , NgIf , ReactiveFormsModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent  implements OnInit{
//feedback : Feedback = new Feedback('', '', 8, '', ''); //data binding
feedbackForm !: FormGroup ;

constructor() {
}

ngOnInit(): void {
  this.feedbackForm = new FormGroup({
    emailAdress: new FormControl('', [Validators.required, Validators.email , emailDomainValidator('@DevOps.com')]),

    phoneNumber : new FormControl('', Validators.pattern("[0-9]+")) ,
    rate : new FormControl(8 , [Validators.min(0), Validators.max(10)]),
    feedbackTitle: new FormControl('' , Validators.required),
    feedback : new FormControl('', [Validators.required  ,inappropriateKeywordsValidator(['spam', 'bot'])] )
  })
}

submitFeedback(){
  //console.log('feedback form [Submit - ' ,this.feedback);
  console.log('#feedback form [Submit - ' ,this.feedbackForm.value );
}
}
