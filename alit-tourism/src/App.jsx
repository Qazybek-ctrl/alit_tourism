import AppRouter from "./Router";
import { AuthProvider } from "./utility/AuthContext";
import { LanguageProvider } from "./utility/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </LanguageProvider>
  );
}
