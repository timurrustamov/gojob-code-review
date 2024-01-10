import LoginForm from "./components/LoginForm";
import Title from "./components/Title";
import "./components/styles.css";

export default function App() {
  return (
    <div className="block">
      <div className="w-96 m-auto">
        <div className="m-4">
          <Title>Welcome to Gojob !</Title>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
