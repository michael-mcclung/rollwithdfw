import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SubmissionRequestPayload {
    resturant: string;
    area: string;
    email?: string;
    message: string;
}

@Injectable({ providedIn: 'root' })
export class SubmissionRequest {

    private apiUrl = 'https://api.rollwithdfw.com/api/sushi-submissions';

    constructor(private http: HttpClient) { }

    submitContactForm(payload: SubmissionRequestPayload): Observable<any> {
        return this.http.post(this.apiUrl, payload);
    }
}