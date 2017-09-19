import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SVGMapComponent } from './svg-map/svg-map.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	}, 

	{
		path:'home',
		component: HomeComponent
	},

	{
		path:'about',
		component: AboutComponent
	}
]

@NgModule ({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})

export class AppRouting {}