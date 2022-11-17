import DirectoryItem from '../directory-item/directory-item.component';

import './directory.styles.scss';

const autoParts =[
  {
    "id": 1,
    "title": "honda",
    "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
    route:'shop/hats'
  },
  {
    "id": 2,
    "title": "jackets",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
    route:'shop/jackets'
  },
  {
    "id": 3,
    "title": "sneakers",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
    route:'shop/sneakers'
  },{
    "id": 1,
    "title": "honda",
    "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
    route:'shop/hats'
  },
  {
    "id": 2,
    "title": "jackets",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
    route:'shop/jackets'
  },
  {
    "id": 3,
    "title": "sneakers",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
    route:'shop/sneakers'
  },

]

const Directory = () => {
  
    return (
        <div className="directory-container">
      {autoParts.map((part) => (
        <DirectoryItem key= {part.id} part={part} />
                
      ))}
    </div>
    );
};
export default Directory;