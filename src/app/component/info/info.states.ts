import {Http} from "@angular/http";
import {InfoComponent} from "./info.component";
import {Ng2StateDeclaration, Transition} from "ui-router-ng2";

export let InfoStates: Ng2StateDeclaration[] = [
    {
        name: 'app.info',
        url: '/info',
        component: InfoComponent
    },
];