import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RotaComponent } from './components/rota/rota.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { TarefasComponent } from './components/tarefas/tarefas.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { IbgeComponent } from './components/ibge/ibge.component';
import { FornecedoresComponent } from './components/fornecedores/fornecedores.component';
import { FornecedoresEditComponent } from './components/fornecedores-edit/fornecedores-edit.component';

export const routes: Routes = [

    {path: '', component: HomeComponent},
    {path: 'nova-rota', component: RotaComponent},
    {path: 'cliente/:id', component: ClientDetailComponent},
    {path: 'cliente', component: ClienteComponent},
    {path: 'fornecedores', component: FornecedoresComponent},
    {path: 'fornecedores/:id', component: FornecedoresEditComponent},
    {path: 'tarefa', component: TarefasComponent},
    {path: 'pokemon', component: PokemonComponent},
    {path: 'ibge', component: IbgeComponent},
    {path: '**', component: HomeComponent}

];
