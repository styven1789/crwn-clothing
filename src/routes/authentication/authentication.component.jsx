import SignUpForm from '../../components/sign-up-form/sign-up-form.componernt';
import SignInForm from '../../components/sign-in-form/sign-in-form.componernt';

import './authentication.styles.scss';

const Authentication = () => {    

  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;