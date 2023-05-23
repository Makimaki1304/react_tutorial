import logo from './Simarin.jpg';
import './App.css';
import{ useState }from "react";

function App() {
  const[counter,setCounter]=useState(0);
  const plusOne=()=>{
    setCounter(counter+1)
  }
  return (
    <div className="App">
    <header className="App-header">
      <h1>Welcome to My page!</h1>
    <img src={logo} className="App-logo" alt="logo" />
     <div className="header-logo">Makimaki</div>
     <div className="geta">日々進化するゲッター線に選ばれしもの</div>
      </header>
      <body>
      <p id="tabcontrol">
      <div className="main-logo">
    <div className="main-logo2">
   <a href="#tabpage1">NEWS</a>
   </div>
   <div className="main-logo2">
   <a href="#tabpage2">BIOGRAPHY</a>
   </div>
   <div className="main-logo2">
   <a href="#tabpage3">DISCOGRAPHY</a>
   </div>
   </div>
</p>
<div id="tabbody">
  <div className="news">
   <div id="tabpage1">NEWS</div>
   </div>
      <div className="news-logo">2023.05.14 初メロディ完成！</div>
      <div className="news-logo">2023.05.13 冷蔵餃子を冷蔵のまま食べてお腹クラッシュ！</div>
      <div className="news-logo">2023.04.24 新作小説製作開始！</div>
      <div className="news-logo">2023.03.01 アーマードコア for anser プレイ開始！</div>
   <div className="news">
    <div id="tabpage2">BIOGRAPHY</div>
    </div>
    <div className="bio">
      2000年代生まれ。日々をなんとなく生きるオタク。浅く広く深い知識でアニメを堪能する。
      高校時代に小説執筆に挑戦するができたのは片手で数える程度。最近になってまた書き始めた。
      音楽の勉強も始めたが脳のOSが追い付かない。ロングスリーパー、寝坊癖あり。
      人生のバイブルはヴァイオレット・エヴァーガーデンとFate。
      </div>
   <div id="tabpage3">DISCOGRAPHY</div>
    </div>
        <p>
          カウンタプログラム
        </p>
        <p>{counter}</p>
        <button id="plus" type="button"   onClick={plusOne}>
          +1する
        </button>
    </body>
    </div>
   
  );
}
export default App


