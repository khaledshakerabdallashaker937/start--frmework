import { Component, ElementRef, HostListener, ViewChild, viewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
@ViewChild('hamada') el!:ElementRef; //ref nav




@HostListener('window:scroll') onScroll(){

  if(scrollY>100){
this.el.nativeElement.style.paddingBlock = '30px'
  }else
{

  this.el.nativeElement.style.paddingBlock = '10px'

}
  console.log("hello")

}


}
