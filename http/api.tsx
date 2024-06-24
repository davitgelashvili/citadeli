import axios from "axios";

const getData = async(param:any) => {
    const respons = await axios.get(`https://x8ki-letl-twmt.n7.xano.io/api:tSDGfQun${param}`)
    return respons?.data
}

const postData = async({param,data}:any) => {
    const respons = await axios.post(`https://x8ki-letl-twmt.n7.xano.io/api:tSDGfQun${param}`, {
        ...data
    })
    return respons?.data
}

export {getData, postData}