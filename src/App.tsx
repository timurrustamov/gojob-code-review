import Title from "./components/Title";
import { Content } from "./components/content";
import "./components/styles.css"

export default function App() {
  return (
    <div className="block">
      <div className="w-96 m-auto">
        <div className="m-4">
          <Title>Welcome to Gojob !</Title>
        </div>
        <Content />
      </div>
    </div>
  );
}
