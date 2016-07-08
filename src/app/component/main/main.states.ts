import {Http} from "@angular/http";
import {MainComponent} from "./main.component";
import {Ng2StateDeclaration, Transition} from "ui-router-ng2";

export let MainStates: Ng2StateDeclaration[] = [
    {
        name: 'app.main',
        url: '/main',
        component: MainComponent
    },
];