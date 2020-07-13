import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
  }
  h1, h2 {
      font-family: 'Roboto';
  }
  button {
  }
  button:focus, input:focus  {
      outline: none;
  }
  *, *:before *:after {
    box-sizing:inherit;
  }
  ul, li, h1, h2, h3, p, button {
    margin: 0;
    padding:0;
  }
  ul {list-style: none;}
  .ant-modal-mask {
    background-color: rgba(255, 255, 255, 0.45) !important;
  }
  .ant-select {
    width: 100%;
  }
  .ant-form-item {
    margin-bottom: 10px !important;
  }
  .react-calendar-heatmap .color-scale-1 { 
    fill: #C4D4EB; 
  }
  .react-calendar-heatmap .color-scale-2 { 
      fill: #89A9D8; 
  }
  .react-calendar-heatmap .color-scale-3 {
      fill: #4E7FC4; 
  }
  .react-calendar-heatmap .color-scale-4 { 
      fill: #315992; 
  }

 .react-calendar-heatmap text {
    font-size: 10px;
    fill: #aaa;
  }
  
  .react-calendar-heatmap .react-calendar-heatmap-small-text {
    font-size: 5px;
  }
  
  .react-calendar-heatmap rect:hover {
    stroke: #555;
    stroke-width: 1px;
  }

  .react-calendar-heatmap .color-empty {
    fill: #eeeeee;
  }
  
  .react-calendar-heatmap .color-filled {
    fill: #8cc665;
  }

  .react-calendar-heatmap .color-github-0 {
    fill: #eeeeee;
  }
  .react-calendar-heatmap .color-github-1 {
    fill: #d6e685;
  }
  .react-calendar-heatmap .color-github-2 {
    fill: #8cc665;
  }
  .react-calendar-heatmap .color-github-3 {
    fill: #44a340;
  }
  .react-calendar-heatmap .color-github-4 {
    fill: #1e6823;
  }
`;
