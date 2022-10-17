import { getRanking } from "./parts/shortly";
import { useState, useEffect } from "react";
import { Container} from "./parts/Subparts";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import short from './imags/twemoji_shorts.png';
import trof from './imags/trof.png';



export default function Extract() {
    const [add, setAdd] = useState([]);
    const navigat = useNavigate()
    
    useEffect( () => {
       getRanking().catch((value)=> console.log(value)).then((value)=> setAdd(value.data))
    }, []);
    
    return (

            <AllContainer>
                <Container width={'100%'} ><span><h2 onClick={()=> navigat('/signin')} >Entrar </h2>&nbsp;&nbsp;&nbsp;<h2 onClick={()=> navigat('/signup')}> Cadastrar-se</h2> </span></Container>
                <p> Shortly <img src={short} /> </p>
                <Container width={'100%'} >  <img src={trof} /> <h1>Ranking</h1> </Container>
                <Container width={'80%'} height={'50%'}>
                  <Allextracts>{add.length>0 ? add.map((value,index)=> <h3 key={index}> {index+1}. {value.name} - {value.linksCount} links - {value.visitCount} visualizações </h3>  ): ""} </Allextracts>
                </Container>
            
                <Container onClick={()=> navigat('/signup')}><h1>Crie sua conta para usar nosso serviço!</h1></Container>

            </AllContainer>
    )
}


const Allextracts = styled.div`
    h3{
        font-weight: 700 ;
        margin: 10px ;
    }
    padding: 20px ;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 24px 24px 0px 0px;
    height: 90% ;
    width: 100% ;
    overflow: scroll ;
    ::-webkit-scrollbar { display: none; }
    


`;


const AllContainer = styled.div`
    padding: 50px ;
    display: flex ;
    flex-wrap: wrap ;
    justify-content: center ;    
    h1{
        font-weight: 700;
        font-size: 36px;
        line-height: 45px;
    }
    span{

        width: 100% ;
        display:flex ;
        justify-content: flex-end ;
    }
    p{
        font-size: 64px ;
        color: #000000;
        display: flex;
        align-items: center;
}



`;
