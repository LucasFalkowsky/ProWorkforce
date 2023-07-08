import { EditOutlined, SaveOutlined } from "@ant-design/icons";
import { Button } from "antd";
import variables from "../../styles/variables.module.scss";
import { useTranslation } from 'react-i18next';
import '../../../src/i18n'

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
            <Button type={'text'} onClick={() => setEditDescription(false)}>
                <SaveOutlined /> {t('a-project-description-button-finish-editing')}
            </Button>
        );
    }
    return (
        <Button type={'text'} onClick={() => setEditDescription(true)}>
            <EditOutlined /> {t('a-project-description-button-start-editing')}
        </Button>
    );
};

export { ProjectDescriptionButton };
