"use client"

import { Button, Row } from 'antd'
import UserList from './List/List'
import { useDispatch, useSelector } from 'react-redux'
import { globalStateAction } from '@/store/global'
import { useEffect } from 'react'
import { stat } from 'fs'
import PopupModal from '@/modal/PopupModal'

const Users = () => {
    const dispatch = useDispatch()
    // const {activePopup} = useSelector((state:any) => state.popupModal)
    
    const showModal = () =>{
        dispatch(globalStateAction.changeActivePopup(true))
    }

    return (
        <Row>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <UserList />
            <PopupModal title={'იუზერის დამატება'}>
                <p>hi</p>
            </PopupModal>
        </Row>
    )
}

export default Users