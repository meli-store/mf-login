import { LoginScreen } from "./pages/LoginScreen";
import { BrowserRouter } from 'react-router-dom';

export default function Root(props) {
  return (
    <BrowserRouter>
      <LoginScreen />
    </BrowserRouter>
  );
}
