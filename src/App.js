import './App.css';
import profile_image from './profile_image.png';
import cart_image from './cart_image.png';
import SideBarDrop from './SidebarComponents/SideBarDrop';
import Slideshow from './Slideshow/Slideshow';
import Inventory from './Inventory/Inventory';

function App() {
  return (
    <div className="App">
      <SideBarDrop />
      <header>
        <h1 className = "Title">Selling</h1>
        <div className = "Profile_Cart">
          <button className = "proimage" /*onClick = {Profile}*/>
            <img src = {profile_image} alt = "profileimg"/>
          </button>

          <button className = "cartimage" /*onClick = {Cart}*/>
            <img src = {cart_image} alt = "cartimg"/>
          </button>
        </div>
      </header>
    <div className= "slideshow">
      <Slideshow />
    </div>

    <div className='invenntory'>
      <Inventory />
    </div>
    </div>
  );
}

export default App;
