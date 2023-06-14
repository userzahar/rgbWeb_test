import { useState, useRef } from "react"
import emailjs from '@emailjs/browser'
import { FormStyledContainer } from "./Form.styled";

export const Form=()=>{
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_07m8yts', 'template_4ub1min', form.current, 'RusdV5L7AgTM8z7t2')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          reset();
      };

    const handleChange = ({ target }) => {
        switch (target.name) {
            case "name": setName(target.value);
                break;
            case "number": setNumber(target.value);
                break;
            case "email": setEmail(target.value);
                break;
            default: ;
        }
    }

    const reset = ()=>{
        setName("");
        setNumber("");
        setEmail("");
    }

    return (<FormStyledContainer>
    <form ref={form}
     onSubmit={handleSubmit}>
        <h2>Запишитесь <span>бесплатно</span> и получите подарок</h2>
        <input 
            type="text" 
            placeholder="Ваше имя и фамилия" 
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            onChange={handleChange}
            value={name}
            />
        <input 
            type="tel"
            placeholder="Ваш номер телефона"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            required
            onChange={handleChange}
            value={number}
         />
        <input 
            type="email" 
            placeholder="Ваш email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
            onChange={handleChange}
            value={email}
            />
        <button type="submit">Записаться бесплатно</button>
        <p>Нажимая на кнопку я согашаюсь <br/>
<a href="/"> с политикой конфидециальности</a></p>
    </form>
    </FormStyledContainer>)
}