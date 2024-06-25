import axios from "axios";

const getData = async(param:any) => {
    try {
        const respons = await axios.get(`https://x8ki-letl-twmt.n7.xano.io/api:tSDGfQun${param}`)
        return respons?.data
    } catch (error) {
        console.log(error);
    }
}

const postData = async(param:any, data:any) => {
    try {
        const respons = await axios.post(`https://x8ki-letl-twmt.n7.xano.io/api:tSDGfQun${param}`, {
            ...data
        })
        return respons?.data
    } catch (error) {
        console.log(error);
    }
}

const deleteData = async(param:any) => {
    try {
        const respons = await axios.delete(`https://x8ki-letl-twmt.n7.xano.io/api:tSDGfQun${param}`)
        return respons?.data
    } catch (error) {
        console.log(error);
    }
}

export {getData, postData, deleteData}