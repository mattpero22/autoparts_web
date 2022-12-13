import './part.styles.css';



function Part ({part}){
    const {id,name} = part;
    return (
        <div className = 'part-container' key = {id}>
            <h2> {name}</h2>
        </div>

    );
};

export default Part;