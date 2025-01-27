import { faEye, faEyeSlash, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export const Form = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("123");
    const [viewPassword, setViewPassword] = useState(false);

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleViewPassword = () => { setViewPassword(!viewPassword) }

    return (

        <div className="container text-center mt-3">
            <div className="col-6 col-lg-4 col-md-6 m-auto">
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                        <div className="input-group">
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={handleEmail} />
                            <div className="input-group-text">
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                        <div className="input-group">
                            <input type={viewPassword ? "text" : "password"} className="form-control" id="exampleFormControlInput1"
                                value={password} onChange={event => setPassword(event.target.value)} />
                            <div className="input-group-text" onClick={handleViewPassword}>
                                {viewPassword ?
                                    <FontAwesomeIcon icon={faEye} />
                                    :
                                    <FontAwesomeIcon icon={faEyeSlash} className="text-danger mx-1" />
                                }
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}