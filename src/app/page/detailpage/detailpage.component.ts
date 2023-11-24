import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Place } from '../../shared/models/Place';
import { ActivatedRoute, Router } from '@angular/router';
import { HeritageService } from '../../services/heritage.service';
import { NotfoundComponent } from '../notfound/notfound.component'

@Component({
  selector: 'app-detailpage',
  standalone: true,
  imports: [CommonModule, NotfoundComponent],
  templateUrl: './detailpage.component.html',
  styleUrl: './detailpage.component.css'
})
export class DetailPageComponent implements OnInit {

  place!: Place;

  constructor(private actRouter: ActivatedRoute,
    private hService: HeritageService,
    private router: Router) {
    actRouter.params.subscribe(params => {
      if (params['id'])
        this.place = hService.getPlaceById(params['id']);
    })
  }

  ngOnInit(): void {

  }

  gotoHomePage() {
    this.router.navigateByUrl('/homepage');
  }

}
