"use client"

import { Button, Row } from 'antd'
import UserList from './List/List'
import { useDispatch } from 'react-redux'
import { globalStateAction } from '@/store/global'
import PopupModal from '@/components/Users/modal/PopupModal'
import { useState } from 'react'

const Users = () => {
    const dispatch = useDispatch()
    const [success, setSuccess] = useState(false)
    
    const showModal = () =>{
        dispatch(globalStateAction.changeActivePopup(true))
    }

    return (
        <Row>
            <Button type="primary" onClick={showModal}>
                იუზერის დამატება
            </Button>
            <UserList success={success} setSuccess={setSuccess}/>
            <PopupModal title={'იუზერის დამატება'} success={success} setSuccess={setSuccess} />
        </Row>
    )
}

export default Users