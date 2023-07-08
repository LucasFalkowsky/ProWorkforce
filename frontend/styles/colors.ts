import { Colors, State } from "@prisma/client";
import { red, yellow, orange, cyan, green, blue, purple, geekblue, magenta, volcano, gold, lime, gray, grey } from '@ant-design/colors';
const primary = ['#e6f7ff', '#bae7ff', '#91d5ff', '#69c0ff', '#40a9ff', '#1890ff', '#096dd9', '#0050b3', '#003a8c', '#002766'];
const primaryGreen = ['#e6f7e6', '#bae7ba', '#91d591', '#69c069', '#40a940','#189018', '#096d09', '#005000', '#003a00', '#002700'];
const neutral = ['#ffffff', '#fafafa', '#f5f5f5', '#f0f0f0', '#d9d9d9', '#bfbfbf', '#8c8c8c', '#595959', '#434343', '#262626', '#1f1f1f', '#141414', '#000000']

export enum colors {
    PRIMARY = 'primary',
    NEUTRAL = 'neutral',
    RED = 'red',
    YELLOW = 'yellow',
    ORANGE = 'orange',
    CYAN = 'cyan',
    GREEN = 'green',
    BLUE = 'blue',
    PURPLE = 'purple',
    GEEKBLUE = 'geekblue',
    MAGENTA = 'magenta',
    VOLCANO = 'volcano',
    GOLD = 'gold',
    LIME = 'lime',
    GRAY = 'gray',
    GREY = 'grey',
}

const getTagColor = (status: State) => {
    return status === State.ARCHIVED ? 'purple' : status === State.COMPLETED ? 'green' : status === State.DRAFT ? 'orange' : 'geekblue'
}

const getAntDesignColor = (color: Colors) => {
    return (
        color === 'PRIMARY' ? primary :
        color === 'NEUTRAL' ? neutral :
        color === 'RED' ? red :
        color === 'YELLOW' ? yellow :
        color === 'ORANGE' ? orange :
        color === 'CYAN' ? cyan :
        color === 'GREEN' ? green :
        color === 'BLUE' ? blue :
        color === 'PURPLE' ? purple :
        color === 'GEEKBLUE' ? geekblue :
        color === 'MAGENTA' ? magenta :
        color === 'VOLCANO' ? volcano :
        color === 'GOLD' ? gold :
        color === 'LIME' ? lime :
        color === 'GRAY' ? gray :
        grey
    )
}

export {
    getTagColor,
    getAntDesignColor,
}