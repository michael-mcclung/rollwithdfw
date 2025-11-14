import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SushiSpot {
    id: number;
    name: string;
    area: string;
    rating: number;
    price: string;
    highlight: string;
    tags: string[];
}

@Injectable({
    providedIn: 'root'
})
export class SushiSpotsService {
    private baseUrl = '/api/spots'; // we’ll proxy this to 8080 in dev

    constructor(private http: HttpClient) { }

    getSpots(): Observable<SushiSpot[]> {
        return this.http.get<SushiSpot[]>(this.baseUrl);
    }

    getSpot(id: number): Observable<SushiSpot> {
        return this.http.get<SushiSpot>(`${this.baseUrl}/${id}`);
    }

    createSpot(spot: Partial<SushiSpot>): Observable<SushiSpot> {
        return this.http.post<SushiSpot>(this.baseUrl, spot);
    }
}
