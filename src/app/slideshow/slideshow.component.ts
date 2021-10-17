import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['pexels-andrea-piacquadio-840996.jpg', 'pexels-danny-meneses-943096.jpg', 'pexels-karsten-madsen-18105.jpg'];

  headlines = ['Bring engineering to the next level', 'Born to code', 'Working hard to come further'];

  currenImage = 0;
  showImage = true;

  ngOnInit(){
    this.updateImages();
  }

  updateImages() {
    setInterval(() => {
      this.currenImage++;
      this.currenImage = this.currenImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 8000);
  }

}
