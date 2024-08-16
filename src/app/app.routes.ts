import { Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { EmpComponent } from './emp/emp/emp.component';
import { StudComponent } from './stud/stud.component';

export const routes: Routes = [
    {path:"testpath",component:TestComponent},
    {path:"emppath",component:EmpComponent},
    {path:"studpath",component:StudComponent}
];
