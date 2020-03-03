import React from 'react';
import palabras from '../data/palabras.json';
import assets from '../data/config.json';

const imgGenerales = assets.img.general;

function Menu(props) {


    return (
        <React.Fragment>
            <div className="row">
                <div className="col-12">
                    <div className="">
                    <img id="banner" className="banner" src={imgGenerales + "banner.jpg"}  alt="Portada" />
                        {/* <h1>Traductor Gnabere</h1> */}
                    </div>
                </div>
            </div>
            <div className="row text-center">
            <div className="col-12">
 
                {
                    palabras.map((item,i)=>(
                    <button className="btn btn-success mx-1" onClick={props.handleObtenerEjemplo} key={i} id={item.ejemplo} >{item.letra}</button>
                    ))
                }
            </div>
        </div>
            <div className="row">
                <div className="col-8">
                    </div>
                    <div className="col-3">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><i class="fa fa-search"></i></span>
                        </div>
                        <input onChange={props.handleBuscador} type="text" className="form-control" placeholder="Digite el término a buscar" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div className="col-1">
                    <div className="form-check form-check-inline">
                        {/* <input onClick={props.handleNombreCientifico} className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" /> */}
                        {/* <label className="form-check-label" htmlFor="inlineCheckbox1">Gnabere al español</label> */}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default Menu;