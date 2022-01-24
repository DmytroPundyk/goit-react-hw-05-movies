import styled from "styled-components";


export const Form = styled.form`
   display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid #04139b;
  &:hover {
      border-color: #4755d3;
  }
`;

export const FormBtn = styled.button`
   display: inline-block;
  width: 50px;
  height: 50px;
  border: 0;
  cursor: pointer;
  background-color: #04139b;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
  background-color: #4755d3;
};
`;

export const SearchIcon = styled.div`
   width: 2.3em;
  height: 1.3em;
  color: #fff;
`;

export const FormInput = styled.input`
   display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
 
  &::placeholder {
  font: inherit;
  font-size: 24px;
  color: #4755d3;
}
`;
