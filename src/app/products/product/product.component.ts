import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDataService } from 'src/app/product-data.service';
import { Iuser } from 'src/app/common/user'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 private productData: Iuser[] = [];
 public first: any = [];
  orderhandler: string = '';
  disorder: boolean = true;


  constructor(private router: Router, private productDataService: ProductDataService, private http: HttpClient) {

  }

  ngOnInit(): void {
    this.productDataService.getproduct()
      .subscribe((items) => {
        const forst = items.slice(0, 12)
        this.first = forst
        this.productData = items
        // console.log(items);
      })
      
  }

  @HostListener('scroll', ['$event'])
  public onScroll(event: any) {
    console.log(event);
    console.log('event scrolling');
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      this.addMoreItems(12);
    }
  }

  private addMoreItems(addNewItemCount: number) {
    const currentItemCount = this.first.length;
    if (currentItemCount === this.productData.length) { return; }
    alert('Adding new items to the list');
    const temp = this.productData.slice(currentItemCount, currentItemCount + addNewItemCount);
    this.first = [...this.first, ...temp];
  }
  
  logout() {
    this.router.navigate(['/login'])
  }
  feedback() {
    this.router.navigate(['/Feedback'])
  }



  hightolow(headername: string) {
    this.disorder = true
    this.orderhandler = headername
  }
  lowtohigh() {
    this.disorder = false

  }

}
