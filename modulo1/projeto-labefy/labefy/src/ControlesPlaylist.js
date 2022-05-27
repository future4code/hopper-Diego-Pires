import React from "react";
import axios from "axios";

class ControlesPlaylist extends React.Component{

    state = {
        playlist: [],
        inputPlaylist: '',
        track: ''
    }

    onChangeInput = (event) =>{
        this.setState({inputPlaylist: event.target.value})
    }

    criarPlaylist = () => {

        const body = {
            name: this.state.inputPlaylist
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
            headers:{
                Authorization: "diego-pires-hopper"
            }
        })
        .then(()=>{
            this.setState({inputPlaylist: ''})
            console.log("Playlist criada!")
        })
        .catch((err)=>{
            console.log(err.response.data)
        })
    }

    encontrarPlaylists = () => {
        axios.get(baseUrl, axiosConfig).then(response => {
            this.setState({playlists: response.data.result.list})
        }).catch(err => {
            console.log(err)
        })
    };

    deletarPlaylist = (playlistId) => {
        axios.delete(`${baseUrl}/${playlistId}`, axiosConfig).then(response => {
            this.encntrarPlaylists()
        }).catch(err => {
            console.log(err)
        });
    };

    render(){

        const list = this.state.playlist.map((cadaPlaylist)=>{
            return cadaPlaylist
        })

         return(
              <div>
                 <input
                    value={this.state.inputPlaylist}
                    onChange={this.onChangeInput}
                 />
                 <button onClick={this.criarPlaylist}>Adicionar Playlist!</button>
              </div>
        )
    }

}

export default ControlesPlaylist