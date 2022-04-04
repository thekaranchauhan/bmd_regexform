import React, { useState } from "react";

export default function Form() {
   const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      birthDate: "",
      phone: "",
      address: "",
      city: "",
      province: "",
      postalCode: "",
      email: "",
      password: "",
   });

   const [alerts, setAlerts] = useState([]);

   const {
      firstName,
      lastName,
      birthDate,
      phone,
      address,
      city,
      province,
      postalCode,
      email,
      password,
   } = formData;

   let patterns = {
      firstName: /^[a-z A-z-.]+$/,
      lastName: /^[a-z A-z-.]+$/,
      birthDate: /^[0-9]{4}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/,
      phone: /^[0-9]{10}$/,
      address: /^[a-zA-Z0-9 ,.]+$/,
      city: /^[a-z A-z-.]+$/,
      province: /^[a-z A-z-.]+$/,
      postalCode:
         /^[A-Za-z]{1}[0-9]{1}[A-Za-z]{1}[ ]?[0-9]{1}[A-Za-z]{1}[0-9]{1}$/,
      email: /^[a-z0-9.]+[@]{1}[a-z0-9]+[.]{1}[a-z]{2,}$/,
      password: /^.{5,}$/,
   };

   const onChange = (e) => {
      const value = formData[e.target.name];
      const name = e.target.name;
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const onSubmit = (e) => {
      e.preventDefault();

      // Validate all regex with custom alert messages and add the alerts
      if (!patterns.firstName.test(firstName))
         return setAlerts([...alerts, "First name does not match requirements"]);
      if (!patterns.lastName.test(lastName))
         return setAlerts([...alerts, "Last name does not match requirements"]);
      if (!patterns.birthDate.test(birthDate))
         return setAlerts([...alerts, "Birthdate does'nt match requirements"]);
      if (!patterns.phone.test(phone))
         return setAlerts([...alerts, "Phone does not match requirements"]);
      if (!patterns.address.test(address))
         return setAlerts([...alerts, "Address does not match requirements"]);
      if (!patterns.city.test(city))
         return setAlerts([...alerts, "City does not match requirements"]);
      if (!patterns.province.test(province))
         return setAlerts([...alerts, "Province does not match requirements"]);
      if (!patterns.postalCode.test(postalCode))
         return setAlerts([...alerts, "Postal code does not match requirements"]);
      if (!patterns.email.test(email))
         return setAlerts([...alerts, "Email does not match requirements"]);
      if (!patterns.password.test(password))
         return setAlerts([...alerts, "Password does not match requirements"]);

      // Rest of your functionality here
   };

   return (
      <div className="form_container">
         <form onSubmit={(e) => onSubmit(e)}>
            <h1>Register</h1>
            {alerts.map((alert) => (
               <h2>{alert}</h2>
            ))}
            <div className="form_field">
               <input
                  type="text"
                  value={firstName}
                  name="firstName"
                  placeholder="First Name"
                  onChange={(e) => onChange(e)}
               />
            </div>
            <div className="form_field">
               <input
                  type="text"
                  value={lastName}
                  name="lastName"
                  placeholder="Last Name"
                  onChange={(e) => onChange(e)}
               />
            </div>
            <div className="form_field">
               <input
                  type="date"
                  value={birthDate}
                  name="birthDate"
                  placeholder="Birth Date"
                  onChange={(e) => onChange(e)}
               />
            </div>
            <div className="form_field">
               <input
                  type="number"
                  value={phone}
                  name="phone"
                  placeholder="Phone "
                  onChange={(e) => onChange(e)}
               />
            </div>
            <div className="form_field">
               <input
                  type="text"
                  value={address}
                  name="address"
                  placeholder="Address"
                  onChange={(e) => onChange(e)}
               />
            </div>
            <div className="form_field">
               <input
                  type="text"
                  value={city}
                  name="city"
                  placeholder="City       "
                  onChange={(e) => onChange(e)}
               />
            </div>
            <div className="form_field">
               <input
                  type="text"
                  value={province}
                  name="province"
                  placeholder="Province"
                  onChange={(e) => onChange(e)}
               />
            </div>
            <div className="form_field">
               <input
                  type="number"
                  value={postalCode}
                  name="postalCode"
                  placeholder="Postal Code"
                  onChange={(e) => onChange(e)}
               />
            </div>
            <div className="form_field">
               <input
                  type="text"
                  value={email}
                  name="email"
                  placeholder="Email    "
                  onChange={(e) => onChange(e)}
               />
            </div>
            <div className="form_field">
               <input
                  type="password"
                  value={password}
                  name="password"
                  placeholder="Password"
                  onChange={(e) => onChange(e)}
               />
            </div>
            <div className="form_field">
               <button type="submit" className="btn btn-submit">
                  Submit
               </button>
            </div>
         </form>
      </div>
   );
}
