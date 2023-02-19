import { 
    AttachFileOutlined,
    BrandingWatermarkOutlined,
    ChatOutlined,
    ContentCopyOutlined,
    DashboardOutlined,
    Inventory2Outlined,
    PeopleOutlineOutlined,
    PersonOutlineOutlined,
    SecurityOutlined,
} from '@mui/icons-material';

export const dataNav = [
    {
        subHeader: 'Personal',
        data: [
            {
                icon: <DashboardOutlined />,
                url: '#',
                title: 'Dashboard',
            },
            {
                icon: <PeopleOutlineOutlined />,
                url: '#',
                title: 'Account',
            },
            {
                icon: <SecurityOutlined />,
                url: '#',
                title: 'Audit Trails',
            },
        ]
    },
    {
        subHeader: 'Document Management',
        data: [
            {
                icon: <AttachFileOutlined />,
                url: '#',
                title: 'Document Store',
            },
            {
                icon: <ContentCopyOutlined />,
                url: '#',
                title: 'Document Types',
            },
        ]
    },
    {
        subHeader: 'Adminstrator',
        data: [
            {
                icon: <PersonOutlineOutlined />,
                url: '/dashboard/user',
                title: 'Users',
            },
            {
                icon: <PersonOutlineOutlined />,
                url: '#',
                title: 'Roles',
            },
        ]
    },
    {
        subHeader: 'Communication',
        data: [
            {
                icon: <ChatOutlined />,
                url: '#',
                title: 'Chat',
            },
        ]
    },
    {
        subHeader: 'Catalog Management',
        data: [
            {
                icon: <Inventory2Outlined />,
                url: '#',
                title: 'Products',
            },
            {
                icon: <BrandingWatermarkOutlined />,
                url: '#',
                title: 'Brands',
            },
        ]
    },
]