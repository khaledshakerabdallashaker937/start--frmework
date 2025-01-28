import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

isHidden:boolean = true;
                                                                                
                                                               
modelimg :String = '' ;


imgurl:String[] = [
'../../assets/images/poert1.png',
'../../assets/images/port2.png',
'../../assets/images/port3.png',
'../../assets/images/poert1.png',
'../../assets/images/port2.png',
'../../assets/images/port3.png',
];
hideModel(target:EventTarget |null,img:HTMLImageElement):void{


if( target == img){

return;


} else{this.isHidden=true}



console.log("hello");


  }

}


