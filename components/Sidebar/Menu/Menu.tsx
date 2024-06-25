import { Menu } from "antd"
import MenuItem from "antd/es/menu/MenuItem"
import Link from "next/link"

const SidebarMenu = () => {
    const data = [
        {
            key: '23483',
            label: (
                <Link href={'/'}>
                    MAIN
                </Link>
            )
        },
        {
            key: '342923',
            label: (
                <Link href={'/users'}>
                    USERS
                </Link>
            )
        },
        {
            key: '423u8',
            label: (
                <Link href={'/tasks'}>
                    TASKS
                </Link>
            )
        },
    ]
    return (
        <Menu items={data}/>
    )
}

export default SidebarMenu