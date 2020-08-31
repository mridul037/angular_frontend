import { Injectable, HostListener, OnInit } from "@angular/core";
import { BehaviorSubject, pipe } from "rxjs";
import { SearchService } from "./search.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
export interface Menu {
  path?: string;
  title?: string;
  type?: string;
  megaMenu?: boolean;
  image?: string;
  active?: boolean;
  badge?: boolean;
  badgeText?: string;
  children?: Menu[];
}

@Injectable({
  providedIn: "root",
})
export class NavService implements OnInit{
  public categoryChildren: Array<any> = [];
  

  constructor( private http: HttpClient) {
	
  }
	ngOnInit(): void {
		// this.http.get('http://localhost:3000/navbar').subscribe(val=>{
		// 	this.categoryChildren=val.data.list
		// })
		// console.log(this.categoryChildren);
	}
	

  public screenWidth: any;
  public leftMenuToggle: boolean = false;
  public mainMenuToggle: boolean = false;

  // Windows width
  @HostListener("window:resize", ["$event"])
  onResize(event?) {
    this.screenWidth = window.innerWidth;
  }

  MENUITEMS: Menu[] = [
    {
      title: "home",
      type: "sub",
      active: false,
    },
    {
      title: "Category",
      type: "sub",
      active: false,
      children: this.categoryChildren,
    },
    {
      title: "About Us",
      type: "sub",
      active: false,
      children: [
        {
          title: "sidebar",
          type: "sub",
          active: false,
          children: [
            {
              path: "/shop/product/left/sidebar/trim-dress",
              title: "left-sidebar",
              type: "link",
            },
            {
              path: "/shop/product/right/sidebar/trim-dress",
              title: "right-sidebar",
              type: "link",
            },
            {
              path: "/shop/product/no/sidebar/trim-dress",
              title: "no-sidebar",
              type: "link",
            },
          ],
        },
        {
          path: "/shop/product/three/column/trim-dress",
          title: "three-column",
          type: "link",
        },
        {
          path: "/shop/product/four/image/belted-dress",
          title: "four-image",
          type: "link",
        },
        {
          path: "/shop/product/bundle/trim-dress",
          title: "bundle-product",
          type: "link",
        },
        {
          path: "/shop/product/image/outside/trim-dress",
          title: "image-outside",
          type: "link",
        },
      ],
    },
    {
      title: "Contact Us",
      type: "sub",
      megaMenu: true,
      badge: true,
      badgeText: "new",
      active: false,
      children: [
        {
          title: "portfolio",
          type: "sub",
          active: false,
          children: [
            {
              path: "/pages/portfolio/grid/two",
              title: "portfolio-grid-2",
              type: "link",
            },
            {
              path: "/pages/portfolio/grid/three",
              title: "portfolio-grid-3",
              type: "link",
            },
            {
              path: "/pages/portfolio/grid/four",
              title: "portfolio-grid-4",
              type: "link",
            },
            {
              path: "/pages/portfolio/masonry/grid/two",
              title: "mesonary-grid-2",
              type: "link",
            },
            {
              path: "/pages/portfolio/masonry/grid/three",
              title: "mesonary-grid-3",
              type: "link",
            },
            {
              path: "/pages/portfolio/masonry/grid/four",
              title: "mesonary-grid-4",
              type: "link",
            },
            {
              path: "/pages/portfolio/masonry/full-width",
              title: "mesonary-Full-Width",
              type: "link",
            },
          ],
        },
        {
          title: "add-to-cart",
          type: "sub",
          active: false,
          children: [
            { path: "/home/vegetable", title: "cart-right", type: "link" },
            { path: "/home/watch", title: "cart-left", type: "link" },
            { path: "/home/furniture", title: "cart-top", type: "link" },
            { path: "/home/flower", title: "cart-bottom", type: "link" },
            { path: "/home/fashion", title: "cart-model-popup", type: "link" },
          ],
        },
        {
          title: "theme-elements",
          type: "sub",
          active: false,
          children: [
            { path: "/elements/theme/title", title: "title", type: "link" },
            {
              path: "/elements/theme/collection-banner",
              title: "collection-banner",
              type: "link",
            },
            {
              path: "/elements/theme/home-slider",
              title: "home-slider",
              type: "link",
            },
            {
              path: "/elements/theme/category",
              title: "category",
              type: "link",
            },
            {
              path: "/elements/theme/services",
              title: "services",
              type: "link",
            },
          ],
        },
        {
          title: "product-elements",
          type: "sub",
          active: false,
          children: [
            {
              path: "/elements/product/slider",
              title: "product-slider",
              type: "link",
            },
            {
              path: "/elements/product/banners",
              title: "banners",
              type: "link",
            },
            {
              path: "/elements/product/tabs",
              title: "product-tabs",
              type: "link",
            },
            {
              path: "/elements/product/multi-slider",
              title: "multi-slider",
              type: "link",
            },
          ],
        },
        {
          title: "email-template",
          type: "sub",
          active: false,
          children: [
            {
              path:
                "http://themes.pixelstrap.com/multikart/front-end/email-order-success.html",
              title: "order-success",
              type: "extTabLink",
            },
            {
              path:
                "http://themes.pixelstrap.com/multikart/front-end/email-order-success-two.html",
              title: "order-success-2",
              type: "extTabLink",
            },
            {
              path:
                "http://themes.pixelstrap.com/multikart/front-end/email-template.html",
              title: "email-template",
              type: "extTabLink",
            },
            {
              path:
                "http://themes.pixelstrap.com/multikart/front-end/email-template-two.html",
              title: "email-template-2",
              type: "extTabLink",
            },
          ],
        },
      ],
    },
    {
      title: "Feature Product",
      type: "sub",
      active: false,
      children: [
        {
          title: "account",
          type: "sub",
          active: false,
          children: [
            { path: "/pages/wishlist", title: "wishlist", type: "link" },
            { path: "/pages/cart", title: "cart", type: "link" },
            { path: "/pages/dashboard", title: "dashboard", type: "link" },
            { path: "/pages/login", title: "login", type: "link" },
            { path: "/pages/register", title: "register", type: "link" },
            { path: "/pages/contact", title: "contact", type: "link" },
            {
              path: "/pages/forget/password",
              title: "forget-password",
              type: "link",
            },
            { path: "/pages/profile", title: "profile", type: "link" },
            { path: "/pages/checkout", title: "checkout", type: "link" },
          ],
        },
      ],
    },
  ];

  LEFTMENUITEMS: Menu[] = [
    {
      title: "clothing",
      type: "sub",
      megaMenu: true,
      active: false,
      children: [
        {
          title: "mens fashion",
          type: "link",
          active: false,
          children: [
            { path: "/home/fashion", title: "sports wear", type: "link" },
            { path: "/home/fashion", title: "top", type: "link" },
            { path: "/home/fashion", title: "bottom", type: "link" },
            { path: "/home/fashion", title: "ethic wear", type: "link" },
            { path: "/home/fashion", title: "sports wear", type: "link" },
            { path: "/home/fashion", title: "shirts", type: "link" },
            { path: "/home/fashion", title: "bottom", type: "link" },
            { path: "/home/fashion", title: "ethic wear", type: "link" },
            { path: "/home/fashion", title: "sports wear", type: "link" },
          ],
        },
        {
          title: "women fashion",
          type: "link",
          active: false,
          children: [
            { path: "/home/fashion", title: "dresses", type: "link" },
            { path: "/home/fashion", title: "skirts", type: "link" },
            { path: "/home/fashion", title: "westarn wear", type: "link" },
            { path: "/home/fashion", title: "ethic wear", type: "link" },
            { path: "/home/fashion", title: "bottom", type: "link" },
            { path: "/home/fashion", title: "ethic wear", type: "link" },
            { path: "/home/fashion", title: "sports wear", type: "link" },
            { path: "/home/fashion", title: "sports wear", type: "link" },
            { path: "/home/fashion", title: "bottom wear", type: "link" },
          ],
        },
      ],
    },
    {
      title: "bags",
      type: "sub",
      active: false,
      children: [
        { path: "/home/fashion", title: "shopper bags", type: "link" },
        { path: "/home/fashion", title: "laptop bags", type: "link" },
        { path: "/home/fashion", title: "clutches", type: "link" },
        {
          path: "/home/fashion",
          title: "purses",
          type: "link",
          active: false,
          children: [
            { path: "/home/fashion", title: "purses", type: "link" },
            { path: "/home/fashion", title: "wallets", type: "link" },
            { path: "/home/fashion", title: "leathers", type: "link" },
            { path: "/home/fashion", title: "satchels", type: "link" },
          ],
        },
      ],
    },
    {
      title: "footwear",
      type: "sub",
      active: false,
      children: [
        { path: "/home/fashion", title: "sport shoes", type: "link" },
        { path: "/home/fashion", title: "formal shoes", type: "link" },
        { path: "/home/fashion", title: "casual shoes", type: "link" },
      ],
    },
    {
      path: "/home/fashion",
      title: "watches",
      type: "link",
    },
    {
      title: "Accessories",
      type: "sub",
      active: false,
      children: [
        { path: "/home/fashion", title: "fashion jewellery", type: "link" },
        { path: "/home/fashion", title: "caps and hats", type: "link" },
        { path: "/home/fashion", title: "precious jewellery", type: "link" },
        {
          path: "/home/fashion",
          title: "more..",
          type: "link",
          active: false,
          children: [
            { path: "/home/fashion", title: "necklaces", type: "link" },
            { path: "/home/fashion", title: "earrings", type: "link" },
            {
              path: "/home/fashion",
              title: "rings & wrist wear",
              type: "link",
            },
            {
              path: "/home/fashion",
              title: "more...",
              type: "link",
              active: false,
              children: [
                { path: "/home/fashion", title: "ties", type: "link" },
                { path: "/home/fashion", title: "cufflinks", type: "link" },
                {
                  path: "/home/fashion",
                  title: "pockets squares",
                  type: "link",
                },
                { path: "/home/fashion", title: "helmets", type: "link" },
                { path: "/home/fashion", title: "scarves", type: "link" },
                {
                  path: "/home/fashion",
                  title: "more...",
                  type: "link",
                  active: false,
                  children: [
                    {
                      path: "/home/fashion",
                      title: "accessory gift sets",
                      type: "link",
                    },
                    {
                      path: "/home/fashion",
                      title: "travel accessories",
                      type: "link",
                    },
                    {
                      path: "/home/fashion",
                      title: "phone cases",
                      type: "link",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      path: "/home/fashion",
      title: "house of design",
      type: "link",
    },
    {
      title: "beauty & personal care",
      type: "sub",
      active: false,
      children: [
        { path: "/home/fashion", title: "makeup", type: "link" },
        { path: "/home/fashion", title: "skincare", type: "link" },
        { path: "/home/fashion", title: "premium beaty", type: "link" },
        {
          path: "/home/fashion",
          title: "more..",
          type: "link",
          active: false,
          children: [
            { path: "/home/fashion", title: "fragrances", type: "link" },
            { path: "/home/fashion", title: "luxury beauty", type: "link" },
            { path: "/home/fashion", title: "hair care", type: "link" },
            { path: "/home/fashion", title: "tools & brushes", type: "link" },
          ],
        },
      ],
    },
    {
      path: "/home/fashion",
      title: "home & decor",
      type: "link",
    },
    {
      path: "/home/fashion",
      title: "kitchen",
      type: "link",
    },
  ];

  // Array
  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
  leftMenuItems = new BehaviorSubject<Menu[]>(this.LEFTMENUITEMS);
}
