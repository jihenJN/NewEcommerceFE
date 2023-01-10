import { Component, OnInit } from '@angular/core';
import { Categorie } from '../../models/categorie';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})





export class HeaderComponent implements OnInit{

  allcategories ! : Categorie[];
  categories  : Categorie[] = [];
  constructor( private categoriesService:CategoriesService) { }
  ngOnInit() {
   this.get();
  }
 get() {
    this.categoriesService.getAll().subscribe((data) => {
      this. allcategories = data;

      for (let i=0;i<this.allcategories.length;i++)
        if(this.allcategories[i].parent==null)
          this.categories.push(this.allcategories[i]);

      console.log(data);
    });
  }


}



