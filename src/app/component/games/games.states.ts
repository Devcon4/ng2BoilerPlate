import {Http} from "@angular/http";
import {GamesComponent} from "./games.component";
import {Ng2StateDeclaration, Transition} from "ui-router-ng2";

export let GamesStates: Ng2StateDeclaration[] = [
    {
        name: 'app.games',
        url: '/games',
        component: GamesComponent
    },
];