import React, { Component } from 'react'
import '../css/login.scss'
import { Link } from 'react-router-dom';

export class Login extends Component {
    render() {
        return (
            <div className="row">

                <div className="col-md-a mx-auto">
                    <div className="card text-center" style={{width: '18rem', maxHeight: '5rem'}} >
                        <img
                            src="https://www.asesorianavarra.es/wp-content/uploads/2019/01/calendar-gif-animated-3.gif"
                            classname="card-img-top"
                            alt="..."
                            style={{maxwidth: '20rem', maxHeight: '15rem'}}
                        />
                        {/* <div className="card-header">
                            <h3>signIn</h3>
                        </div> */}
                        <div className="card-body">
                            <h5 class="card-title">Iniciar Sesion</h5>
                            <form action="" method="POST">
                                <div className="form-group">
                                    <input type="text" name="usuario" placeholder="Nombre Usuario" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="password" name="clave" placeholder="Contraseña" className="form-control" />
                                </div>
                                <div className="form-group">
                                    {/* <input type="submit" name="login" className="btn btn-success btn-block" defaultValue="Iniciar sesion" /> */}
                                    <Link className="btn btn-success btn-block" to="/Calendar">Iniciar Sesion</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Login
