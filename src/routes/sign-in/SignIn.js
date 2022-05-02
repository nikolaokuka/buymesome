import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase';

import SignUp from '../../components/SignUp/SignUp';

const SignIn = () => {
  const logGooglePopupUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGooglePopupUser}>
        Sign In With Google Popup
      </button>
      <SignUp />
    </div>
  );
};

export default SignIn;
