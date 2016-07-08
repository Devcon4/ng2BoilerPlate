import {AppComponent} from "./app.component";
import { MainStates } from './component/main/main.states';
import { AssetsStates } from './component/assets/assets.states';
import { InfoStates } from './component/info/info.states';
import { GamesStates } from './component/games/games.states';
import {Ng2StateDeclaration} from "ui-router-ng2/ng2/interface";

/**
 * This file exports all the application states as an array.
 *
 * - It first imports foo, bar, and baz nested states from foo/foo.states.ts, bar/bar.states.ts, and baz/baz.states.ts.
 * - It defines the top-level states (MAIN_STATES).
 * - Then, it builds and exports an array with all the states.
 * - This array is imported by router.config.ts and the states are registered with the `StateProvider`
 */

// The top level states
let MAIN_STATES: Ng2StateDeclaration[] = [
    // The top-level app state. This state fills the root
    // <ui-view></ui-view> (defined in index.html) with the AppComponent
    { name: 'app', url: '\#', component: AppComponent }
];

// This array is imported in bootstrap/router.config.ts, then each state is registered
export let INITIAL_STATES: Ng2StateDeclaration[] =[...MAIN_STATES, 
                                                   ...MainStates, 
                                                   ...AssetsStates, 
                                                   ...InfoStates,
                                                   ...GamesStates];