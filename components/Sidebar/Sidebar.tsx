import { Menu } from 'antd'
import styles from './Sidebar.module.scss'
import SidebarMenu from './Menu/Menu'

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <SidebarMenu />
        </div>
    )
}

export default Sidebar