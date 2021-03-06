import React, { Component } from 'react'

export default class Perfil extends Component {
    render() {
        return (
            <div className="container">
                <div className="row my-2">
                    <div className="col-lg-8 order-lg-2">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a href data-target="#profile" data-toggle="tab" className="nav-link active">Profile</a>
                            </li>
                            <li className="nav-item">
                                <a href data-target="#messages" data-toggle="tab" className="nav-link">Messages</a>
                            </li>
                            <li className="nav-item">
                                <a href data-target="#edit" data-toggle="tab" className="nav-link">Edit</a>
                            </li>
                        </ul>
                        <div className="tab-content py-4">
                            <div className="tab-pane active" id="profile">
                                <h5 className="mb-3">User Profile</h5>
                                <div className="row">
                                    <div className="col-md-6">
                                        <h6>About</h6>
                                        <p>
                                            Web Designer, UI/UX Engineer
              </p>
                                        <h6>Hobbies</h6>
                                        <p>
                                            Indie music, skiing and hiking. I love the great outdoors.
              </p>
                                    </div>
                                    <div className="col-md-6">
                                        <h6>Recent badges</h6>
                                        <a href="#" className="badge badge-dark badge-pill">html5</a>
                                        <a href="#" className="badge badge-dark badge-pill">react</a>
                                        <a href="#" className="badge badge-dark badge-pill">codeply</a>
                                        <a href="#" className="badge badge-dark badge-pill">angularjs</a>
                                        <a href="#" className="badge badge-dark badge-pill">css3</a>
                                        <a href="#" className="badge badge-dark badge-pill">jquery</a>
                                        <a href="#" className="badge badge-dark badge-pill">bootstrap</a>
                                        <a href="#" className="badge badge-dark badge-pill">responsive-design</a>
                                        <hr />
                                        <span className="badge badge-primary"><i className="fa fa-user" /> 900 Followers</span>
                                        <span className="badge badge-success"><i className="fa fa-cog" /> 43 Forks</span>
                                        <span className="badge badge-danger"><i className="fa fa-eye" /> 245 Views</span>
                                    </div>
                                    <div className="col-md-12">
                                        <h5 className="mt-2"><span className="fa fa-clock-o ion-clock float-right" /> Recent Activity</h5>
                                        <table className="table table-sm table-hover table-striped">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <strong>Abby</strong> joined ACME Project Team in <strong>`Collaboration`</strong>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Gary</strong> deleted My Board1 in <strong>`Discussions`</strong>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Kensington</strong> deleted MyBoard3 in <strong>`Discussions`</strong>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>John</strong> deleted My Board1 in <strong>`Discussions`</strong>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Skell</strong> deleted his post Look at Why this is.. in <strong>`Discussions`</strong>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                {/*/row*/}
                            </div>
                            <div className="tab-pane" id="messages">
                                <div className="alert alert-info alert-dismissable">
                                    <a className="panel-close close" data-dismiss="alert">×</a> This is an <strong>.alert</strong>. Use this to show important messages to the user.
          </div>
                                <table className="table table-hover table-striped">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span className="float-right font-weight-bold">3 hrs ago</span> Here is your a link to the latest summary report from the..
                </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="float-right font-weight-bold">Yesterday</span> There has been a request on your account since that was..
                </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="float-right font-weight-bold">9/10</span> Porttitor vitae ultrices quis, dapibus id dolor. Morbi venenatis lacinia rhoncus.
                </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="float-right font-weight-bold">9/4</span> Vestibulum tincidunt ullamcorper eros eget luctus.
                </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="float-right font-weight-bold">9/4</span> Maxamillion ais the fix for tibulum tincidunt ullamcorper eros.
                </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="tab-pane" id="edit">
                                <form role="form">
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">First name</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text" defaultValue="Jane" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Last name</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text" defaultValue="Bishop" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Email</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="email" defaultValue="email@gmail.com" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Company</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text" defaultValue />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Website</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="url" defaultValue />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Address</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text" defaultValue placeholder="Street" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label" />
                                        <div className="col-lg-6">
                                            <input className="form-control" type="text" defaultValue placeholder="City" />
                                        </div>
                                        <div className="col-lg-3">
                                            <input className="form-control" type="text" defaultValue placeholder="State" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Time Zone</label>
                                        <div className="col-lg-9">
                                            <select id="user_time_zone" className="form-control" size={0}>
                                                <option value="Hawaii">(GMT-10:00) Hawaii</option>
                                                <option value="Alaska">(GMT-09:00) Alaska</option>
                                                <option value="Pacific Time (US & Canada)">(GMT-08:00) Pacific Time (US &amp; Canada)</option>
                                                <option value="Arizona">(GMT-07:00) Arizona</option>
                                                <option value="Mountain Time (US & Canada)">(GMT-07:00) Mountain Time (US &amp; Canada)</option>
                                                <option value="Central Time (US & Canada)" selected="selected">(GMT-06:00) Central Time (US &amp; Canada)</option>
                                                <option value="Eastern Time (US & Canada)">(GMT-05:00) Eastern Time (US &amp; Canada)</option>
                                                <option value="Indiana (East)">(GMT-05:00) Indiana (East)</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Username</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text" defaultValue="janeuser" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Password</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="password" defaultValue={11111122333} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Confirm password</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="password" defaultValue={11111122333} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label" />
                                        <div className="col-lg-9">
                                            <input type="reset" className="btn btn-secondary" defaultValue="Cancel" />
                                            <input type="button" className="btn btn-primary" defaultValue="Save Changes" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 order-lg-1 text-center">
                        <img src="//placehold.it/150" className="mx-auto img-fluid img-circle d-block" alt="avatar" />
                        <h6 className="mt-2">Upload a different photo</h6>
                        <label className="custom-file">
                            <input type="file" id="file" className="custom-file-input" />
                            <span className="custom-file-control">Choose file</span>
                        </label>
                    </div>
                </div>
            </div>

        )
    }
}
