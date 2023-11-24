import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css'
})
export class NotfoundComponent implements OnInit {
  @Input() visible:boolean=false;
  @Input() notFoundMessage:string='Error 404: Page not found';
  @Input() resetLinkText:string='Reset'; 
  @Input() resetLinkRoute:string='/';

  constructor(){}

  ngOnInit(): void {
    
  }
}
