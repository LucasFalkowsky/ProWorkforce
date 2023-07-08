import { ArrowLeftOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import Link from 'next/link';
import variables from '../../styles/variables.module.scss';

const { Title, Text } = Typography;

interface PageHeaderProps {
  title: string;
  subtitle: string;
  slug: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, slug }) => {
  return (
    <div>

      <Link href={slug} style={{ display: 'inline-flex', gap: variables.gapStandard, alignItems: 'center' }}>
        <ArrowLeftOutlined style={{ color: 'black' }} />
        <Title level={4} style={{ margin: 0 }}>{title}</Title>
        <Text type='secondary'>{subtitle}</Text>
      </Link>
    </div>
  );
};

export default PageHeader;
