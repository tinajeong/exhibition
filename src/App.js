import "./App.css";
import Modal from "./component/Modal";
import Image from "./component/Image";
import { useState } from "react";

function App() {
  const [exhibitions, setExhibitions] = useState([
    { src: "images/weiwei.png", title: "아이 웨이웨이" },
    { src: "images/2021.png", title: "올해의 작가상 2021" },
    {
      src: "images/leegunee.png",
      title: "MMCA 이건희컬렉션 특별전: 한국미술명작",
    },
  ]);
  const [isVisible, setVisible] = useState(false);
  return (
    <div className="App">
      <div className="sidebar" style={{ width: "20%" }}>
        <h3 className="side-bar-title">MMCA</h3>
        <button
          id="regBtn"
          onClick={(e) => {
            setVisible(true);
          }}
        >
          전시회 추가
        </button>
        {exhibitions.map((ex) => {
          return (
            <span className="bar-item">
              {ex.title}
            </span>
          );
        })}
      </div>
      <div className="container">
        <h1>이번 달 전시 목록</h1>
        {exhibitions.map((ex) => {
          return <Image src={ex.src} alt={ex.title} />;
        })}
      </div>
      <Modal
        isVisible={(isVisible)? "is-visible" :""}
        setVisible={setVisible}
        setExhibitions={setExhibitions}
        exhibitions={exhibitions}
      />
    </div>
  );
}

export default App;
