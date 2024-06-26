"use lient"

import { globalStateAction } from "@/store/global"
import { Modal } from "antd"
import { useDispatch, useSelector } from "react-redux"
import AddUser from "../Form/Form"
import { useState } from "react"
import { postData } from "@/http/api"

const AddPopup = ({title, success, setSuccess}:any) => {
    const dispatch = useDispatch()
    const {activePopup} = useSelector((state:any) => state.popupModal)
    const [inputValue, setInputValue] = useState({
        firstname: '',
        lastname: '',
        gender: '',
        birthday: '',
        salary: 0,
    })

    const inputList = [
        {
            id: 124311,
            title: 'სახელი',
            name: 'firstname',
            placeholder: '',
            type: 'text',
            value: inputValue.firstname
        },
        {
            id: 21314,
            title: 'გვარი',
            name: 'lastname',
            placeholder: '',
            type: 'text',
            value: inputValue.lastname
        },
        {
            id: 35467,
            title: 'სქესი',
            name: 'gender',
            placeholder: '',
            type: 'radio',
            options: ['male', 'female'],
            value: inputValue.gender
        },
        {
            id: 3575345,
            title: 'დაბადების თარიღი',
            name: 'birthday',
            placeholder: '',
            type: 'date',
            value: inputValue.birthday
        },
        {
            id: 267864,
            title: 'ხელფასი',
            name: 'salary',
            placeholder: '',
            type: 'text',
            value: Number(inputValue.salary)
        },
    ]

    const handleOk = () =>{
        postData('/members', inputValue).finally(()=>{
            setSuccess(!success)
            dispatch(globalStateAction.changeActivePopup(false))
        })
    }

    const handleCancel = () =>{
        dispatch(globalStateAction.changeActivePopup(false))
    }

    return (
        <Modal 
            title={title} 
            open={activePopup} 
            onOk={handleOk} 
            onCancel={handleCancel}
            >
            <AddUser 
                inputList={inputList}
                inputValue={inputValue}
                setInputValue={setInputValue}
                />
        </Modal>
    )
}

export default AddPopup