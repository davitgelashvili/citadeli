"use client"

import { Button, Row } from 'antd'
import UserList from './List/List'
import { useDispatch } from 'react-redux'
import { globalStateAction } from '@/store/global'
import PopupModal from '@/components/Users/modal/PopupModal'

const Users = () => {
    const dispatch = useDispatch()
    
    const showModal = () =>{
        dispatch(globalStateAction.changeActivePopup(true))
    }

    return (
        <Row>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <UserList />
            <PopupModal title={'იუზერის დამატება'} />
        </Row>
    )
}

export default Users