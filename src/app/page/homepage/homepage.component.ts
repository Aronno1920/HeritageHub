import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HeritageService } from '../../services/heritage.service';
import { Place } from '../../shared/models/Place'
import { SearchComponent } from "../../pagepart/search/search.component";
import { TagsComponent } from '../../pagepart/tags/tags.component';
import { NotfoundComponent } from '../notfound/notfound.component'

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.css',
    imports: [CommonModule, RouterModule, SearchComponent, TagsComponent, NotfoundComponent]
})
export class HomePageComponent implements OnInit {
  places:Place[]= [];

  constructor(private hService:HeritageService, private route:ActivatedRoute){
  }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if(params['searchItem'])
        this.places=this.hService.getAllPlaces().filter(place => place.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else if(params['tag'])
        this.places = this.hService.getPlacesByTag(params['tag'])  
      else
        this.places=this.hService.getAllPlaces();
      })
    }

}
