import React from 'react';
import { Typography } from 'antd';
import variables from '../../styles/variables.module.scss';
import { useTranslation } from 'react-i18next';
import '../../../src/i18n'
import { CldImage } from 'next-cloudinary';
import UploadFile from './a-upload-file';

type BannerImageProps = {
    imagePath?: string | null,
    setNewImage: (image: string) => void,
};

const BannerImage: React.FC<BannerImageProps> = ({
    imagePath, setNewImage
}) => {
    const { t } = useTranslation();
    const { Text } = Typography;

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: variables.bannerImageWidth,
                height: variables.bannerImageHeight,
                objectFit: 'cover',
                objectPosition: 'center',
                overflow: 'hidden',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    width: '100%',
                    display: 'flex',
                    height: variables.bannerImageHeight,
                    justifyContent: 'flex-end',
                    alignItems: 'end',
                    padding: variables.paddingLarge
                }}
            >
                <UploadFile setImageUrl={setNewImage} />
            </div>
            <div>
                <CldImage width="2000" height="2000" style={{ width: '100%' }} src={imagePath || t('p-project-defautl-banner')} alt={''} />
            </div>
        </div>
    );
};

export { BannerImage };