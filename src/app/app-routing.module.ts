import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/components/product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './guards/admin/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        //component: HomeComponent,
        loadChildren: () =>
          import('./home/home.module').then((module) => module.HomeModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./products/products.module').then(
            (module) => module.ProductsModule
          ),
      },
      {
        path: 'products/:id',
        loadChildren: () =>
          import('./product-detail/product-detail.module').then(
            (module) => module.ProductDetailModule
          ),
      },
      {
        path: 'contact',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./contact/contact.module').then(
            (module) => module.ContactModule
          ),
      },
    ],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((module) => module.AdminModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (module) => module.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
