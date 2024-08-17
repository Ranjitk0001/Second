import { Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { EmpComponent } from './emp/emp/emp.component';
import { StudComponent } from './stud/stud.component';
import { TryComponent } from './try/try.component';

export const routes: Routes = [
    {path:"testpath",component:TestComponent},
    {path:"emppath",component:EmpComponent},
    {path:"studpath",component:StudComponent},
    {path:"trypath",component:TryComponent}
];
