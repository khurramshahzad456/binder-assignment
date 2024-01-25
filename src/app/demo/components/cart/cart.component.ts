import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { Courses } from '../../model/course';
import { CartService } from '../../service/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  standalone: false,
})
export class CartComponent {
  showModal$: Observable<boolean>;
  cartList$: Observable<any>;
  constructor(
      private _cartListService: CartService,
      private _messageService: MessageService
  ) {
      this.showModal$ = this._cartListService.showCartModal$;
      this.cartList$ = this._cartListService.getCartList();
  }

  closeModal() {
      this._cartListService.setShowCartModal(false);
  }

  deleteWishList(course: Courses) {
      this._cartListService.deleteCart(course);
      this._messageService.add({
          severity: 'success',
          summary: 'Cart',
          detail: `${course.title} removed from your cart`,
      });
  }

}
