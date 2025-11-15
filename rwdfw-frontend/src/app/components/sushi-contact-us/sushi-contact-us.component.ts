import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SubmissionRequest } from '../../services/sushi-contact.service';

@Component({
  selector: 'app-sushi-contact-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sushi-contact-us.component.html',
  styleUrls: ['./sushi-contact-us.component.css']
})
export class SushiContactUsComponent {
  sending = false
  success = false;
  error = false;

  submissionForm!: FormGroup;

  constructor(private fb: FormBuilder, private submissionService: SubmissionRequest) {
    this.submissionForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.submissionForm.valid) {
      this.sending = true;
      this.success = false;
      this.error = false;

      this.submissionService.submitContactForm(this.submissionForm.value as any).subscribe({
        next: () => {
          this.sending = false;
          this.success = true;
          this.submissionForm.reset();
        },
        error: () => {
          this.sending = false;
          this.error = true;
        }
      });
    }
  }
}
