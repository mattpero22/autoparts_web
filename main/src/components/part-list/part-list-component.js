import Part from '../part/part.component';
import './part-list.styles.css';

function PartList ({parts}){
    <div className = 'part-list'>
        {parts.map((part) => {
            return <Part part={part} />
        })}
    </div>
}

export default PartList;