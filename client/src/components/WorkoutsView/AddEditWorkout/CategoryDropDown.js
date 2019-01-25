import React, { useContext } from "react";
import { Store } from "../../../index";
import { ValueInput, StyledButton } from "./Style";

const CategoryDropDown = props => {
  const { state, dispatch } = useContext(Store);

  const handleChange = e => {
    const value = e.target.value;

    dispatch({
      type: "UPDATE_SELECTED_CATEGORY",
      payload: value
    });
  };

  return (
    <>
      <select onChange={e => handleChange(e)} value={state.selectedCategory}>
        <option value={"default"}>--- Select a Category ---</option>
        {state.category &&
          state.category.map((category, index) => (
            <option value={category.id} key={index}>
              {category.name}
            </option>
          ))}
        <option value={"addCategory"}>--- Add a Category ---</option>
      </select>

      {/* {category === 'addCategory' ? (
          <>
            <ValueInput
              value={addCategory}
              type="text"
              placeholder="Category Name"
              onChange={e => setAddCategory(e.target.value)}
            />
            <StyledButton type="button" onClick={e => submitCategory(e)}>
              Add Category
            </StyledButton>
          </>
      ) : null} */}
    </>
  );
};

export default CategoryDropDown;
