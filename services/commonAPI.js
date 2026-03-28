import axios from 'axios';

export const commonAPI = async(httpMethod, url, reqBody) => {

    const requestConfig = {
        method: httpMethod,
        url,
        data: reqBody,
        headers: {'Content-Type':'application/json'}
    };

    return await axios(requestConfig).then((result)=>{
        return result;
    }).catch((err)=>{
        return err;
    })
}