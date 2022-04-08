import { useState } from "react";

export default function Modal(props) {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  return (
    <div
      className={`modal ${props.isVisible}`}
      id="modal1"
      data-animation="slideInOutLeft"
    >
      <div className="modal-dialog">
        <header className="modal-header">
          이번달 전시회 추가하기
          <button
            className="close-modal"
            aria-label="close modal"
            data-close
            onClick={(e) => {
              props.setVisible(false);
            }}
          >
            <b>✕</b>
          </button>
        </header>
        <section className="modal-content">
          <form id="add-form">
            <label htmlFor="title">전시회 제목</label>
            <input
              required
              maxLength={30}
              type="text"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="image">이미지</label>
            <input
              required
              maxLength={100}
              type="text"
              id="image"
              onChange={(e) => setImage(e.target.value)}
            />
            <button
              className="regModal"
              onClick={(e) => {
                e.preventDefault();

                if (title === "") {
                  alert("전시회 명을 입력하세요.");
                  return;
                }
                if (image === "") {
                  alert("전시회 이미지 주소를 입력하세요.");
                  return;
                } else if (!isValidHttpUrl(image)) {
                  alert("유효한 이미지 주소가 아닙니다.");
                  return;
                }

                const newExhibition = {
                  title: title,
                  src: image,
                  id: props.exhibitions.length + 1,
                };
                const newExhibitions = props.exhibitions;
                newExhibitions.push(newExhibition);
                props.setExhibitions(newExhibitions);
                props.setVisible(false);
              }}
            >
              등록하기
            </button>
          </form>
        </section>
        <footer className="modal-footer">
          <i>mmca</i>
        </footer>
      </div>
    </div>
  );
}

function isValidHttpUrl(url_str) {
  let url;
  try {
    url = new URL(url_str);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}
