import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], term): any {
   // console.log("term", term);
    if (term === "") return [];

    return items.filter((item) => item.indexOf(term) !== -1);
  }
}
