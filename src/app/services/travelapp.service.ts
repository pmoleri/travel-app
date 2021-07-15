import { Injectable } from '@angular/core';
import { Travelapp } from './travelapp';

@Injectable({
  providedIn: 'root'
})
export class TravelappService {
  getData(tableName: string): any[] {
    return Travelapp[tableName];
  }
}
