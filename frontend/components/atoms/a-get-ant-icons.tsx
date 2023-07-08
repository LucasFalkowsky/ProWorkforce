import { CalendarOutlined, CrownOutlined, ShareAltOutlined } from "@ant-design/icons"
import { Progress } from "antd"
import { getAntDesignColor } from "../../styles/colors"
import { Colors } from "@prisma/client"

const getShareIcon = () => {
    return <ShareAltOutlined />
}

const getCalendarIcon = () => {
    return <CalendarOutlined />
}

const getCrownIcon = () => {
    return <CrownOutlined />
}

const getProgressElement = () => {
    return <Progress percent={50} steps={5} size={'small'} strokeColor={getAntDesignColor(Colors.GOLD)[5]} />
}

export {
    getShareIcon, getCalendarIcon, getCrownIcon, getProgressElement
}