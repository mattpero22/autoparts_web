import DirectoryItem from '../directory-item/directory-item.component';

import './directory.styles.scss';

const autoParts =[
  {
    "id": 1,
    "title": "Used Car Parts",
    "imageUrl": "https://chuckranautopartsinc.com/wp-content/uploads/2021/08/shutterstock_1717863949.jpg",
    route:'shop/hats'
  },
  {
    "id": 2,
    "title": "Used Car Parts",
    "imageUrl": "https://di-uploads-pod14.dealerinspire.com/toyotaoforlando/uploads/2019/04/car-parts.jpg",
    route:'shop/jackets'
  },
  {
    "id": 3,
    "title": "Used Car Parts",
    "imageUrl": "https://www.crsautomotive.com/wp-content/uploads/2020/10/set-of-car-parts-on-background.jpg",
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