import { Button, Input, Linkers, Container } from './parts/Subparts';
import { useNavigate } from 'react-router-dom';
import { postCreat } from './parts/shortly';
import styled from 'styled-components';
import { useState } from 'react';
import short from './imags/twemoji_shorts.png'

export default function CreatCont() {
    const [personalDate, setPersonalDate] = useState({});
    const [boolean, setBoolean] = useState(false);
    const navigat = useNavigate()
    function submitobj(event) {
        event.preventDefault();
        const { name, email, password, confirmPassword } = personalDate;
        if (password !== confirmPassword) return alert("As senhas são diferentes");
        setBoolean(!boolean);
        const i = postCreat({ name: name, email: email, password: password, confirmPassword: confirmPassword });
        i.then(sucess);
        i.catch(err);
    }


    function err(value) {
        setBoolean(boolean)
        return alert(value);
    }
    function sucess() {
        alert("Parabéns, cadastro concluído");
        navigat("/")
        return;
    }

    return (
        <AllContainer>
            <Container width={'100%'} ><span><h2 onClick={()=> navigat('/signin')} >Entrar </h2>&nbsp;&nbsp;&nbsp;<h2> Cadastrar-se</h2> </span></Container>
            <p> Shortly <img src={short} /> </p>
            <form onSubmit={submitobj}>
                <Input type={"text"} background={boolean} placeholder={"Nome"} onChange={e => setPersonalDate({ ...personalDate, name: e.target.value })} readOnly={boolean} required="required" />
                <Input type={"email"} background={boolean} placeholder={"E-mail"} onChange={e => setPersonalDate({ ...personalDate, email: e.target.value })} readOnly={boolean} required="required" />
                <Input type={"password"} background={boolean} placeholder={"Senha"} onChange={e => setPersonalDate({ ...personalDate, password: e.target.value })} readOnly={boolean} required="required" />
                <Input type={"password"} background={boolean} placeholder={"Confirme a senha"} onChange={e => setPersonalDate({ ...personalDate, confirmPassword: e.target.value })} readOnly={boolean} />
                <Button type={"submit"} width={"200px"} bolean={boolean} heigt={"50px"} > Criar conta  </Button> 
                <Linkers to={"/signin"}> Já tem uma conta? Entre agora!</Linkers> 
            </form>
             
        </AllContainer>
    )
}
const AllContainer = styled.div`
    padding: 50px ;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    form{
        margin: 30px ;
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    
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