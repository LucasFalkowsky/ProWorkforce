import { EditOutlined, SaveOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useTranslation } from 'react-i18next';
import '../../../i18n/i18n.js/index.js'

type ProjectDescriptionButtonProps = {
    edit: boolean,
    setEditDescription: (state: boolean) => void,
}

const ProjectDescriptionButton: React.FC<ProjectDescriptionButtonProps> = ({
    edit, setEditDescription
}) => {
    const { t } = useTranslation();
    if (edit) {
        return (
            <Button type={'text'} style={{ marginTop: '10px' }} onClick={() => setEditDescription(false)}>
                <SaveOutlined /> {t('a-project-description-button-finish-editing')}
            </Button>
        );
    }
    return (
        <Button type={'text'} style={{ marginTop: '10px' }} onClick={() => setEditDescription(true)}>
            <EditOutlined /> {t('a-project-description-button-start-editing')}
        </Button>
    );
};

export { ProjectDescriptionButton };
