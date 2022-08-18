import React from 'react';

import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParmetro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Contador from './components/treino/Contador'

import './index.css';

function App(props) {
    return (
        <div className='app'>
            <Card titulo='#01 - Primeiro Componente' color='#FA6900'>
                <Primeiro />
            </Card>

            <Card titulo='#02 - Componente com parâmetro' color='#542733'>
                <ComParmetro
                    titulo='Esse é o título'
                    subtitulo='Prazer, subtítulo' />
            </Card>

            <Card titulo='#03 - Componente com Filhos' color='#1FDA9A'>
                <ComFilhos>
                    <ul>
                        <li>Pedro</li>
                        <li>Luiz</li>
                        <li>Marcela</li>
                    </ul>
                </ComFilhos>
            </Card>

            <Card titulo='#04 - Pegando itens da lista de produtos' color=' #85C4B9 '>
                <Repeticao></Repeticao>
            </Card>

            <Card titulo='#05 - Condicional' color='#DE593A'>
                <Condicional numero={10} />
            </Card>

            <Card titulo='#06 - Comunicação Direta' color='#BA5F32'>
                <Pai sobrenome="Pereira" />
            </Card>

            <Card titulo='#06 - Comunicação Indireta' color='#20457C   '>
                <Super />
            </Card>

            <Card titulo='#07 - Treino' color='#20457C   '>
                <Contador />
            </Card>

        </div>
    );
}
 
export default App;