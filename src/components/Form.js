import React, { useState } from "react";
import "./Form.css";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://tohrhqhsfsonimqlsink.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvaHJocWhzZnNvbmltcWxzaW5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzMDc5MTksImV4cCI6MjAzMzg4MzkxOX0.n2_-FSnVLjMVk-YfYK5Qz78fJGtrhTFKI1K87_XS-Zw'
const supabase = createClient(supabaseUrl, supabaseKey);


const Form = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data, error } = await supabase
                .from('contacts')
                .insert([
                    { name: formData.name, email: formData.email, message: formData.message }
                ]);
            if (error) throw error;
            setSubmitted(true);
        } catch (error) {
            setError(error.message);
        }
        alert("Form submitted successfully");
        console.log('Form data submitted:', formData);
    };



    return (
        <div className="form-me-section" id="contact">
            <h2>Contact for freelancing work</h2>
            <div className="contact-form-container">
                {submitted ? (
                    <div className="success-message">Thank you for your message!<br />Will contact you ASAP!</div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
                {error && <div className="error-message">{error}</div>}
            </div>
        </div>
    );
}

export default Form;