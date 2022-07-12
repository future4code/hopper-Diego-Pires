import React from "react";
import { Container } from "./Styled";

const CharacterListPage = () =>{
    return(
        
        <div>
            <div>
                <h1>Lista de personagens:</h1>
            </div>
            
            <Container>
            <div> 
                <p>Luke Skywalker</p>
                <p>Darth Vader</p>
                <p>Leia Organa</p>
                <p>Chewbacca</p>
                <p>Obi-Wan</p>
                <p>Han Solo</p> 
            </div>
            </Container>
           
        </div>
        
    )
}

export default CharacterListPage