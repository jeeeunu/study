import './App.css';
import Hello from './component/Hello';
import styles from './App.module.css';
// import Welcome from './component/Welcome';

function App() { // 함수형 컴포넌트
  return ( // 이 영역부터 jsx
    <div className="App">
      <Hello age={10} />
      <Hello age={20} />
      <Hello age={30} />
    </div>
  );
}

export default App;
