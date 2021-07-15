import { Component, OnInit } from '@angular/core';
import { TravelappService } from '../../services/travelapp.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  public travelappArticlesSource1: any[] = [];
  public travelappArticlesSource2: any[] = [];
  public travelappArticlesSource3: any[] = [];
  public travelappArticlesSource4: any[] = [];
  public travelappSelectedArticles: any[] = [];

  constructor(
    private travelappService: TravelappService,
  ) {}

  ngOnInit() {
    this.travelappArticlesSource1 = this.travelappService.getData('Articles Source 1');
    this.travelappArticlesSource2 = this.travelappService.getData('Articles Source 2');
    this.travelappArticlesSource3 = this.travelappService.getData('Articles Source 3');
    this.travelappArticlesSource4 = this.travelappService.getData('Articles Source 4');
    this.travelappSelectedArticles = this.travelappService.getData('Selected Articles');
  }
}
