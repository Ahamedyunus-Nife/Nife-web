import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';

const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.primary.main,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "transparent",
  },
}));

export const HoverBoxTooltip = ({ children, title, ...props }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div onClick={handleClick}>
        <StyledTooltip
          title={title}
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          {...props}
        >
          {children}
        </StyledTooltip>
      </div>
    </ClickAwayListener>
  );
};
