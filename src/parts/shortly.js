import axios from "axios";

//const URL = "https://shortly007.herokuapp.com/";
const URL = "http://localhost:4000/";
function postCreat(obj){
    const promise = axios.post(`${URL}signup`,obj);
    return promise;
}

function postLogin(obj){
    const promise = axios.post(`${URL}signin`,obj);
    return promise;
}

function postUrl(obj, header){
    const promis = axios.post(`${URL}urls/shorten`, obj, header);
    return promis;
}

function getRanking(){
    const promise = axios.get(`${URL}ranking`);
    return promise;    
}


function getUser(header){
    const promise = axios.get(`${URL}users/me`,header);
    return promise;    

}

function deletCont(header){
    const promise = axios.delete(`${URL}MyExtract`, header);
    return promise;    
}

function patchModfi(obj , header){
    const promise = axios.patch(`${URL}MyExtract`,obj, header);
    return promise;    
}

export{ patchModfi, getUser, getRanking, postUrl, postLogin, postCreat, deletCont };