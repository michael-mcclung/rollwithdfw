import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface SubmissionRequestPayload {
    fullName: string;
    resturant: string;
    area: string;
    email?: string;
    message: string;
}
@Injectable({
    providedIn: 'root'
})
export class SubmissionRequest {

    private apiBaseUrl = `${environment.apiBaseUrl}/api/submissions`; // we’ll proxy this to 8080 in dev

    constructor(private http: HttpClient) { }

    submitContactForm(payload: SubmissionRequestPayload): Observable<SubmissionRequestPayload> {
        return this.http.post<SubmissionRequestPayload>(`${this.apiBaseUrl}`, payload);
    }
}