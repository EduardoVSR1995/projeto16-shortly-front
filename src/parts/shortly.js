import axios from "axios";

const URL = "https://shortly007.herokuapp.com/";

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

function deletShortly(id,header){
    const promise = axios.delete(`${URL}urls/${id}`, header);
    return promise;    
}

function getOpen(short){
    const promise = axios.get(`${URL}urls/open/${short}`);
    return promise;
}

export{ getOpen, getUser, getRanking, postUrl, postLogin, postCreat, deletShortly };