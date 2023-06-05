import { CalendarOutlined, CrownOutlined, ShareAltOutlined } from "@ant-design/icons"
import { Progress } from "antd"
import { colors, getAntDesignColor } from "../../styles/colors"

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
    return <Progress percent={50} steps={5} size={'small'} strokeColor={getAntDesignColor(colors.GOLD)[5]} />
}

export {
    getShareIcon, getCalendarIcon, getCrownIcon, getProgressElement
}