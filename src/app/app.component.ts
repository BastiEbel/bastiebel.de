import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images = ['pexels-andrea-piacquadio-840996.jpg', 'pexels-danny-meneses-943096.jpg', 'pexels-karsten-madsen-18105.jpg'];

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
