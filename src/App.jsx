import { useDispatch, useSelector } from 'react-redux'

function App() {
  const {count,isShow} = useSelector((state)=>state.counter)
  const dispatch = useDispatch()

  document.querySelector('body').addEventListener('mousemove',
          eyeball);
          
          function eyeball(){
            const eye = document.querySelectorAll('.eye');
            eye.forEach(function(eye){
              let x = (eye.getBoundingClientRect().left) + (eye.
              clientWidth / 2);
              let y = (eye.getBoundingClientRect().top) + (eye.
              clientHeight / 2);

              let radian = Math.atan2(event.pageX - x, event.pageY - y);
              let rotation = (radian * (180 / Math.PI) * -1) + 270;
              eye.style.transform = "rotate("+rotation+"deg)" 
              

            });
          }
  return (
    <div className='center'>

                  <div className="eyes">
                        <div className="dot">
                        <div className="box">
                        <div className="eye"></div>
                        <div className="eye"></div>
                        </div>
                      </div> 
                  </div>
            <div className="calc__content">
                 <div className="calc">
                 <button className="calc__minus-ten"onClick={()=>dispatch({type:"-10"})}>-10</button>
                  <button className="calc__minus" onClick={()=>dispatch({type:"minus"})}>-</button>
                  <p className="calc__number">{count}</p>
                  <button className="cals__plus" onClick={()=>dispatch({type:"plus"})}>+</button>
                  <button className="cals__plus-ten" onClick={()=>dispatch({type:"+10"})}>+10</button>
                 </div>
                  
                  <button className="cals__stop-continue" onClick={()=>dispatch({type:"check"})}>{isShow ? "Stop" : "Continue"}</button>
            </div>


     

    </div>
  )
}

export default App