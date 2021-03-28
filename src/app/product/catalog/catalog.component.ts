import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddReference } from 'src/app/shared/actions/panier.action';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  title = 'TP03-ERNY-Joe';
  tabData : Array<String> = [];
  subscribe : any;

  constructor(private productService : ProductService, private store : Store)  { }
  observableProductsFromMock$ : Observable<any> = null;
  observableProductsNotFromMock$:Observable<any> = null;

  tabCheapProducts : Array<any> = [];
  limitPrice : any = 0;


  ngOnInit(): void {
    this.observableProductsFromMock$ = this.productService.getProduits();
  }


  onClickGetMock() 
  {
    this.observableProductsFromMock$ = this.productService.getProduits();
  }

  addPanier (ref : string) {
    console.log (ref);
    
    this.store.dispatch (new AddReference ({"reference":ref}));
  }

}


