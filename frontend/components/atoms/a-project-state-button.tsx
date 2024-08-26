import { ExperimentOutlined, InboxOutlined, RocketOutlined, TrophyOutlined } from "@ant-design/icons";
import { State } from ".prisma/client";
import { Button, Space } from "antd";
import { useTranslation } from 'react-i18next';
import '../../../i18n/i18n.js/index.js'

type ProjectStateButtonProps = {
    status: State,
    setProjectStatus: (state: State) => void,
}

const ProjectStateButton: React.FC<ProjectStateButtonProps> = ({
    status, setProjectStatus
}) => {
    const { t } = useTranslation();
    switch (status) {
        case 'DRAFT':
            return (
                <Button type="primary" icon={<RocketOutlined />} onClick={() => setProjectStatus(State.ONGOING)}>
                    {t('a-project-statebutton-publish')}
                </Button>
            );
        case 'ONGOING':
            return (
                <Button type="primary" icon={<TrophyOutlined />} onClick={() => setProjectStatus(State.COMPLETED)}>
                    {t('a-project-statebutton-complete')}
                </Button>
            );
        case 'COMPLETED':
            return (
                <Button type="primary" icon={<InboxOutlined />} onClick={() => setProjectStatus(State.ARCHIVED)}>
                    {t('a-project-statebutton-archive')}
                </Button>
            );
        case 'ARCHIVED':
            return (
                <Space size={'small'} style={{ display: 'inline-flex' }}>
                    <Button icon={<RocketOutlined />} onClick={() => setProjectStatus(State.ONGOING)}>
                    {t('a-project-statebutton-republish')}
                    </Button>
                    <Button type="primary" icon={<ExperimentOutlined />} onClick={() => setProjectStatus(State.DRAFT)}>
                    {t('a-project-statebutton-redraft')}
                    </Button>
                </Space>
            );
        default:
            return (
                <Button type="primary" icon={<RocketOutlined />}>
                    {t('a-project-statebutton-publish')}
                </Button>
            );
    }
};

export { ProjectStateButton };
