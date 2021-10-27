import "./style.css"
interface ICardProps  {
    name: string;
    age: string;
    hobby: string;
}
const Card = ({name, age, hobby}: ICardProps ) => {
    return (
        <div className = "card">
            <h3>{name}, {age}</h3>
            <p>{hobby}</p>
        </div>
    )

}

export default Card