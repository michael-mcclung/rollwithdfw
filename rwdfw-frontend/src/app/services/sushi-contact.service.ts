import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

export interface SubmissionRequestPayload {
    resturant: string;
    area: string;
    email?: string;
    message: string;
}

@Injectable({ providedIn: 'root' })
export class SubmissionRequest {

    private apiBaseUrl = '${environment.apiBaseUrl}/api/submissions/sushi';

    constructor(private http: HttpClient) { }

    submitContactForm(payload: SubmissionRequestPayload): Observable<any> {
        return this.http.post(this.apiBaseUrl, payload);
    }
}