import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"

import { ComprouGanhouComponent } from "./comprou-ganhou/comprou-ganhou.component";
import { ErrorsComponent } from "./errors/errors.component";

const routes: Routes = [
    {
        path: 'comprou-ganhou', 
        component: ComprouGanhouComponent 
    },
    {
        path: '**',
        component: ErrorsComponent
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[ 
        RouterModule 
    ]
})
export class AppRoutingModule {}
