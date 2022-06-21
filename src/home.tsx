import { FC } from "react";
import {
  CrayonAvatarVariant,
  CrayonAvatar,
  CrayonPaper,
  CrayonPaperBorderWidth,
  CrayonButton,
  CrayonPaperCornerRadius,
} from "@accelo/crayon-react";
export const Home: FC = () => {
  return (
    <>
      button (styled) - not working
      <CrayonButton>Test Paper</CrayonButton>
    
      paper (styled) - working
      <CrayonPaper
        borderWidth={CrayonPaperBorderWidth.SM}
        cornerRadius={CrayonPaperCornerRadius.ROUND}
        sx={{
          width: 50,
          height: 50,
        }}
      />

      avatar (unstyled) - working
      <CrayonAvatar name="My Name" variant={CrayonAvatarVariant.CIRCULAR} />
    </>
  );
};
