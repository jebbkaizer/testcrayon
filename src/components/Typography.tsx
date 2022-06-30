import { CrayonTypography } from "@accelo/crayon-react";

export const Typography = () => {
  return (
    <>
      <CrayonTypography variant="h1" component="div">
        h1. Heading
      </CrayonTypography>
      <CrayonTypography variant="h2" component="div">
        h2. Heading
      </CrayonTypography>
      <CrayonTypography variant="h3" component="div">
        h3. Heading
      </CrayonTypography>
      <CrayonTypography variant="h4">h4. Heading</CrayonTypography>
      <CrayonTypography variant="h5">h5. Heading</CrayonTypography>
      <CrayonTypography variant="h6">h6. Heading</CrayonTypography>
      <CrayonTypography variant="subtitle1" component="div">
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </CrayonTypography>
      <CrayonTypography variant="subtitle2" component="div">
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </CrayonTypography>
      <CrayonTypography variant="body1">
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus
      </CrayonTypography>
      <CrayonTypography variant="body2">
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus
      </CrayonTypography>
      <CrayonTypography variant="link1">link1 text</CrayonTypography>
      <CrayonTypography variant="link2">link2 text</CrayonTypography>
      <CrayonTypography variant="button1">button1 text</CrayonTypography>
      <CrayonTypography variant="button2">button2 text</CrayonTypography>
      <CrayonTypography variant="buttonUnderline1">
        button underline 1 text
      </CrayonTypography>
      <CrayonTypography variant="buttonUnderline2">
        button underline 2 text
      </CrayonTypography>
      <CrayonTypography variant="overline">overline text</CrayonTypography>
      <CrayonTypography variant="caption">caption text</CrayonTypography>
    </>
  );
};
