"use client"

import { deleteData, editData, postData } from '@/http/api'
import { globalStateAction } from '@/store/global'
import { CloseOutlined, EditOutlined } from '@ant-design/icons'
import { Button, Card, Col, Modal } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import AddUser from '../Form/Form'
import EditPopup from '../modal/EditPopup'

const Item = ({item, success, setSuccess}:any) => {
    const [editPopup, setEditPopup] = useState(false)
    const dispatch = useDispatch()
    const deleteItem = () =>{
        deleteData(`/members/${item.id}`).finally(()=>{
            setSuccess(!success)
        })
    }

    const showModal = () =>{
        setEditPopup(true)
    }

    return (
        <>
        <Col>
            <Card 
                title={`${item.firstname} ${item.lastname}`}
                extra={
                    <>
                        <Button onClick={showModal}>
                            <EditOutlined />
                        </Button>
                        <Button onClick={deleteItem}>
                        <CloseOutlined />
                        </Button>
                    </>
                }
                >
                <p>{item.birthday}</p>
                <p>{item.gender}</p>
                <p>{item.salary}</p>
            </Card>
        </Col>
        <EditPopup item={item} editPopup={editPopup} setEditPopup={setEditPopup} success={success} setSuccess={setSuccess}/>
        </>
    )
}

export default Item