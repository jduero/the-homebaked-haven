import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BusinessComponent } from './components/business/business.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PaymentComponent } from './components/payment/payment.component';
import { StrategyComponent } from './components/strategy/strategy.component';
import { OrderComponent } from './components/order/order.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'navigation', component: NavigationComponent },
    {
        path: 'business',
        component: BusinessComponent,
        children: [
            { path: 'order', component: OrderComponent },
            { path: 'payment', component: PaymentComponent },
            { path: 'strategy', component: StrategyComponent },
        ],
    },    
];
