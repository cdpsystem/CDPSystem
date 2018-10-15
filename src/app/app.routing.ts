//Importar modulos router angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import { HomeComponent } from './home/home.component';
import { OfficeComponent } from './office/office.component';

//Office
import { OffHomeComponent } from './office/home/home.component';
import { OffTasksComponent} from './office/tasks/tasks.component';
import { OffCalendarComponent} from './office/calendar/calendar.component';

//Array configuracion rutas
const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'office', component: OfficeComponent,children:[
		{path: '', redirectTo: 'home', pathMatch: 'full'},
		{path: 'home', component: OffHomeComponent},
		{path: 'tasks', component: OffTasksComponent},
		{path: 'calendar', component: OffCalendarComponent},
	]},
	
	
	//** Es la ruta 404 DEBE ser siempre la última
	{path: '**' , component: HomeComponent}
];



//Necesario para que funcionen las rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,{onSameUrlNavigation: 'reload'});


