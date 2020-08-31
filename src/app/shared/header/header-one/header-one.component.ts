import {
  Component,
  OnInit,
  Input,
  HostListener,
  OnChanges,
} from "@angular/core";
import { SearchService } from "../../services/search.service";
import { FilterPipe } from "../../pipes/filter.pipe";
@Component({
  selector: "app-header-one",
  templateUrl: "./header-one.component.html",
  styleUrls: ["./header-one.component.scss"],
})
export class HeaderOneComponent implements OnInit, OnChanges {
  @Input() class: string;
  @Input() themeLogo: string = "assets/images/icon/logo.png"; // Default Logo
  @Input() topbar: boolean = true; // Default True
  @Input() sticky: boolean = false; // Default false

  public stick: boolean = false;
  public val: boolean = false;
  public categoryItem = [];
  public data: object = {
    ID: 10,
  };
  public subcat = [];
  public searchText = "";
  public searchItem="Search";
  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService.GetCategory().subscribe((val) => {
      this.categoryItem.push("select category");
      this.categoryItem = val.data.list;
    });
  }
  ngOnChanges() {
    this.searchService.GetSubCategory(this.data).subscribe((val) => {
      this.subcat = val.data.list;
    });
  }
  func() {
    this.val = !this.val;
  }
  // @HostListener Decorator
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number >= 300 && window.innerWidth > 400) {
      this.stick = true;
    } else {
      this.stick = false;
    }
  }
  sorting(event) {
 //   console.log(event.target.value);
    this.data = {
      ID: event.target.value,
    };
    this.searchService.GetSubCategory(this.data).subscribe((val) => {
      this.subcat = val.data.list;
    });
    
  }
  place(e){
    console.log(e.target.innerText);
    this.searchText=e.target.innerText;

  }
  search(event){
    console.log(event);
  }
}
