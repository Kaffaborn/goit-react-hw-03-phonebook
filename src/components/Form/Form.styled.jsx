import css from 'styled-components';

export const FormEl = css.form`
display: flex;
flex-direction: column;

margin-left: 10px;
padding: 10px 10px;

width: 25%;

border: 1px solid black;
`;

export const Label = css.label`
display: flex;
flex-direction: column;
`;

export const Input = css.input`
margin-top: 5px;
margin-bottom: 5px;
padding-left: 5px

border: 1px solid gray;
`;

export const FormBtn = css.button`
width: 50%;

margin-top: 10px;
border: 1px solid gray;
background-color: lightgreen;

:disabled{
    background-color: #be4f62;
}
`;
