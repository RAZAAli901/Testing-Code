import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student.jsx';
function App() {


  return (
    <>
     <Card/>
     <Button/>
     <Student name="Raza Ali" Age={19} Student={true}/>
     <Student name="Saad H" Age={7} Student={true}/>
     <Student />
    </>

  );
}

export default App
