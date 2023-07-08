import { useState } from 'react';
import { Button, Upload, message } from 'antd';
import { LoadingOutlined, UploadOutlined } from '@ant-design/icons';
import { RcFile, UploadChangeParam, UploadFile, UploadProps } from 'antd/es/upload';
import variables from '../../styles/variables.module.scss';
import { getAntDesignColor } from '../../../frontend/styles/colors';
import { Colors } from '@prisma/client';

type UploadFileProps = {
    small?: boolean,
    setImageUrl: (url: string) => void,
};

const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};

const UploadFile: React.FC<UploadFileProps> = ({
    small, setImageUrl
}) => {
    const [loading, setLoading] = useState(false);
    const [iconUploadDisplay, setIconUploadDisplay] = useState(false);

    const handleChange: UploadProps['onChange'] = async (info: UploadChangeParam<UploadFile>) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        const file = info.file.originFileObj as Blob;
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'proWorkforce');

        const data = await fetch(
            `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
            {
                method: 'POST',
                body: formData,
            }
        ).then(res => res.json());
        
        const newImageUrl: string = data.secure_url;
        setImageUrl(newImageUrl);
        setLoading(false);
    };

    return (
        <Upload
            name="banner"
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleChange}
            style={{
                width: variables.projectIconDiameter,
                height: variables.projectIconDiameter,
            }}
        >
            {small ? (
                <div
                    style={{
                        width: variables.projectIconDiameter,
                        height: variables.projectIconDiameter,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                    }}
                    onMouseEnter={() => setIconUploadDisplay(true)}
                    onMouseLeave={() => setIconUploadDisplay(false)}
                >
                    <div style={{ height: 'fit-content' }}>
                        {loading ?
                            <LoadingOutlined style={{ color: getAntDesignColor(Colors.NEUTRAL)[0], fontSize: 30 }} /> :
                            <UploadOutlined style={{ color: getAntDesignColor(Colors.NEUTRAL)[0], fontSize: 30, display: iconUploadDisplay ? 'block' : 'none' }} />
                        }
                    </div>
                </div>
            ) : (
                <Button
                    icon={<UploadOutlined />}
                >
                    Click to Upload
                </Button>
            )}
        </Upload>
    );
};

export default UploadFile;
