import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton() {
  const [role, setRole] = React.useState('web');

  const handleChange = (event, newrole) => {
    setRole(newrole);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={role}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="individual" sx={{width: { sm: '9rem' }}}>Individual</ToggleButton>
      <ToggleButton value="hei" sx={{width: { sm: '9rem' }}}>HEI</ToggleButton>
      <ToggleButton value="fundingAgency" sx={{width: { sm: '9rem' }}}>Funding Agency</ToggleButton>
      <ToggleButton value="moderator" sx={{width: { sm: '9rem' }}}>Moderator</ToggleButton>
    </ToggleButtonGroup>
  );
}
