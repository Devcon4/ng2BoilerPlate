import {Http} from "@angular/http";
import {AssetsComponent} from "./assets.component";
import {Ng2StateDeclaration, Transition} from "ui-router-ng2";

export let AssetsStates: Ng2StateDeclaration[] = [
    {
        name: 'app.assets',
        url: '/assets',
        component: AssetsComponent
    },
];