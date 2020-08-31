import { Component, OnInit } from '@angular/core';
import { ProductSlider } from '../../shared/data/slider';
import { Product } from '../../shared/classes/product';
import { ProductService } from '../../shared/services/product.service';
import {HomeService} from '../../shared/services/home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public products: Product[] = [];
  public productCollections: any[] = [];
   public sliders:any[]=[];
   public collections:any[]=[];
  constructor(public productService: ProductService,private homeService:HomeService) { 

    this.homeService.Banner().subscribe((data)=>{
      console.log(data);
      this.sliders=data.image;
    });
    this.homeService.Feature().subscribe((data)=>{
      console.log(data);
      this.collections=data.image;
    });

 
    this.productService.getProducts.subscribe(response => {
      console.log(response+'response->>>>>>>>>>>>>>>')
      this.products = response.data.list.filter(item => item.type == 'fashion');
      // Get Product Collection
      this.products.filter((item) => {
        item.collection.filter((collection) => {
          const index = this.productCollections.indexOf(collection);
          if (index === -1) this.productCollections.push(collection);
        })
      })
    });
  }

  public ProductSliderConfig: any = ProductSlider;

  // public sliders = [{
   
  //   image: 'https://ik.imagekit.io/dailyobjects/assets/images/homepage/desktop/banner/top-slider/home-office-desktop.jpg?tr=w-1280'
  // }, {
   
  //   image: 'https://ik.imagekit.io/dailyobjects/assets/images/homepage/desktop/banner/top-slider/uv-sterilizer-desktop-02.jpg?tr=w-1280'
  // }]

  // Collection banner
  // public collections = [{
  //   image: 'https://ik.imagekit.io/dailyobjects/assets/images/homepage/desktop/banner/homepage-mid/tote-bags-01.jpg?tr=w-700',
   
  // }, {
  //   image: 'https://ik.imagekit.io/dailyobjects/assets/images/homepage/desktop/banner/homepage-mid/tote-bags-01.jpg?tr=w-700',
    
  // }];

  // Blog
  public blog = [{
    image: 'https://ik.imagekit.io/dailyobjects/assets/images/homepage/desktop/banner/laptop-bags-sleeves/macbook-sleeves-carousel-01.png?tr=h-250',
    date: '25 January 2018',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    by: 'John Dio'
  }, {
    image: 'https://ik.imagekit.io/dailyobjects/assets/images/homepage/desktop/banner/laptop-bags-sleeves/macbook-sleeves-carousel-01.png?tr=h-250',
    date: '26 January 2018',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    by: 'John Dio'
  }, {
    image: 'https://ik.imagekit.io/dailyobjects/assets/images/homepage/desktop/banner/laptop-bags-sleeves/macbook-sleeves-carousel-01.png?tr=h-250',
    date: '27 January 2018',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    by: 'John Dio'
  }, {
    image: 'https://ik.imagekit.io/dailyobjects/assets/images/homepage/desktop/banner/laptop-bags-sleeves/macbook-sleeves-carousel-01.png?tr=h-250',
    date: '28 January 2018',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    by: 'John Dio'
  }];

  // Logo
  public logo = [{
    image: 'assets/images/logos/1.png',
  }, {
    image: 'assets/images/logos/2.png',
  }, {
    image: 'assets/images/logos/3.png',
  }, {
    image: 'assets/images/logos/4.png',
  }, {
    image: 'assets/images/logos/5.png',
  }, {
    image: 'assets/images/logos/6.png',
  }, {
    image: 'assets/images/logos/7.png',
  }, {
    image: 'assets/images/logos/8.png',
  }];

  ngOnInit(): void {
  }

  // Product Tab collection
  getCollectionProducts(collection) {
    return this.products.filter((item) => {
      if (item.collection.find(i => i === collection)) {
        return item
      }
    })
  }
  
}



