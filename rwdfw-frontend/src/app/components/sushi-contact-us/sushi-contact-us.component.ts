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
  submissionForm: FormGroup;
  sending = false
  success = false;
  error = false;

  constructor(
    private fb: FormBuilder,
    private submissionService: SubmissionRequest
  ) {
    this.submissionForm = this.fb.group({
      restaurant: ['', [Validators.required]],
      area: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.submissionForm.invalid || this.sending) {
      this.submissionForm.markAllAsTouched();
      return;
    }

    this.sending = true;
    this.success = false;
    this.error = false;

    const payload = this.submissionForm.value; // { restaurant, area, email, message }

    this.submissionService.submitContactForm(payload).subscribe({
      next: () => {
        this.sending = false;
        this.success = true;
        this.error = false;
        this.submissionForm.reset();
      },
      error: (err) => {
        console.error('Nomination submit failed', err);
        this.sending = false;
        this.success = false;
        this.error = true;
      }
    });
  }
}
