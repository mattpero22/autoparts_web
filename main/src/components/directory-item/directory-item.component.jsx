import {useNavigate} from 'react-router-dom';

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ part }) => {
  const { imageUrl, title, route } = part;

  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick ={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2> {title} </h2>
        <p> Shop now </p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
