import React, {useState} from 'react'
import { supabase } from '../conexao/conexao'

export default function Auth() {
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  return (
    <div>
      <input value={usuario} onChange={(e) => setUsuario(e.target.value)} />
      <input value={senha} onChange={(e) => setSenha(e.target.value)} />
      <button onClick={() => login(usuario, senha)}>Login</button>
      <button onClick={() => signUp(usuario, senha)}>signUp</button>

    </div>
  )
}

async function login(usuario, senha){
  try{
    const {error} = await supabase.auth.signIn(usuario, senha)
    if(error) throw error
    alert('Logado')
    history.push('/')
  }
  catch(error){
    alert(error.message)
  }

}

const signUp = async (usuario, senha, history) => {
  try{
    const {error} = await supabase.auth.signUp(usuario, senha)
    if(error) throw error
    alert('Logado')
    history.push('/')
  }
  catch(error){
    alert(error.message)
  }


}