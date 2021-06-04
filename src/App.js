import style from "./app.module.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from "./Nav";
import mouse from "./img/Mouse_tab.png";
import mousepad from "./img/Mousepad_tab.png";
import headset from "./img/Headset_tab.png";
import keyboard from "./img/Keyboard_tab.png";
import lib from "./img/lib.png"
import esp from "./img/esp.png";
import special from "./img/special.png";
import item from "./img/item.png";
import asset from "./img/asset.png";
import asset1 from "./img/asset1.png";
import asset3 from "./img/asset3.png";


function App() {
  return (
    <div >
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component = {Home}/>
        </Switch>
      </Router>
    </div>
  );
}
function Home() {
  return(
    <div className={style.container}> 
    <div className={style.items}>
    <div className={style.item}><img src={mouse} alt="mouse"/></div>
    <div className={style.item}><img src={mousepad} alt="mousepad"/></div>
    <div className={style.item}><img src={headset} alt="headset"/></div>
    <div className={style.item}><img src={keyboard} alt="keyboard"/></div>
    </div>
    <div className={style.itemsa}>
    <div className={style.itema}><img src={lib} alt="lib"/></div>
    <div className={style.itema}><img src={esp} alt="esp"/></div>
    <div className={style.itema}><img src={special} alt="special"/></div>
    </div>
    
    <div className={style.partner}><img src={item} alt="item"/></div>
    <div className={style.itemsa}>
    <div className={style.itema}><img src={asset} alt="lib"/></div>
    <div className={style.itema}><img src={asset1} alt="esp"/></div>
    <div className={style.itema}><img src={asset3} alt="special"/></div>
    </div>
    <div className={style.sub}>
    <div className={style.footer}>
      <div className={style.ifoot}>
        <h1>PRODUCTS</h1><br/>
        <h2>MICE</h2>
        <h2>KEYBOARDS</h2>
        <h2>HEADSETS</h2>
        <h2>MOUSEPADS</h2>
      </div>
      <div className={style.ifoot}>
      <h1>PARTNERS</h1><br/>
        <h2>LOGITEC</h2>
        <h2>STEELSERIES</h2>
        <h2>REAZER</h2>
      </div>
      <div className={style.ifoot}>
      <h1>ABOUT US</h1><br/>
        <h2>SUPPORT</h2>
        <h2>PRIVACY POLICY</h2>
        <h2>CREATORS</h2>
        
      </div>
    </div>
    </div>
    </div>

  )
}
export default App;
