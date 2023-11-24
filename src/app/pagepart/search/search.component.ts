import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  searchItem:string='';
  
  constructor(private route:ActivatedRoute, private router:Router){
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchItem'])
      this.searchItem=params['searchItem'];
    })
  }

  search():void{
    if(this.searchItem){
      this.router.navigateByUrl('/search/'+this.searchItem)
    }
  }

}
