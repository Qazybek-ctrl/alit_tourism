import AppRouter from "./Router";
import { AuthProvider } from "./utility/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}
