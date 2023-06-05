import { ExperimentOutlined, InboxOutlined, RocketOutlined, TrophyOutlined } from "@ant-design/icons";
import { State } from "@prisma/client";
import { Button, Space } from "antd";

type ProjectStateButtonProps = {
    status: State,
    setProjectStatus: (state: State) => void,
}

const ProjectStateButton: React.FC<ProjectStateButtonProps> = ({
    status, setProjectStatus
}) => {
    switch (status) {
        case 'DRAFT':
            return (
                <Button type="primary" icon={<RocketOutlined />} onClick={() => setProjectStatus(State.ONGOING)}>
                    publish project
                </Button>
            );
        case 'ONGOING':
            return (
                <Button type="primary" icon={<TrophyOutlined />} onClick={() => setProjectStatus(State.COMPLETED)}>
                    complete project
                </Button>
            );
        case 'COMPLETED':
            return (
                <Button type="primary" icon={<InboxOutlined />} onClick={() => setProjectStatus(State.ARCHIVED)}>
                    archive project
                </Button>
            );
        case 'ARCHIVED':
            return (
                <Space size={'small'} style={{ display: 'inline-flex' }}>
                    <Button icon={<RocketOutlined />} onClick={() => setProjectStatus(State.ONGOING)}>
                        republish project
                    </Button>
                    <Button type="primary" icon={<ExperimentOutlined />} onClick={() => setProjectStatus(State.DRAFT)}>
                        redraft project
                    </Button>
                </Space>
            );
        default:
            return (
                <Button type="primary" icon={<RocketOutlined />}>
                    publish project
                </Button>
            );
    }
};

export { ProjectStateButton };
