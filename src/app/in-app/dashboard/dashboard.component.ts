import { Component, OnInit } from '@angular/core';
import { TravelappService } from '../../services/travelapp.service';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public travelappSelectedArticles: any[] = [];
  public travelappDestinations: any[] = [];
  public northwindProducts: any[] = [];
  public travelappImageSet1: any[] = [];
  public travelappImageSet2: any[] = [];

  constructor(
    private travelappService: TravelappService,
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    this.travelappSelectedArticles = this.travelappService.getData('Selected Articles');
    this.travelappDestinations = this.travelappService.getData('Destinations');
    this.travelappImageSet1 = this.travelappService.getData('Image Set 1');
    this.travelappImageSet2 = this.travelappService.getData('Image Set 2');
    this.northwindProducts = this.northwindService.getData('Products');
  }
}
