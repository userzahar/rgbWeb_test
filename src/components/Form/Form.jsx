import { useState } from "react"

export const Form=()=>{
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
         
    }

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
    return<div>
    <form onSubmit={handleSubmit}>
        <p>Запишитесь <span>бесплатно</span> и получите подарок</p>
        <input 
            type="text" 
            placeholder="Ваше имя и фамилия" name="name"
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
        <p>Нажимая на кнопку я согашаюсь 
<a href="">с политикой конфидециальности</a></p>
    </form>
    </div>
}