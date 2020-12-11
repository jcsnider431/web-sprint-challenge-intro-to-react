// Write your Character component here
import React from 'react'
import styled from 'styled-components';

export default function Character(props) {
   
    const {characters} = props;

    return (
        <div>
           {characters.map(character => {
                return (
                    <CardStyle>
                    <div>
                        <img src={character.image} alt={character.name}/>
                        <h2>{character.name}</h2>
                        <div className= 'info'>
                            <p>Origin: {character.origin.name}</p>
                            <p>Gender: {character.gender}</p>
                            <p>Species: {character.species}</p>
                            <p>Status: {character.status}</p>    
                        </div>  
                    </div>
                    </CardStyle>
                )
            })}
        </div>
    )
}


const CardStyle = styled.div`
     margin: 30px auto;
     border: 1px solid mediumpurple;
     box-shadow: 0px 1px 40px -2px mediumpurple;
     border-radius: 20px;
     width: 35%;
     background-color: mediumspringgreen;
     font-weight: bold;
     opacity: 0.5;
     transition: .1s;
     &:hover{
        opacity: 1;
        transform: scale(1.2);
     img {
         margin: 20px auto;
         height: 20vh;
         border: 2px solid mediumpurple;
         box-shadow: 0px 1px 10px -2px mediumpurple;
         border-radius: 20px;
         

     }

     h2 {
         color:purple;
        font-family:fantasy;
        font-weight: bold;
        text-shadow: 2px 2px orange;
     }
     .info {
        border: 1px solid mediumpurple;
        background-color: magenta;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
     }
     .info p{
        font-size: 1.25rem;
        font-family:monospace;
        text-shadow: 1px 1px mediumspringgreen;
        
        }
     }

`
