import DirectoryItem from '../directory-item/directory-item.component';

import './directory.styles.scss';

const autoParts =[
  {
    "id": 1,
    "title": "Used Car Parts",
    "imageUrl": "https://1000logos.net/wp-content/uploads/2017/06/Recycle-Logo.png",
    route:'shop/hats'
  },
  {
    "id": 2,
    "title": "Used Car Parts",
    "imageUrl": "https://1000logos.net/wp-content/uploads/2017/06/Recycle-Logo.png",
    route:'shop/jackets'
  },
  {
    "id": 3,
    "title": "Used Car Parts",
    "imageUrl": "https://1000logos.net/wp-content/uploads/2017/06/Recycle-Logo.png",
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