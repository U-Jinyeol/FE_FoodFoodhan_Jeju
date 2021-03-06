import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Input, Button } from "../elements";
import comment, {
  getCommentAX,
  postCommentAX,
  deleteCommentAX,
  updateCommentAX,
  isEdit,
} from "../redux/modules/comment";

import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { BiXCircle } from "react-icons/bi";

import styled from "styled-components";
import { useParams } from "react-router-dom";
import card from "../redux/modules/card";
import Permit from "../Permit";

const Comments = () => {
  const dispatch = useDispatch();
  const [comm, setComm] = useState("");
  const [newComm, setNewComm] = useState("");

  const comment_list = useSelector((state) => state.comment);
  const state = useSelector((state) => state);
  const params = useParams();
  console.log(comment_list);
  console.log(params);

  const is_login = localStorage.getItem("is_login");
  const username = localStorage.getItem("username");

  const toggleEditing = (commentId) => {
    dispatch(isEdit(commentId));
  };

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
        {is_login ? (
          <CommentBtn
            type="submit"
            onClick={() => {
              console.log(params.openApiId);
              dispatch(postCommentAX(comm, params.openApiId));
            }}
          >
            댓글 등록
          </CommentBtn>
        ) : (
          <CommentBtn
            type="submit"
            onClick={() => {
              window.alert("회원 가입을 해주세요!");
            }}
          >
            댓글 등록
          </CommentBtn>
        )}
      </CommWrap>
      <br />

      {comment_list.comments.map((comment, idx) => {
        if (comment.comment == null) {
          return;
        }
        return (
          <Fragment key={idx}>
            <div>
              {comment.is_edit ? (
                <EditBox>
                  <CommentName>
                    <EditInput
                      type="text"
                      defaultValue={comment.comment}
                      onChange={(e) => setNewComm(e.target.value)}
                    />
                  </CommentName>

                  <EditBtn
                    type="button"
                    onClick={() => {
                      console.log("수정완료");
                      dispatch(
                        updateCommentAX(comment, params.openApiId, newComm),
                        toggleEditing(comment.commentId)
                      );
                    }}
                  >
                    Edit
                  </EditBtn>
                  <BiXCircle
                    size={40}
                    style={{ marginLeft: "5px", cursor: "pointer" }}
                    onClick={() => {
                      toggleEditing(comment.commentId);
                    }}
                  />
                </EditBox>
              ) : (
                <CommentBox key={idx}>
                  <CommentName>
                    <h3>{comment.comment}</h3>
                    <p>{comment.userName}</p>
                  </CommentName>

                  {username === comment.userName ? (
                    <Permit>
                      <DelBox>
                        <FaRegEdit
                          style={{ marginRight: "15px", cursor: "pointer" }}
                          onClick={() => {
                            toggleEditing(comment.commentId);
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
                    </Permit>
                  ) : null}
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
  color: #646464;
  text-align: center;
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
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  vertical-align: middle;
`;

const CommentInput = styled.input`
  border-radius: 0;
  border: 1px solid #d7d8d9;
  width: 400px;
  height: 30px;
  border: 1px solid #007356;
  :focus {
    outline: 1px solid #007356;
  }
`;

const CommentBtn = styled.button`
  border: none;
  background-color: #007356;
  width: 80px;
  height: 35px;
  cursor: pointer;
  color: white;
  margin-left: 10px;
  :hover {
    box-shadow: 0 0 4px black;
    font-weight: 900;
  }
`;
const EditBox = styled.div`
  display: flex;
  margin: 10px auto;
  width: 500px;
  align-items: center;
  height: 95.8px;
`;

const EditInput = styled.input`
  border-radius: 0;
  border: 1px solid #d7d8d9;
  width: 400px;
  height: 40px;
  box-sizing: border-box;
  :focus {
    outline: 1px solid #f49b26;
  }
`;

const EditBtn = styled.button`
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  background-color: #f49b26;
  width: 80px;
  height: 30px;
  cursor: pointer;
  color: white;
  margin-left: 10px;
  box-sizing: border-box;
  :hover {
    box-shadow: 0 0 4px black;
    font-weight: 700;
  }
`;

export default Comments;
