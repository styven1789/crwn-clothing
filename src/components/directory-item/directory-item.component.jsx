import { useNavigate } from 'react-router-dom';

import { BackgroungImage, Body, DirectoryItemContainer } from './directory-item.styles';

const DirectoryItem = ({ category }) => {

    const { imageUrl, title, linkUrl } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(linkUrl);

    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroungImage imageUrl={imageUrl} />
            <Body>
                <h2 className='title'>{title.toUpperCase()}</h2>
                <p className='subtitle'>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;