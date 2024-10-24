import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import icon1 from '../assets/icons/icon-1.png';
import icon2 from '../assets/icons/icon-2.png';
import icon3 from '../assets/icons/icon-3.png';

const LoginForm: React.FC = () => {
  const navigate = useNavigate(); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRobot, setIsRobot] = useState(false);
  const [errors, setErrors] = useState({ username: '', password: '', general: '' });

  const validateForm = () => {
    let newErrors = { username: '', password: '' };
    let valid = true;

    if (username.trim() === '') {
      newErrors.username = 'Nazwa użytkownika jest wymagana'; 
      valid = false;
    } else if (username.length < 3) {
      newErrors.username = 'Nazwa użytkownika musi mieć co najmniej 3 znaki'; 
      valid = false;
    }

    if (password.trim() === '') {
      newErrors.password = 'Hasło jest wymagane'; 
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Hasło musi mieć co najmniej 6 znaków'; 
      valid = false;
    } else if (!/[A-Z]/.test(password)) {
      newErrors.password = 'Hasło musi zawierać co najmniej jedną dużą literę'; 
      valid = false;
    } else if (!/[0-9]/.test(password)) {
      newErrors.password = 'Hasło musi zawierać co najmniej jedną cyfrę'; 
      valid = false;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      newErrors.password = 'Hasło musi zawierać co najmniej jeden znak specjalny'; 
      valid = false;
    }

    setErrors(newErrors);
    return valid; 
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    if (validateForm()) {
      if (isRobot) {
        console.log('Wysyłanie:', { username, password, isRobot });
        navigate('/registration'); 
      } else {
        setErrors((prev) => ({ ...prev, general: 'Musisz zaznaczyć, że nie jesteś robotem' }));
      }
    }
  };

  return (
    <div className='flex flex-col items-center w-full h-screen'>
      <div className='flex w-full min-h-[60vh] relative'>
        <img 
          className='absolute object-cover w-full h-full top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]' 
          src="/src/assets/image/background-home.png" 
          alt="Tło"
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-auto m-auto rounded-md p-7 login-form customGlass">
          <h2 className="text-2xl font-bold text-center text-white">Logowanie</h2>
          <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-sm">
            <label htmlFor="username" className='block mt-4 mb-2 text-sm font-bold text-white'>Login</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Imię, Nazwisko lub Login"
              required
              className={`p-2 mb-1 border rounded-md ${errors.username ? 'border-red-500' : 'border-secondaryColor'} focus:outline-none focus:ring-2 focus:ring-fourthColor min-w-[300px]`}
            />
            {errors.username && <span className="p-2 text-sm text-red-500 w-max bg-slate-50 rounded-xl">{errors.username}</span>}
            <label htmlFor="password" className='block mt-4 mb-2 text-sm font-bold text-white'>Hasło</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Hasło"
              required
              className={`p-2 mb-1 border rounded-md ${errors.password ? 'border-red-500' : 'border-secondaryColor'} focus:outline-none focus:ring-2 focus:ring-fourthColor min-w-[300px]`}
            />
            {errors.password && <span className="p-2 text-sm text-red-500 w-max bg-slate-50 rounded-xl">{errors.password}</span>}
            {errors.general && <span className="p-2 text-sm text-red-500 w-max bg-slate-50 rounded-xl">{errors.general}</span>}
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                checked={isRobot}
                onChange={(e) => setIsRobot(e.target.checked)}
                id="not_robot"
                required
                className="login-form__checkbox"
              />
              <label htmlFor="not_robot" className="ml-2 text-sm font-medium text-white cursor-pointer">
                Nie jestem robotem
              </label>
            </div>
            <button 
              type="submit" 
              className="px-4 py-2 mt-4 font-semibold text-white rounded-lg bg-thirdColor hover:bg-fourthColor focus:outline-none focus:ring-2 focus:bg-fourthColor"
            >
              Dalej
            </button>
          </form>
        </div>
      </div>
      <div className='relative flex w-full h-max'>
        <div className='absolute w-[80%] h-[40px] top-[-25px] left-1/2 translate-x-[-50%] bg-white z-10 rounded-2xl'></div>
        <div className='flex items-center justify-center flex-col w-full md:w-1/3 min-h-[300px] h-full p-8 bg-primaryColor'>
          <img className='h-[80px] w-[80px] object-contain mb-5' src={icon2} alt="Ikona do tworzenia i zarządzania postaciami" />
          <h3 className='mb-4 text-xl font-tertiaryFont'>Twórz i zarządzaj postaciami</h3>
          <p className='text-base font-tertiaryFont'>
            W MythicMaker możesz łatwo tworzyć konta i projektować swoje unikalne postacie do RPG. Każdy profil zawiera wszystkie niezbędne informacje, takie jak imię, rasa, historia, wygląd i zdjęcie.
          </p>
        </div>
        <div className='flex items-center justify-center flex-col w-full md:w-1/3 min-h-[300px] h-full p-8 bg-thirdColor'>
          <img className='h-[80px] w-[80px] object-contain mb-5' src={icon3} alt="Ikona do rozwijania umiejętności" />
          <h3 className='mb-4 text-xl font-tertiaryFont'>Rozwijaj swoje umiejętności</h3>
          <p className='text-base font-tertiaryFont'>
            W miarę grania zdobywasz doświadczenie, które pozwala twojej postaci rosnąć. MythicMaker umożliwia dodawanie punktów doświadczenia i modyfikowanie statystyk, takich jak siła, zręczność i inteligencja.
          </p>
        </div>
        <div className='flex items-center justify-center flex-col w-full md:w-1/3 min-h-[300px] h-full p-8 bg-secondaryColor'>
          <img className='h-[80px] w-[80px] object-contain mb-5' src={icon1} alt="Ikona do zarządzania ekwipunkiem" />
          <h3 className='mb-4 text-xl font-tertiaryFont'>Zarządzaj swoim ekwipunkiem</h3>
          <p className='text-base font-tertiaryFont'>
            Zyskaj pełny wgląd w sprzęt, który twoja postać ma na sobie. MythicMaker pozwala ci przeglądać i edytować swój ekwipunek, co ułatwia strategizowanie i zarządzanie postacią.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
