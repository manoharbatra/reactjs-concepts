import withAuthenticationAndLoading from './withAuthenticationAndLoading.jsx';

const SecretComponent = () => {
  return <div>Secret Content</div>;
};

// Enhance SecretComponent with authentication and loading spinner using the withAuthenticationAndLoading HOC
const SecretComponentWithAuthAndLoading = withAuthenticationAndLoading(SecretComponent);

export default SecretComponentWithAuthAndLoading;