import React from "react";
import axios from "axios";

class CadastroUsuarios extends React.Component{

    state = {
        arrayUsers:[],
        inputNome:[],
        inputEmail:[]
    }

    onChangeInputNome = (event) => {
        this.setState({inputNome: event.target.value})
    }

    onChangeInputEmail = (event) => {
        this.setState({inputEmail: event.target.value})
    }

    cadastrarUser = () => {

        const body = {
            name: this.state.inputNome
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body,{
            headers: {
                Authorization: "diego-pires-hopper"
            }
        })
        .then(()=>{
            console.log(this.pegarLista())
        })
        .catch((err)=>{
            console.log(err.response.data)
        })
    }

    pegarLista = () =>{

        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
            headers:{
                Authorization: "diego-pires-hopper"
            }
        })
        .then((response)=>{
            console.log('Sucesso', response.data)
        })
        .catch((err)=>{
            console.log('Erro', err.response.data)
        })
    }

    render(){

    const list = this.state.arrayUsers.map((cadaUsuario)=>{
        return <h3>{cadaUsuario.name}</h3>
    })

        return(
            <div>
                <input
                    value={this.state.inputNome}
                    onChange={this.onChangeInputNome}
                />
                <input
                    value={this.state.inputEmail}
                    onChange={this.onChangeInputEmail}
                />
                <button onClick={this.cadastrarUser}>Cadastrar</button>
            </div>
        )
    }
}

export default CadastroUsuarios