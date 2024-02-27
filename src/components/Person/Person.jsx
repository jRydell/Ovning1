import "./Person.css";

const Person = ({ firstName, lastName, pantColor, favoriteFood, favoriteTool, pet, hobby }) => {
    return (
        <>
            <section className="card">
                <h2>{firstName} {lastName}</h2>
                <p>First name: {firstName}</p>
                <p>Last name: {lastName}</p>
                <p>Pant Color: {pantColor}</p>
                <p>Favorite Food: {favoriteFood}</p>
                <p>Favorite Tool: {favoriteTool}</p>
                <p>Pet: {pet}</p>
                <p>Hobby: {hobby}</p>
            </section>
        </>
    )
}
  
  export default Person;
  