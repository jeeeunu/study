// import './App.css';
import Header from './component/Header';
import DayList from './component/DayList.tsx';
import Day from './component/Day.tsx';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EmptyPage from './component/EmptyPage';
import CreateWord from './component/CreateWord.tsx';
import CreateDay from './component/CreateDay';

function App() { // 함수형 컴포넌트
  return ( // 이 영역부터 jsx
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/'>
            <DayList />
          </Route>
          {/* 아래에 :day 를 작성하는 이유는 day 에 맞는 url로 이동하기 위해!! */}
          <Route path='/day/:day'>
            <Day />
          </Route>
          {/* emptyPage는 path를 적지 않음. 위에 아무것도 해당되지 않으면 알아서 작동됨, 제일 아래에 작성하면 됨. */}
          <Route path="/create_word">
            <CreateWord />
          </Route>
          <Route path="/create_day">
            <CreateDay />
          </Route>
          <Route>
            <EmptyPage />
          </Route>
        </Switch>
        {/* <Footer/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
