import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";

export const EditContact = () => {
	const { store, actions } = useContext(Context);
	// use id in order to find this specific contact from store.contacts
	// to get id from props.match.params.id
	// use find method to match params.id
	// for edit > pull contact info from store using id
	const [editedContact, setEditedContact] = useState({
		full_name: "", // contact.full_name (this will come from newly created contact variable from find method), apply to all 4 below
		email: "",
		id: "",
		phone: "",
		address: ""
	});

	const handleChange = event => setEditedContact({ ...editedContact, [event.target.name]: event.target.value });

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit a contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							name="full_name"
							onChange={handleChange}
							value={editedContact.full_name}
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
							value={editedContact.email}
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
							value={editedContact.phone}
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
							value={editedContact.address}
							className="form-control"
							placeholder="Enter address"
						/>
					</div>
					<button
						onClick={() => {
							actions.editContact(editedContact);
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
