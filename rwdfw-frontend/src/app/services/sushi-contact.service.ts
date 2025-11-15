import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SubmissionRequest {
    name: string;
    email: string;
    message: string;
}

@Injectable({ providedIn: 'root' })
export class SubmissionRequest {

    private apiUrl = 'http://your-backend-domain/api/sushi-submissions';

    constructor(private http: HttpClient) { }

    submitContactForm(payload: SubmissionRequest): Observable<any> {
        return this.http.post<any>(this.apiUrl, payload);
    }
}