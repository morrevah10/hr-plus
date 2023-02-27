import React from "react"
import { Link } from 'react-router-dom'



export const Card = (props) => {

  const data = props.data
    
    const CharecterObj = props.obj
  return (
    <div className="card">
        {/* <section className='info'> */}
            <h3>
              <Link className='linkToCharacterPage' 
              to={{
                pathname : `/character/${CharecterObj.id}`,
                state :{CharecterObj,data
                }
              }}
              >
              {CharecterObj.name}
              </Link>
              </h3>
            <img className="card-img" src={CharecterObj.image}/>
        {/* </section> */}
    </div>
  );
};
