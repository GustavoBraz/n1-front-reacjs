/*
* useState retorna um array com duas posições
* 
* 1. Variável com o seu valor inicial
* 2. Função para atualizarmos esse valor
*/
import React,{ useState, useEffect } from 'react';
import api from './services/api';
import './App.css';
import Header from './components/Header';

function App() {
    const [projects, setProjects] = useState([]);

    useState(() => {
        api.get('projects').then( response => {
            setProjects(response.data);
        });
    },[]);

    async function handleAddProject(){
        // setProjects([...projects, `Novo projeto ${Date.now()}`]);
        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: 'Gustavo Braz'
        });
        const newProject = response.data;
        setProjects([...projects, newProject]);
    };

    return (
        <>
        <Header title="Projects" />
        <ul>
            {projects.map(project => <li key={project.id}>{project.title}</li>)}
        </ul>

        <button type="button" onClick={handleAddProject} >Adicionar projeto</button>
        </>
    );
}

export default App;
