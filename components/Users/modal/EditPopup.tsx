"use lient"

import { Modal } from "antd"
import AddUser from "../Form/Form"
import { useState } from "react"
import { editData } from "@/http/api"

const EditPopup = ({title, item, editPopup, setEditPopup, success, setSuccess}:any) => {
    const [inputValue, setInputValue] = useState({
        firstname: item.firstname,
        lastname: item.lastname,
        gender: item.gender,
        birthday: item.birthday,
        salary: item.salary,
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
        editData(`/members/${item.id}`, inputValue).finally(()=>{
            setSuccess(!success)
            setEditPopup(false)
        })
    }

    const handleCancel = () =>{
        setEditPopup(false)
    }

    return (
        <Modal 
            title={title} 
            open={editPopup} 
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

export default EditPopup