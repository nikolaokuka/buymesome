import SignUp from '../../components/SignUp/SignUp.component';
import SignIn from '../../components/SignIn/SignIn.component';
import { AuthenticationContainer } from './Authentication.styles';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  );
};

export default Authentication;
