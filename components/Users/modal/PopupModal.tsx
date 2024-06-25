"use lient"

import { globalStateAction } from "@/store/global"
import { Modal } from "antd"
import { useDispatch, useSelector } from "react-redux"
import AddUser from "../AddUser/AddUser"
import { useState } from "react"
import { postData } from "@/http/api"

const PopupModal = ({title}:any) => {
    const dispatch = useDispatch()
    const {activePopup} = useSelector((state:any) => state.popupModal)
    const [inputValue, setInputValue] = useState({
        firstname: '',
        lastname: '',
        gender: '',
        birthday: '',
        salary: '',
    })

    const inputList = [
        {
            id: 124311,
            title: 'სახელი',
            name: 'firstname',
            placeholder: '',
            value: inputValue.firstname
        },
        {
            id: 21314,
            title: 'გვარი',
            name: 'lastname',
            placeholder: '',
            value: inputValue.lastname
        },
        {
            id: 35467,
            title: 'სქესი',
            name: 'gender',
            placeholder: '',
            value: inputValue.gender
        },
        {
            id: 3575345,
            title: 'დაბადების თარიღი',
            name: 'birthday',
            placeholder: '',
            value: inputValue.birthday
        },
        {
            id: 267864,
            title: 'ხელფასი',
            name: 'salary',
            placeholder: '',
            value: inputValue.salary
        },
    ]

    const handleOk = () =>{
        dispatch(globalStateAction.changeActivePopup(false))
        postData('/members', inputValue).finally(()=>{
            console.log('დაემატა')
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

export default PopupModal