import DirectoryItem from '../directory-item/directory-item.component';

import './directory.styles.css';

const categories = [
  {
    "id": 1,
    "name": "hats",
    'value':3,
    
  },
  {
    "id": 2,
    "name": "jackets",
    'value':3,
   
  },
  {
    "id": 3,
    "name": "sneakers",
    'value':3,
    
  },
  {
    "id": 4,
    "name": "womens",
    'value':3,

    
  },
  {
    "id": 5,
    "name": "mens",
    'value':3,
   
  }
]
function Directory(){
  
    return (
        <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key= {category.id} category={category}/>
        
      ))}
    </div>
    );
};
export default Directory;