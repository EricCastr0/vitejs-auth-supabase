import React, {useState} from 'react'
import { supabase } from '../conexao/conexao'

export default function Auth() {
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  return (
    <div>
      <input value={usuario} onChange={(e) => setUsuario(e.target.value)} />
      <input value={senha} onChange={(e) => setSenha(e.target.value)} />
      <button>Login</button>
      <button>signUp</button>

    </div>
  )
}

function Login(usuario, senha){

}

function signUp(usuario, senha){

}