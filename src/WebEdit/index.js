import React, { useState } from "react";
import AceEditor from "react-ace";
import brace from "brace";
import "brace/mode/lua";
import "brace/ext/language_tools";
import "brace/worker/lua";
import "brace/theme/textmate";
import "brace/theme/monokai";
import "brace/theme/eclipse";
import "brace/theme/ambiance";
import "brace/theme/sqlserver";
import "brace/theme/github";
import "brace/theme/solarized_light";
import "brace/theme/solarized_dark";
import "brace/theme/tomorrow_night_bright";
import "./css/app.css";

// import CodeEdit from "./CodeEdit";

function WebEdit() {
  const [show, setShow] = useState("");
  const [showGiaoDien, setShowGiaoDien] = useState("");
  const [showMau, setShowMau] = useState("");
  const [giaoDien, setGiaoDien] = useState("textmate");
  const [code, setCode] = useState("");
  const showwiki = () => {
    if (show == "show") {
      setShow("");
    } else {
      setShow("show");
    }
  };
  const showGiaoDien1 = () => {
    if (showGiaoDien == "show") {
      setShowGiaoDien("");
    } else {
      setShowGiaoDien("show");
    }
  };
  const showMau1 = () => {
    if (showMau == "show") {
      setShowMau("");
    } else {
      setShowMau("show");
    }
  };
  //   const showCoChu1 = () => {
  // if (showCoChu == "show") {
  //   setShowCoChu("");
  // } else {
  //   setShowCoChu("show");
  // }
  //   };
  const handleChange = (newCode) => {
    // console.log(newCode); // Xử lý mã nguồn khi người dùng thay đổi
    setCode(newCode);
  };
  return (
    <>
      <div id="app">
        {/* <font face="Segoe UI"> */}
        <div className="menu-wrapper">
          <ul className="menu-list clearfix">
            {/* DevMiniWorld icon */}
            <div
              id="devminiworldicon"
              style={{ fontFamily: "Consolas", color: "#d9d9d9" }}
            >
              DevMiniWorld
            </div>
            <svg
              id="laptopicon"
              width="2em"
              height="2em"
              viewBox="0 0 20 20"
              fill="#d8d8d8"
            >
              <path
                fillRule="evenodd"
                d="M15.5 4h-11a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5zm-11-1A1.5 1.5 0 003 4.5v7A1.5 1.5 0 004.5 13h11a1.5 1.5 0 001.5-1.5v-7A1.5 1.5 0 0015.5 3h-11z"
                clipRule="evenodd"
              />
              <path d="M2.81 13.758A1 1 0 013.78 13h12.44a1 1 0 01.97.758l.5 2A1 1 0 0116.72 17H3.28a1 1 0 01-.97-1.242l.5-2z" />
            </svg>
            {/* Giao diện */}
            <li className="menu-item">
              <div
                className="theme-wrapper menu-item-wrapper"
                id="themeWrapper"
              >
                <button
                  className="theme-btn menu-item-btn"
                  id="themeBtn"
                  style={{ fontFamily: "Segoe UI" }}
                  onClick={() => {
                    showGiaoDien1();
                  }}
                >
                  Giao diện
                </button>
                <div
                  className={"theme-inner menu-item-inner " + showGiaoDien}
                  id="themeInner"
                >
                  <ul className="theme-list">
                    <li
                      className="theme-item"
                      data-theme="textmate"
                      onClick={() => {
                        setGiaoDien("textmate");
                        setShowGiaoDien("");
                      }}
                    >
                      Textmate
                    </li>
                    <li
                      className="theme-item"
                      data-theme="monokai"
                      onClick={() => {
                        setGiaoDien("monokai");
                        setShowGiaoDien("");
                      }}
                    >
                      Monokai
                    </li>
                    <li
                      className="theme-item"
                      data-theme="eclipse"
                      onClick={() => {
                        setGiaoDien("eclipse");
                        setShowGiaoDien("");
                      }}
                    >
                      Eclipse
                    </li>
                    <li
                      className="theme-item"
                      data-theme="ambiance"
                      onClick={() => {
                        setGiaoDien("ambiance");
                        setShowGiaoDien("");
                      }}
                    >
                      Ambiance
                    </li>
                    <li
                      className="theme-item"
                      data-theme="sqlserver"
                      onClick={() => {
                        setGiaoDien("sqlserver");
                        setShowGiaoDien("");
                      }}
                    >
                      Sqlserver
                    </li>
                    <li
                      className="theme-item"
                      data-theme="github"
                      onClick={() => {
                        setGiaoDien("github");
                        setShowGiaoDien("");
                      }}
                    >
                      Github
                    </li>
                    <li
                      className="theme-item"
                      data-theme="solarized_light"
                      onClick={() => {
                        setGiaoDien("solarized_light");
                        setShowGiaoDien("");
                      }}
                    >
                      Solarized light
                    </li>
                    <li
                      className="theme-item"
                      data-theme="solarized_dark"
                      onClick={() => {
                        setGiaoDien("Solarized_dark");
                        setShowGiaoDien("");
                      }}
                    >
                      Solarized dark
                    </li>
                    <li
                      className="theme-item"
                      data-theme="tomorrow_night_bright"
                      onClick={() => {
                        setGiaoDien("tomorrow_night_bright");
                        setShowGiaoDien("");
                      }}
                    >
                      Tomorrow night bright
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/*Chèn hàm mẫu*/}
            <li className="menu-item">
              <div
                className="insert-wrapper menu-item-wrapper"
                id="insertWrapper"
              >
                <button
                  className="insert-btn menu-item-btn"
                  id="insertBtn"
                  style={{ fontfamily: "Segoe UI" }}
                  onClick={() => {
                    showMau1();
                  }}
                >
                  Hàm mẫu
                </button>
                <div
                  className={
                    "insert-inner menu-item-inner not-focus-hide " + showMau
                  }
                  id="insertInner"
                >
                  <div className="insert-inner-content">
                    {/* <!--Danh sách các nhóm hàm mẫu--> */}
                    <ul className="insert-list parent">
                      <li className="insert-item" data-insert-type="comment">
                        Ghi chú
                      </li>
                      <li className="insert-item" data-insert-type="variable">
                        Biến lưu trữ
                      </li>
                      <li className="insert-item" data-insert-type="func">
                        Hàm con
                      </li>
                      <li className="insert-item" data-insert-type="assert">
                        Câu điều kiện
                      </li>
                      <li className="insert-item" data-insert-type="loop">
                        Vòng lặp
                      </li>
                      <li className="insert-item" data-insert-type="table">
                        Bảng
                      </li>
                      <li className="insert-item" data-insert-type="error">
                        Kiểm soát lỗi
                      </li>
                      <li className="insert-item" data-insert-type="license">
                        Giấy phép và bản quyền
                      </li>
                    </ul>
                    {/* <!--Chức năng từng nhóm hàm mẫu--> */}
                    <ul
                      className="insert-list child"
                      data-parent-type="variable"
                      style={{ display: "none" }}
                    >
                      <li
                        className="insert-item"
                        data-insert-type="variable-global"
                      >
                        Biến toàn cục
                      </li>
                      <li
                        className="insert-item"
                        data-insert-type="variable-local"
                      >
                        Biến cục bộ
                      </li>
                      <li
                        className="insert-item"
                        data-insert-type="variable-mainglob"
                      >
                        Biến toàn cục chính
                      </li>
                    </ul>
                    <ul
                      className="insert-list child"
                      data-parent-type="func"
                      style={{ display: "none" }}
                    >
                      <li
                        className="insert-item"
                        data-insert-type="func-global"
                      >
                        Hàm con toàn cục
                      </li>
                      <li className="insert-item" data-insert-type="func-local">
                        Hàm con cục bộ
                      </li>
                      <li
                        className="insert-item"
                        data-insert-type="func-mainglob"
                      >
                        Hàm con toàn cục chính
                      </li>
                    </ul>
                    <ul
                      className="insert-list child"
                      data-parent-type="assert"
                      style={{ display: "none" }}
                    >
                      <li className="insert-item" data-insert-type="assert-if">
                        Câu điều kiện if
                      </li>
                      <li
                        className="insert-item"
                        data-insert-type="assert-ifelse"
                      >
                        Câu điều kiện if……else
                      </li>
                      <li
                        className="insert-item"
                        data-insert-type="assert-ifelseif"
                      >
                        Câu điều kiện if……elseif
                      </li>
                    </ul>
                    <ul
                      className="insert-list child"
                      data-parent-type="loop"
                      style={{ display: "none" }}
                    >
                      <li className="insert-item" data-insert-type="loop-for">
                        Vòng lặp for
                      </li>
                      <li className="insert-item" data-insert-type="loop-while">
                        Vòng lặp while
                      </li>
                      <li
                        className="insert-item"
                        data-insert-type="loop-repeatUntil"
                      >
                        Vòng lặp repeat
                      </li>
                    </ul>
                    <ul
                      className="insert-list child"
                      data-parent-type="table"
                      style={{ display: "none" }}
                    >
                      <li
                        className="insert-item"
                        data-insert-type="table-global"
                      >
                        Bảng toàn cục
                      </li>
                      <li
                        className="insert-item"
                        data-insert-type="table-local"
                      >
                        Bảng cục bộ
                      </li>
                      <li
                        className="insert-item"
                        data-insert-type="table-mainglob"
                      >
                        Bảng toàn cục chính
                      </li>
                    </ul>
                    <ul
                      className="insert-list child"
                      data-parent-type="error"
                      style={{ display: "none" }}
                    >
                      <li
                        className="insert-item"
                        data-insert-type="error-error"
                      >
                        error
                      </li>
                      <li
                        className="insert-item"
                        data-insert-type="error-assert"
                      >
                        assert
                      </li>
                      <li
                        className="insert-item"
                        data-insert-type="error-pcall"
                      >
                        pcall
                      </li>
                      <li
                        className="insert-item"
                        data-insert-type="error-xpcall"
                      >
                        xpcall
                      </li>
                    </ul>
                    <ul
                      className="insert-list child"
                      data-parent-type="comment"
                      style={{ display: "none" }}
                    >
                      <li
                        className="insert-item"
                        data-insert-type="comment-singleline"
                      >
                        Ghi chú thường
                      </li>
                      <li
                        className="insert-item"
                        data-insert-type="comment-multiline"
                      >
                        Ghi chú nhiều dòng
                      </li>
                    </ul>

                    <ul
                      className="insert-list child"
                      data-parent-type="license"
                      style={{ display: "none" }}
                    >
                      <li
                        className="insert-item"
                        data-insert-type="miniwolrdlice"
                      >
                        Mini World Block Art
                      </li>
                      <li
                        className="insert-item"
                        data-insert-type="devminiworldlice"
                      >
                        DevMiniWorld
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/*Biên tập scrit*/}
        <div id="codeEditor" className="code-editor">
          <AceEditor
            mode="lua"
            theme={giaoDien}
            value={code}
            onChange={handleChange}
            name="code-editor"
            width="100vw"
            height="100vh"
            setOptions={{
              enableLiveAutocompletion: true,
              enableSnippets: true,
            }}
            editorProps={{ $blockScrolling: true }}
          />
        </div>
        {/*Mặt nạ khi kéo trang API*/}
        <div id="devWikiMask" className="dev-wiki-mask"></div>
        {/*module của trang API*/}
        <div id="devWiki" className={"dev-wiki " + show}>
          <div id="devWikiBar" className="dev-wiki-bar"></div>
          <iframe
            src="https://developers.miniworldgame.com/wiki/"
            frameborder="0"
          ></iframe>
          <button
            type="button"
            id="toggleWikiBtn"
            className="btn toggle-wiki-btn"
            onClick={() => {
              showwiki();
            }}
          >
            API
          </button>
        </div>
      </div>
    </>
  );
}

export default WebEdit;
