// import { Button, Input } from "./Subparts";
// import { useLocation, useNavigate } from "react-router-dom";
// import UserContext from "./UserContext";
// import {patchModfi} from "./mywallet";
// import { useContext, useState} from "react";
// import vetor from '../imags/Vector.png';
// import styled from "styled-components";
// import dayjs from 'dayjs';


// export default function NewValur({optional}){
//     const {user, setUser} = useContext(UserContext)
//     const [valur , setValur] = useState({boolean:false})
//     const navigate = useNavigate();
//     const {state} = useLocation()

//     function newValur(event){
//         event.preventDefault();
//         const obj= {
//             id : state,
//             price: valur.price,
//             description: valur.description,
//             date: dayjs().format('DD/MM'),
//         } 

    
//         if(optional){
//             patchModfi({...obj, extract:true}, { headers: { Authorization: `Bearer ${user.token}` } }).catch(err).then(sucess);
//             return
//         }

//         patchModfi({...obj, extract:false}, { headers: { Authorization: `Bearer ${user.token}` } }).catch(err).then(sucess);
//             return
//         }
//     function sucess(){
//         return navigate('/Extrato')
//     }
//     function err(erro){
//         return alert(erro) && setValur({...valur, boolean: !valur.boolean});
//     }
//     return(
//         <AllContainer>
//             <p> {optional? "Editar entrada": "Editar saida"} <img src={vetor} onClick={sucess}/></p>
//             <form onSubmit={newValur}>
//             <Input  type={'number'} step={"0.01"} min={"0.01"} background={valur.boolean} placeholder={"Valor"} onChange={e => setValur({...valur, price: e.target.value })} required readOnly={valur.boolean}/> 
//             <Input type={'texte'} background={valur.boolean} placeholder={"Descrição"} onChange={e => setValur({...valur, description: e.target.value })} required readOnly={valur.boolean}/>
//             <Button type={"submit"} width={"100%"} bolean={valur.boolean} heigt={"58px"} >{ optional ? 'Editar entrada' : 'Editar saida'}</Button>
//             </form>

//         </AllContainer>
//     )
// }

// const AllContainer = styled.div`
    
//     width: 100%;
//     height: 99%;

//     form{
//         width: 90% ;
//         margin: 0px 5% ;
//     }
    
    
//     p{

//         height: 30px;
//         font-family: 'Raleway';
//         font-style: normal;
//         font-weight: 700;
//         font-size: 26px;
//         line-height: 31px;
//         margin:25px ;
//         padding: 20px;
//         width: 94%;
//         color: #FFFFFF;
//         display: flex;
//         align-items: center;
//         justify-content: space-between;
//     }
    
    
//     `;