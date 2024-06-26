import { deleteData } from '@/http/api'
import { Card, Col } from 'antd'

const Item = ({item, success, setSuccess}:any) => {
    const deleteItem = () =>{
        deleteData(`/members/${item.id}`).finally(()=>{
            setSuccess(!success)
        })
    }

    return (
        <Col>
            <Card 
                title={`${item.firstname} ${item.lastname}`}
                extra={
                    <button onClick={deleteItem}>X</button>
                }
                >
                <p>{item.birthday}</p>
                <p>{item.gender}</p>
                <p>{item.salary}</p>
            </Card>
        </Col>
    )
}

export default Item