import {useNavigate} from 'react-router-dom';

import {
  Body,
  DirectoryItemContainer,
} from "./directory.styles";

const DirectoryItem = ({ category }) => {
  const { price, name,} = category;

  const navigate = useNavigate();

  const onNavigateHandler = () => navigate();

  return (
    <DirectoryItemContainer onClick ={onNavigateHandler}>
      
      <Body>
        <h2> {name} </h2>
        <p> {price} </p>
        <p> Shop now </p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;