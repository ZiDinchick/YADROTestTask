import React, { useState } from "react";
import "./Auth.scss";

function Auth({ setIsAuth, setUser }) {
    const [isRegistration, setIsRegistration] = useState(true);
    const [email, setEmail] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [accessCode, setAccessCode] = useState("");

    const handleRegistrationSubmit = (event) => {
        event.preventDefault();
        const user = { email, lastName, firstName };
        setUser(user);
        setIsAuth(true);
    };

    return (
        <>
            <section className='authorization'>
                <div className='sett__authorization'>
                    <input
                        className='btn__sets'
                        name='radio'
                        type='radio'
                        value='1'
                        id='radio-1'
                        checked={isRegistration}
                        onChange={() => setIsRegistration(true)}
                    />
                    <label className='label__btn__sets' htmlFor='radio-1'>
                        Регистрация
                    </label>
                    <input
                        className='btn__sets'
                        name='radio'
                        type='radio'
                        value='2'
                        id='radio-2'
                        checked={!isRegistration}
                        onChange={() => setIsRegistration(false)}
                    />
                    <label className='label__btn__sets' htmlFor='radio-2'>
                        Код доступа
                    </label>
                </div>
                {isRegistration ? (
                    <div className='container__authorization'>
                        <form
                            className='form__authorization'
                            onSubmit={handleRegistrationSubmit}
                        >
                            <h2 className='h2'>Данные для авторизации</h2>
                            <h3 className='h3'>Электронная почта</h3>
                            <div className='input'>
                                <div className='img__star'>
                                    <img
                                        className='star'
                                        src='YADROTestTask/src/assets/image/_.svg'
                                        alt='star'
                                    />
                                </div>
                                <input
                                    className='forma__input'
                                    type='email'
                                    placeholder='my_email@mail.ru'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <h2 className='h2'>Прочие данные</h2>
                            <h3 className='h3'>Фамилия</h3>
                            <div className='input'>
                                <div className='img__star'>
                                    <img
                                        className='star'
                                        src='YADROTestTask/src/assets/image/_.svg'
                                        alt='star'
                                    />
                                </div>
                                <input
                                    className='forma__input'
                                    type='text'
                                    placeholder='Ваша фамилия'
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <h3 className='h3'>Имя</h3>
                            <div className='input'>
                                <div className='img__star'>
                                    <img
                                        className='star'
                                        src='YADROTestTask/src/assets/image/_.svg'
                                        alt='star'
                                    />
                                </div>
                                <input
                                    className='forma__input'
                                    type='text'
                                    placeholder='Ваше имя'
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <button className='btn__send' type='submit'>
                                Отправить
                            </button>
                            <p className='text'>
                                * поле, обязательное для заполнения
                            </p>
                        </form>
                    </div>
                ) : (
                    <div className='container__authorization'>
                        <form className='form__authorization'>
                            <h3 className='h3'>
                                Укажите электронную почту для восстановления
                                кода
                            </h3>
                            <div className='input'>
                                <div className='img__star'>
                                    <img
                                        className='star'
                                        src='YADROTestTask/src/assets/image/_.svg'
                                        alt='star'
                                    />
                                </div>
                                <input
                                    className='forma__input'
                                    type='text'
                                    placeholder='mail@mail.com'
                                    value={accessCode}
                                    onChange={(e) =>
                                        setAccessCode(e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <button className='btn__send' type='submit'>
                                Отправить код
                            </button>
                        </form>
                    </div>
                )}
            </section>
        </>
    );
}

export default Auth;
