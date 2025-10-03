import { Routes } from '@angular/router';
import { Monster } from './pages/monster/monster';
import { MonsterList } from './pages/monster-list/monster-list';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [{
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
},{
    path : 'home',
    component : MonsterList
},
{
    path : 'monster',
    children : [{
        path: '',
        component: Monster,
    },{
        path :':id',
        component: Monster
    },]
    },
    {
        path: '**',
        component: NotFound
    }
];
