import { Component } from '@angular/core';
import { SellerService } from 'src/app/MyServices/seller.service';
import { Router } from '@angular/router'
import { SignUp } from 'src/app/data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  constructor(private seller:SellerService, private router:Router){

  }
  
  ngOnInit():void{
    this.seller.reloadSeller()
  }
  signUp(data:SignUp):void{
    
    this.seller.userSignUp(data)

  }
}
