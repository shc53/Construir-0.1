import React from 'react'
import img from '../img/Construir aumento un 265 2.jpg';
import img2 from '../img/Revestimiento PVC paredes 3.jpg';



export const Home = () => {
  return (
    <div className='container py-5'>
      <div className="row">

        <div className="col-lg-6">
            <div className="card">
              <img src={img} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Construir aumentó 265%</h5>
                <p className="card-text">
                  Construir aumentó 265% en un año y el m2 ya cuesta casi un millón de pesos
                  Los precios de los materiales y la mano de obra subieron exorbitantemente el año pasado y superaron al índice de inflación anual. ¿Cuántos dólares se necesitaron para edificar? ...
                </p>
                <a href=" " className="btn btn-primary">Leer más</a>
              </div>
            </div>
        </div>
        <div className="col-lg-3">
          <div className="card">
                <img src={img2} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">¿Cómo es el revestimiento de PVC para paredes?</h5>
                  <p className="card-text">
                  
                  Propuestas decorativas, durables y resistentes. Ofrecen la posibilidad de ser colocados en forma horizontal como vertical.

                  </p>
                  <a href=" " className="btn btn-primary">Leer más</a>
                </div>
              </div>
        </div>

        <div className="col-lg-3">
          <div className="card">
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Construir aumentó 265%</h5>
                  <p className="card-text">
                    Construir aumentó 265% en un año y el m2 ya cuesta casi un millón de pesos
                    Los precios de los materiales y la mano de obra subieron exorbitantemente el año pasado y superaron al índice de inflación anual. ¿Cuántos dólares se necesitaron para edificar? ...
                  </p>
                  <a href=" " className="btn btn-primary">Leer más</a>
                </div>
              </div>
        </div>
        

      </div>
      
       
    </div>
  )
}
