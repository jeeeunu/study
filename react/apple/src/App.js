import './App.css';
import Hello from './component/Hello';
import styles from './App.module.css';
// import Welcome from './component/Welcome';

function App() { // 함수형 컴포넌트
  return ( // 이 영역부터 jsx
    <div className="App">
      <Hello />
      <div className={styles.box}>
        app
      </div>
    </div>
  );
}

export default App;
