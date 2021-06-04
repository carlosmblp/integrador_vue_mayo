import http from './api/apiClient';

const getCoaster = async() =>{
    return await http.get().then((response) =>{
        return response.data;
    }).catch((err)=>{
        return err;
    })
}
const exported = {
    getCoaster,
}

export default exported;

  