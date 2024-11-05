import React, { useState } from 'react';

// Definiujemy komponent
const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRobot, setIsRobot] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Submitting:', { username, password, isRobot });
  };

  return (
    <div className='flex flex-col items-center w-full h-screen'>
      <div className='flex w-full min-h-[60vh] relative'>
        <img className='absolute object-cover w-full h-full top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]' src="/src/assets/image/background-home.png" alt="Background"></img>
        <div className="relative z-10 flex flex-col items-center justify-center m-auto rounded-md p-7 w-m-auto wh-auto w- login-form customGlass">
        <h2 className="text-2xl font-bold text-center text-white login-form__title">Logowanie</h2>
          <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-sm mt-8">
            <label htmlFor="username" className='block mt-4 mb-2 text-sm font-bold text-white'>Login</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Name, Surname or Login"
              required
              className="p-2 mb-5 border rounded-md border-secondaryColor focus:outline-none focus:ring-2 focus:ring-fourthColor min-w-[300px]"
            />
            <label htmlFor="password" className='block mt-4 mb-2 text-sm font-bold text-white'>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="p-2 mb-5 border rounded-md border-secondaryColor focus:outline-none focus:ring-2 focus:ring-fourthColor min-w-[300px]"
            />
            <div className="flex items-center mb-4 login-form__robot-check">
              <input
                type="checkbox"
                checked={isRobot}
                onChange={(e) => setIsRobot(e.target.checked)}
                id="not_robot"
                required
                className="login-form__checkbox"
              />
              <label htmlFor="not_robot" className="ml-2 text-sm font-medium text-white cursor-pointer login-form__label">
                I'm not a robot
              </label>
            </div>
            <button type="submit" className="px-4 py-2 mt-4 font-semibold text-white rounded-lg bg-thirdColor hover:bg-fourthColor focus:outline-none focus:ring-2 focus:bg-fourthColor focus:outline-fourthColor ">
              Dalej
            </button>
          </form>
        </div>
      </div>
      <div className='relative flex w-full h-max'>
        <div className='absolute w-[80%] h-[40px] top-[-25px] left-1/2 translate-x-[-50%] bg-white z-10 rounded-2xl'></div>
        <div className='flex items-center justify-center flex-col w-full md:w-1/3 min-h-[300px] h-full p-8 bg-primaryColor'>
          <img className='h-[100px] w-[100px] object-contain' src="./../assets/icons/icon-2.png" alt="" />
          <h3 className='mb-4 text-xl font-tertiaryFont'>Create and Manage Characters</h3>
          <p className='text-base font-tertiaryFont'>At MythicMaker, you can easily create accounts and design your unique characters for RPGs. Each profile includes all the necessary information, such as name, race, backstory, appearance, and photo. With an intuitive interface, you can easily edit and customize your character details.</p>
        </div>
        <div className='flex items-center justify-center flex-col w-full  md:w-1/3 min-h-[300px] h-full p-8 bg-thirdColor '>
          <img className='h-[100px] w-[100px] object-contain' src="./../assets/icons/icon-3.png" alt="icon3" />
          <h3 className='mb-4 text-xl font-tertiaryFont'>Develop Your Skills</h3>
          <p className='text-base font-tertiaryFont' >As you play, you earn experience that allows your character to grow. MythicMaker enables you to add experience points and modify stats such as strength, agility, and intelligence. Receive notifications about the opportunity to enhance your character’s abilities and tailor them to your play style.</p>
        </div>
        <div className='flex items-center justify-center flex-col w-full md:w-1/3 min-h-[300px] h-full p-8 bg-secondaryColor'>
          <img className='h-[100px] w-[100px] object-contain' src="./../assets/icons/icon-1.png" alt="" />
          <h3 className='mb-4 text-xl font-tertiaryFont'>Manage Your Equipment</h3>
          <p className='text-base font-tertiaryFont'>Gain full insight into the gear your character is equipped with. MythicMaker allows you to view and edit your inventory, making it easier to strategize and manage your character. This way, you can be sure that your character is always ready for new adventures.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
