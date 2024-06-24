import { Card, Col } from 'antd'

const Item = ({item}:any) => {
    return (
        <Col>
            <Card title={`${item.firstname} ${item.lastname}`}>
                <p>{item.birthday}</p>
                <p>{item.gender}</p>
            </Card>
        </Col>
    )
}

export default Item