
import './App.css';
import React ,{useEffect,useState} from 'react';
import HorizontalScroll from 'react-scroll-horizontal';


// const parent  = { width: `60em`, height: `100%`}

function App() {

  const [offsetX, setOffsetX] = useState(0);
  const handleScroll = () => setOffsetX(window.pageXOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const child   = { width: `300em`, height: `100%`}
  return (
    <div className="App" style={{ transform: `translateX(-${offsetX * 0.5}px)` }}>
     <HorizontalScroll reverseScroll = {true}>
      <div  className="main1 main " id="first">
        <div className="button-div">
        <button>
          <a href="#first">
            route 1
          </a>
        </button>
        <button>
          <a href="#second">
            route 2
          </a>
        </button>
        <button>
          <a href="#third">
            route 3
          </a>
        </button>
        <button>
          <a href="#fourth">
            route 4
          </a>
        </button>
        </div>
        <div className="" style={{ transform: `translateX(-${offsetX * 0.8}px)` }}>
            <h1>Hello World 1</h1>
        </div>
      </div>

      <div  className="main2 main " id="second">

        <div className="button-div">

            <button>
              <a href="#first">
                route 1
              </a>

            </button>

            <button>
              <a href="#second">
                route 2
              </a>

            </button>

            <button>
              <a href="#third">
                route 3
              </a>

            </button>

            <button>
              <a href="#fourth">
                route 4
              </a>

            </button>
          </div>
          <h1>Hello world 2</h1>
          
          <div className="yy2" style={{ transform: `translateX(-${offsetX * 0.8}px)` }}>
              <div className="mydiv">
                vbsdhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhj
              </div>
              <div className="mydiv">
                vbsdhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhj
              </div>
              <div className="mydiv">
                vbsdhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhj
              </div>
              <div className="mydiv">

              </div>
          </div>
      </div>

      <div  className="main3 main " id="third">
      <div className="button-div">
        <button>
          <a href="#first">
            route 1
          </a>
        </button>
        <button>
          <a href="#second">
            route 2
          </a>
        </button>
        <button>
          <a href="#third">
            route 3
          </a>
        </button>
        <button>
          <a href="#fourth">
            route 4
          </a>
        </button>
        </div>
        <h1 style={{ transform: `translateX(-${offsetX * 0.8}px)` }}>Hello World 3</h1>
      </div>

      

      <div  className="main4 main" id="fourth">

      <div className="button-div">
        <button>
          <a href="#first">
            route 1
          </a>
        </button>
        <button>
          <a href="#second">
            route 2
          </a>
        </button>
        <button>
          <a href="#third">
            route 3
          </a>
        </button>
        <button>
          <a href="#fourth">
            route 4
          </a>
        </button>
        </div>
        <h1 style={{ transform: `translateX(-${offsetX * 0.8}px)` }}>Hello World 4</h1>
      </div> 
     </HorizontalScroll>
    </div>
  );
}

export default App;
