import { Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { EmpComponent } from './emp/emp/emp.component';

export const routes: Routes = [
    {path:"testpath",component:TestComponent},
    {path:"emppath",component:EmpComponent}

];
