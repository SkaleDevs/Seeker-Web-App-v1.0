import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownDropCircle from "mdi-material-ui/ArrowDownDropCircle";

export default function Dropdown(props) {
  return (
    <>
      <Accordion sx={{ background: "#9E69FD" }}>
        <AccordionSummary
          expandIcon={<ArrowDownDropCircle sx={{ color: "white" }} />}
          sx={{ borderBottom: 2, borderColor: "divider" }}
        >
          <Typography color="white">{props.authority}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{overflow: {xs: 'auto' }}}>{props.children}</AccordionDetails>
      </Accordion>
    </>
  );
}
