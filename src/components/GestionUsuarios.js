import React, { Component } from 'react'

export default class GestionUsuarios extends Component {
    render() {
        return (

            <div className="table">
                <table className="table table-hover my-5">
                    <thead className="thead-dark">
                        <tr>
                            <th>Datos</th>
                            <th>Datos</th>
                            <th>Datos</th>
                            <th>Datos</th>
                            <th>Datos</th>
                            <th>Datos</th>
                            <th>Datos</th>
                            <th>Datos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Datos</td>
                            <td>Datos</td>
                            <td>Datos</td>
                            <td>Datos</td>
                            <td>Datos</td>
                            <td>Datos</td>
                            <td>
                                <a href="./vistas/update.php?id=<?php echo $row['id']?>" className="btn btn-secondary">
                                    <i className="fas fa-marker" />
                                    Modificar
                                </a>
                            </td>
                            <td>
                                <a href="./controller/deleteTeacher.php?id=<?php echo $row['id']?>" className="btn btn-danger" id="delete">
                                    <i className="far fa-trash-alt" />
                                    Eliminar
                                </a>
                            </td>
                        </tr>

                    </tbody>
                </table>
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-body">
                            <form action="/add" method="post">
                                <div className="form-group">
                                    <input type="text" name="name" placeholder="" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="address" placeholder="" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="phone" placeholder="" className="form-control" />
                                </div>
                                <button className="btn btn-primary" type="submit">Registar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
