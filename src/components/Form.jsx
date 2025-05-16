import React, { useState } from 'react';
import { FormControl, FormLabel, Input, Textarea, Button, FormErrorMessage } from '@chakra-ui/react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Το όνομα είναι υποχρεωτικό.';
    if (!form.email) newErrors.email = 'Το email είναι υποχρεωτικό.';
    if (!form.message) newErrors.message = 'Το μήνυμα είναι υποχρεωτικό.';
    return newErrors;
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Send email using EmailJS
      try {
        const response = await emailjs.send(
          'service_f6fg6ke',  // Replace with your EmailJS service ID
          'template_i0080hv', // Replace with your EmailJS template ID
          form,               // The form data to send
          '9L9g9Y4bs-UoKKYy1'      // Replace with your EmailJS user ID
        );

        if (response.status === 200) {
          setSubmitted(true);
          setForm({ name: '', email: '', message: '' });
        } else {
          alert("Η αποστολή απέτυχε. Δοκιμάστε ξανά.");
        }
      } catch (error) {
        alert("Η αποστολή απέτυχε. Δοκιμάστε ξανά.");
        console.error(error);
      }
    }
  };

  return (
    <>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <FormControl isInvalid={errors.name} mb={4}>
            <FormLabel>Όνομα</FormLabel>
            <Input name="name" value={form.name} onChange={handleChange} />
            <FormErrorMessage>{errors.name}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.email} mb={4}>
            <FormLabel>Email</FormLabel>
            <Input name="email" type="email" value={form.email} onChange={handleChange} />
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.message} mb={4}>
            <FormLabel>Μήνυμα</FormLabel>
            <Textarea name="message" value={form.message} onChange={handleChange} />
            <FormErrorMessage>{errors.message}</FormErrorMessage>
          </FormControl>

          <Button type="submit" colorScheme="blue" width="100%">
            Υποβολή
          </Button>
        </form>
      ) : (
        <p style={{ marginTop: "1rem", color: "brand.dark.secondary" }}>Το μήνυμά σου στάλθηκε με επιτυχία!</p>
      )}
    </>
  );
};

export default ContactForm;
