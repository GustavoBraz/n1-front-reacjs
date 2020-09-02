/*
* useState retorna um array com duas posições
* 
* 1. Variável com o seu valor inicial
* 2. Função para atualizarmos esse valor
*/
import React,{ useState } from 'react';
import './App.css';
import backgroundImage from './assets/background.jpg';
import Header from './components/Header';

function App() {
    const [projects, setProjects] = useState(['Desenvolvimento de App', 'Front-end web']);

    function handleAddProject(){
        setProjects([...projects, `Novo projeto ${Date.now()}`]);
    };

    return (
        <>
        <Header title="Projects" />
        <img width={300} src={backgroundImage} />
        <ul>
            {projects.map(project => <li key={project}>{project}</li>)}
        </ul>

        <button type="button" onClick={handleAddProject} >Adicionar projeto</button>
        </>
    );
}

export default App;
