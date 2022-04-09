import React from "react";
import "bulma/css/bulma.css";

const Comments = () => {
  return (
    <>
      <div class="block">
        <span class="tag is-success">
          Hello World
          <button class="delete is-small"></button>
        </span>
      </div>

      <div class="notification is-danger">
        <button class="delete"></button>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum
        dolor sit amet, consectetur adipiscing elit
      </div>

      <article class="message is-info">
        <div class="message-header">
          Info
          <button class="delete"></button>
        </div>
        <div class="message-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus
          ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis
          venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec
          sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id
          porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,
          facilisis sodales sem.
        </div>
      </article>
    </>
  );
};

export default Comments;

// <p>실제 방문 리뷰</p>
//             <input type="text" placeholder="댓글을 입력해주세요"></input>
//             <button>댓글 등록</button>
//             <br />
//             <p style={{ marginTop: "20px" }}>
//               여기 분위기 죽입니다... -게하파티최고-
//             </p>
//             <p style={{ marginTop: "20px" }}>임의 댓글 내용.. -흑돼지매니아-</p>
//             <p style={{ marginTop: "20px" }}>고기 고기 고기 괴 -항해99-</p>
//             <p style={{ marginTop: "20px" }}>놀고싶다아아아아아아 -슷하르톼-</p>
