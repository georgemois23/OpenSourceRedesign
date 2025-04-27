import { Tooltip } from '@chakra-ui/react';
import {InfoIcon} from '@chakra-ui/icons';
export const ToolTipUnderConstruction = ({where}) => {
    return(
<Tooltip hasArrow  label="Σελίδα υπό κατασκευή" bg={'brand.dark.secondary'} color={'brand.dark.primary'} aria-label='A tooltip'>
    <InfoIcon pb={'0.5'} fontSize={'18px'} /> {where}
</Tooltip>
    );}