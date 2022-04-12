import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Input, Button } from "../elements";
import comment, {
  getCommentAX,
  postCommentAX,
  deleteCommentAX,
  updateCommentAX,
} from "../redux/modules/comment";
import { FaRegEdit, FaTrashAlt, FaRegWindowClose } from "react-icons/fa";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Comments = () => {
  const dispatch = useDispatch();
  const [comm, setComm] = useState("");
  const [newComm, setNewComm] = useState("");
  const [editing, setEditing] = useState(false);
  const comment_list = useSelector((state) => state.comment);
  const params = useParams();
  console.log(comment_list);
  console.log(params);

  const toggleEditing = () => setEditing((editing) => !editing);

  useEffect(() => {
    dispatch(getCommentAX(params.openApiId));
  }, []);

  return (
    <>
      <HeadText>한줄평!</HeadText>
      <CommWrap>
        <CommentInput
          onChange={(e) => setComm(e.target.value)}
          placeholder="댓글 입력"
        />
        <CommentBtn
          type="button"
          onClick={() => {
            dispatch(postCommentAX(comm, params.openApiId));
          }}
        >
          댓글 등록
        </CommentBtn>
      </CommWrap>
      <br />
      {comment_list.comments.map((comment, idx) => {
        if (comment.comment == null) {
          return;
        }
        return (
          <Fragment key={idx}>
            <div>
              {editing ? (
                <CommentBox>
                  <CommentName>
                    <EditInput
                      type="text"
                      defaultValue={comment.comment}
                      onChange={(e) => setNewComm(e.target.value)}
                    />
                  </CommentName>

                  <DelBox>
                    <EditBtn
                      onClick={() => {
                        console.log("수정완료");
                        dispatch(
                          updateCommentAX(comment, newComm),
                          toggleEditing()
                        );
                      }}
                    >
                      수정완료
                    </EditBtn>
                    <FaRegWindowClose
                      size={20}
                      style={{ marginLeft: "5px", cursor: "pointer" }}
                      onClick={toggleEditing}
                    />
                  </DelBox>
                </CommentBox>
              ) : (
                <CommentBox key={idx}>
                  <CommentName>
                    <h3>{comment.comment}</h3>
                    <p>{comment.username}</p>
                  </CommentName>

                  <DelBox>
                    <FaRegEdit
                      style={{ marginRight: "15px", cursor: "pointer" }}
                      onClick={() => {
                        toggleEditing();
                      }}
                    />
                    <FaTrashAlt
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        console.log(comment);
                        dispatch(deleteCommentAX(comment));
                      }}
                    />
                  </DelBox>
                </CommentBox>
              )}
            </div>
          </Fragment>
        );
      })}
    </>
  );
};

const HeadText = styled.h1`
  color: #017356;
`;

const CommentBox = styled.div`
  display: flex;
  margin: 10px auto;
  width: 500px;
  align-items: center;
`;

const DelBox = styled.div`
  display: flex;
`;

const CommentName = styled.div`
  display: flex;
  justify-content: right;
  h3 {
    margin-right: 15px;
  }
  line-height: 58.438px;
  vertical-align: middle;
  margin: 0px auto 0px 15px;
`;

const CommWrap = styled.div`
  box-sizing: border-box;
  vertical-align: middle;
`;

const CommentInput = styled.input`
  border-radius: 0;
  border: 1px solid #d7d8d9;
  width: 400px;
  height: 30px;
`;

const CommentBtn = styled.button`
  border: 1px solid #d7d8d9;
  background-color: black;
  width: 80px;
  height: 30px;
  cursor: pointer;
  color: white;
  margin-left: 10px;
  :hover {
    box-shadow: 0 0 4px black;
    font-weight: 900;
  }
`;

const EditInput = styled.input`
  border-radius: 0;
  border: 1px solid #d7d8d9;
  width: 400px;
  height: 30px;
  box-sizing: border-box;
`;

const EditBtn = styled.button`
  border: none;
  background-color: black;
  width: 80px;
  height: 30px;
  cursor: pointer;
  color: white;
  margin-left: 10px;
  box-sizing: border-box;
  :hover {
    box-shadow: 0 0 4px black;
    font-weight: 900;
  }
`;

export default Comments;
