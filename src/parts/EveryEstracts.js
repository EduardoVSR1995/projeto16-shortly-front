import { useNavigate } from "react-router-dom";
import { Container , Text} from "./Subparts"
import { deletCont } from "./shortly.js";
import styled from "styled-components"


export default function EveryEstracts({...props}){
    const navigat = useNavigate()
    const {date, description, price, extract, _id} = props.obj;
    let increaseDecrease = `#C70000`;
    if(extract){
        increaseDecrease='#03AC00';
    }
    function del(){
        deletCont({ headers: { authorization: `Bearer ${_id}` } }).then(sucess);
    }
    function sucess(){
        if(window.confirm("Deseja apagar este extrato?"))return props.reload();
    }

    function edit(){
        if(extract) return navigat("/Editar-entrada", {state:_id});
        return navigat("/Editar-saida",{state:_id});

    }

    return(
        <Container >
           <Tex><Text color={'#C6C6C6'}>{date} <Text color={'#000000'} onClick={edit} > &nbsp; {description}</Text> </Text><Text color={increaseDecrease}>$ {Number(price).toFixed(2)}<Text color={'#C6C6C6'} onClick={del} > &nbsp; X </Text></Text></Tex> 
        </Container>
    )
}

const Tex = styled.div`
    width: 100% ;
    display: flex ;
    justify-content:space-between ;
`;