import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";

export const AddContact = () => {
	const { store, actions } = useContext(Context);

	// for edit > pull contact info from store using id
	const [newContact, setNewContact] = useState({
		full_name: "",
		email: "",
		phone: "",
		address: ""
	});

	const handleChange = event => setNewContact({ ...newContact, [event.target.name]: event.target.value });

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							name="full_name"
							onChange={handleChange}
							value={newContact.full_name}
							className="form-control"
							placeholder="Full Name"
						/>
						{/* add onChange for react and value's for controlled input --> */}
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							name="email"
							onChange={handleChange}
							value={newContact.email}
							className="form-control"
							placeholder="Enter email"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							name="phone"
							onChange={handleChange}
							value={newContact.phone}
							className="form-control"
							placeholder="Enter phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							name="address"
							onChange={handleChange}
							value={newContact.address}
							className="form-control"
							placeholder="Enter address"
						/>
					</div>
					<button
						onClick={() => {
							actions.addContact(newContact);
						}}
						type="button"
						className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
