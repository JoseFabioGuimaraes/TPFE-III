import React, { useState } from 'react'

const url = 'http://localhost:3000/Alunos'

const CadastraAluno = () => {
    const [alunos, setAlunos] = useState([])
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [curso, setCurso] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const alunoToAdd = {
            nome: nome,
            email: email,
            curso: curso
        }

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(alunoToAdd)
        })

        const data = await response.json()
        setAlunos((prevAlunos) => [...prevAlunos, data])

        
        setNome('')
        setEmail('') 
        setCurso('')
    }

    return (
        <div>
            <h1>Cadastrar Aluno</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Curso:</label>
                    <input
                        type="text"
                        value={curso}
                        onChange={(e) => setCurso(e.target.value)}
                    />
                </div>
                <button type="submit">Adicionar Aluno</button>
            </form>
        </div>
    )
}

export default CadastraAluno
