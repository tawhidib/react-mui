import { Typography } from "@mui/material";
import React from "react";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1" component="p" gutterBottom>
        This is heading 1
      </Typography>
      <Typography variant="h2" gutterBottom>
        This is heading 2
      </Typography>
      <Typography variant="h3">This is heading 3</Typography>
      <Typography variant="h4">This is heading 4</Typography>
      <Typography variant="h5">This is heading 5</Typography>
      <Typography variant="h6">This is heading 6</Typography>
      <Typography variant="subtitle1">This is subtitle 1</Typography>
      <Typography variant="subtitle2">This is subtitle 2</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus illo
        optio expedita mollitia eveniet autem, consectetur corporis facere,
        excepturi rem fuga! Illum maiores illo deserunt dolore eos sunt nisi
        ratione.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quod sunt
        deleniti molestiae tenetur explicabo ut quas! Rerum mollitia error iusto
        ad eaque vero commodi, nostrum dolores voluptatem delectus minus?
      </Typography>
      <Typography variant="button">my button</Typography>
      <Typography variant="caption">this is caption</Typography>
      <Typography variant="overline">this is overline</Typography>
      <Typography variant="inherit">this is inherit</Typography>
    </div>
  );
};

export default MuiTypography;
