import prof from './assets/prof.jpeg';
function Card(){

return(

<div className="card">
       <img className="card-image" src={prof} alt="pfp" />
        <h2 className="card-title">Raza  Ali</h2>
        <p className="card-text">I like to code and learn different things</p>

</div>

);

}
export default Card;