import { EditOutlined, SaveOutlined } from "@ant-design/icons";
import { Button } from "antd";

type ProjectDescriptionButtonProps = {
    edit: boolean,
    setEditDescription: (state: boolean) => void,
}

const ProjectDescriptionButton: React.FC<ProjectDescriptionButtonProps> = ({
    edit, setEditDescription
}) => {
    if (edit) {
        return (
            <Button type={'text'} style={{ marginTop: '10px' }} onClick={() => setEditDescription(false)}>
                <SaveOutlined /> finish editing
            </Button>
        );
    }
    return (
        <Button type={'text'} style={{ marginTop: '10px' }} onClick={() => setEditDescription(true)}>
            <EditOutlined /> edit description
        </Button>
    );
};

export { ProjectDescriptionButton };
