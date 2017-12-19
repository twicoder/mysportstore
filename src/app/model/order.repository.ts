import {Injectable} from '@angular/core';
import {Order} from './order.model';
import {StaticDatasource} from './static.datasource';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class OrderRepository {
  private orders: Order[] = [];

  constructor(private dataSource: StaticDatasource) {}

  getOrders(): Order[] {
    return this.orders;
  }

  saveOrder(order: Order): Observable<Order> {
    return this.dataSource.saveOrder(order);
  }
}
