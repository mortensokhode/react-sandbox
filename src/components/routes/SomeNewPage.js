import React from 'react';
import { StyledMain } from "../constExports/styledHeaderElements";
import {SOME_NEW_PAGE_TEXT} from '../constExports/textconstants';

const SomeNewPage = () => {
  return (
    <StyledMain>
      <h2>Some pretty new page</h2>
      <article>
        <p>{SOME_NEW_PAGE_TEXT}</p>
      </article>
    </StyledMain>
  );
};

export default SomeNewPage;
