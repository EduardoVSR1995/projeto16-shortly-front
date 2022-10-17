import styled from "styled-components";
import { Link } from "react-router-dom";
import "@fontsource/lexend-deca";

function Container({...props}){
    return(
        <Contai {...props}> {props.children}</Contai>
    )   
}
const Contai = styled.div`
    border: ${props => props.border };
    margin: 20px ;
    display:flex ;
    justify-content: center ;
    align-items: center ;
    background: ${props => props.background };
    border-radius: 10px;
    width:${props => props.width } ;
    height:${props => props.height } ;

`;
function Heade({...props}){
    return(
        <Headers>{props.children} </Headers>
    )

}
const Headers = styled.span`
    margin: 50px;
    width: 147px;
    height: 50px;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
`;
 

function Button({...props}){
    return(
        <Butto {...props}></Butto>
    )

}
const Butto = styled.button`
        color: #FFFFFF ;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer; 
        border-style: none;
        width: ${props=> props.width};
        height: ${props=> props.heigt};
        background: #5d9040;
        border-radius: 10px;
        font-weight: 700;
        font-size: 15px;
        line-height: 26px;
        opacity: ${(props) => !props.bolean ? 1 : 0.5 };
        transition: background 50ms linear ;
        margin: 20px;
        :active{
            background-color: ${props => '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0')} ;
            transform: translatey(4px);
        }
  
`;

function Linkers({...props}){
    return(
      <Linke> <Link {...props}>{props.children} </Link> </Linke>
    )    
}

const Linke = styled.div`

    width: 100Vw ;
    text-align: center ;
    a{
    
    text-decoration: none ;
    font-weight: 700;
    font-size: 15px;
    line-height: 17px;
    color: #000000 ;
    }
`;

function Text({...props}){
    return(
        <Tex {...props} >{props.children}</Tex>
    )
}
const Tex = styled.div`
    font-family: 'Raleway' ;
    display: flex;
    height: 15px;
    font-style: normal;
    font-weight:${props=> props.weight ? props.weight: 400 };
    font-size: ${props=> props.font };
    line-height: 25px;
    color: ${props=> props.color };
`;


function Input({...others}){
    return(
        <Inp {...others}/> 
    )
}
const Inp = styled.input`
        cursor: pointer;
        -webkit-box-shadow: ${(props) => !props.background ? "0 0 0 50px white inset" : "0 0 0 50px #749164 inset" }  ;
        padding: 10px;
        width: 100%;
        border: 1px solid #D5D5D5;
        border-radius: 10px;
        height: 58px;
        color:${(props) => !props.background ? "#000000" : "#D4D4D4" };
        font-weight: 400;
        line-height: 25px;
        margin: 20px ;
        ::placeholder{
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 25px;
        color: #000000 ;
        opacity: 1;
        }
        :focus, select:focus {
        
        border: 1 none;
        outline: 0;
        }    

`;

export { Container, Button ,Text , Input, Linkers, Heade }
