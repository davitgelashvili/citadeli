import { globalStateAction } from "@/store/global"
import { Modal } from "antd"
import { useDispatch, useSelector } from "react-redux"

const PopupModal = ({children, title}:any) => {
    const dispatch = useDispatch()
    const {activePopup} = useSelector((state:any) => state.popupModal)

    const handleOk = () =>{
        dispatch(globalStateAction.changeActivePopup(false))
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
            {children}
        </Modal>
    )
}

export default PopupModal