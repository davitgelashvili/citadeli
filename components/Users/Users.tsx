"use client"

import { Button, Row } from 'antd'
import UserList from './List/List'
import { useDispatch } from 'react-redux'
import { globalStateAction } from '@/store/global'
import AddPopup from '@/components/Users/modal/AddPopup'
import { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'

const Users = () => {
    const dispatch = useDispatch()
    const [success, setSuccess] = useState(false)
    
    const showModal = () =>{
        dispatch(globalStateAction.changeActivePopup(true))
    }

    return (
        <Row>
            <Button type="primary" onClick={showModal}>
                <PlusOutlined />
                იუზერის დამატება
            </Button>
            <UserList success={success} setSuccess={setSuccess}/>
            <AddPopup title={'იუზერის დამატება'} success={success} setSuccess={setSuccess} />
        </Row>
    )
}

export default Users