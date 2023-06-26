import { State } from "@prisma/client";
import { red, yellow, orange, cyan, green, blue, purple, geekblue, magenta, volcano, gold, lime, gray, grey } from '@ant-design/colors';
const primary = ['#e6f7ff', '#bae7ff', '#91d5ff', '#69c0ff', '#40a9ff', '#1890ff', '#096dd9', '#0050b3', '#003a8c', '#002766'];
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

const getAntDesignColor = (color: colors) => {
    return (
        color === 'primary' ? primary :
        color === 'neutral' ? neutral :
        color === 'red' ? red :
        color === 'yellow' ? yellow :
        color === 'orange' ? orange :
        color === 'cyan' ? cyan :
        color === 'green' ? green :
        color === 'blue' ? blue :
        color === 'purple' ? purple :
        color === 'geekblue' ? geekblue :
        color === 'magenta' ? magenta :
        color === 'volcano' ? volcano :
        color === 'gold' ? gold :
        color === 'lime' ? lime :
        color === 'gray' ? gray :
        grey
    )
}

export {
    getTagColor,
    getAntDesignColor,
}