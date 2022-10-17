import { getUser , postUrl} from "./parts/shortly";
import { useState, useEffect, useContext } from "react";
import { Button, Container, Input} from "./parts/Subparts";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import short from './imags/twemoji_shorts.png';
import UserContext from "./parts/UserContext";
import trash from './imags/Vector.png'


export default function Extract() {
    const { user, setUser } = useContext(UserContext);
    const [boolean , setBoolean] = useState(false);
    const [add, setAdd] = useState([]);
    const navigat = useNavigate()
    
    useEffect( () => {
       getUser({ headers: { Authorization: `Bearer ${user.token}` } }).catch((value)=> console.log(value)).then((value)=> setAdd(value.data))
    }, []);

    function rank(value){
        if(value) setUser([]);   
        navigat('/')
    }

    function submitObj(event){
        setBoolean(!boolean)
        event.preventDefault();
        postUrl({url: add.url}, { headers: { Authorization: `Bearer ${user.token}` } }).catch((value)=> console.log(value)).then(value => {
            alert(`Nova shortly criada :) ${value.data.shortUrl}`)
            getUser({ headers: { Authorization: `Bearer ${user.token}` } }).catch((value)=> console.log(value)).then((value)=> setAdd(value.data))
            
        })
    }

    console.log(add , user)
    return (

            <AllContainer>
                <Container width={'100%'} ><span> Seja bem-vindo(a), {add.name ? add.name : "loading..." } <h1> <h2> Home </h2>&nbsp;&nbsp;&nbsp;<h2 onClick={rank}> Ranking </h2> &nbsp;&nbsp;&nbsp; <h2 onClick={()=>rank(true)}> Sair </h2></h1> </span></Container>
                <p> Shortly <img src={short} /> </p>
                <Allextracts>
                <form onSubmit={submitObj} >      
                <Input type={"url"} background={boolean} placeholder={"Links que cabem no bolso"} onChange={e => setAdd({...add, url: e.target.value })} readOnly={boolean} required="required" />
                <Button type={"submit"} width={"50%"} heigt={"60px"} >Encurtar link</Button>
                </form>
                {add.length!==0? add.shortenedUrls.map((value, index)=> <Container background={"#80cc74"} key={index} width={"95%"} height={"65px"} ><span><h1> {value.url} </h1><h2> {value.shortUrl} </h2> <h1>Quantidade de visitas: {value.visitCount} </h1> <p><img src={trash}/></p></span></Container>) : <Container> Ainda não tem nem um shortly :/ manda um ai ;) </Container> }
                </Allextracts>
            </AllContainer>
    )
}


const Allextracts = styled.div`
    form{
        display:flex ;

    }
    h1{
        align-items: center ;
        justify-content: center ;
        padding: 10px ;
        overflow: auto;
        height: 65px ;
        width: 35% ;
        color: #FFFFFF ;
    }
    h2{
        display: flex ;
        align-items: center ;
        justify-content: center ;
        height: 65px ;
        width: 10% ;
        color: #FFFFFF ;

    }
    p{
        border: 1px solid  grey;
        border-radius: 0px 10px 10px 0px ;
        height: 65px ;
        width: 20% ;
        background: #FFFFFF ;
        justify-content: center ;

    }
   
    margin-top: 20px ;
    height: 90% ;
    width: 100% ;
    overflow: scroll ;
    ::-webkit-scrollbar { display: none; }
    


`;


const AllContainer = styled.div`
    width: 100% ;
    padding: 50px ;
    display: flex ;
    flex-wrap: wrap ;
    justify-content: center ;    
   
    span{
        width: 100% ;
        display:flex ;
        justify-content: space-between ;
    }
    h1{
        display: flex ;
    }
    p{
        font-size: 64px ;
        color: #000000;
        display: flex;
        align-items: center;
}



`;
