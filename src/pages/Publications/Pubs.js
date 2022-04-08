import * as React from "react";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

function Pubs() {
  const title = <h1>Publications</h1>;
  const content1 = (
    <div>
      {`Alessio Sacco, Matteo Flocco, Flavio Esposito, and Guido Marchetto. 
          Owl: Congestion Control with Partially Invisible Networks via Reinforcement Learning", 
          In Proc. of IEEE International Conference on Computer Communications (INFOCOM 2021). 
          May 10-13, Virtual Conference.`}
    </div>
  );
  const content2 = (
    <div>
      {`Michele Berno, Flavio Esposito, Michele Rossi. Elastic Function Chain Control 
          for Edge Networks under Reconfiguration Delay and QoS Requirements". In Proc. of IEEE
           8th International Conference on Mobile Cloud (MobileCloud 2020). April 14-16, 2020, 
           Oxford, UK. Best Paper Award.Bibtex. Presentation by M. Berno.`}
    </div>
  );
  const content3 = (
    <div>
      {`Alessio Sacco, Matteo Flocco, Flavio Esposito, and Guido Marchetto. 
          Owl: Congestion Control with Partially Invisible Networks via Reinforcement Learning", 
          In Proc. of IEEE International Conference on Computer Communications (INFOCOM 2021). 
          May 10-13, Virtual Conference.`}
    </div>
  );
  const content4 = (
    <div>
      {`Chiara Contoli, Fabio Palumbo, Flavio Esposito, Franco Callegati and Antonio Pescape. 
          Flock: A Live Migration Protocol for SDN Controllers". In Proc. of The 5th IEEE Conference 
          on Network Functions Virtualization and Software Defined Networking (IEEE NFV-SDN 2019). 
          Dallas, TX, 12-14 Nov, 2019. Best Fast-track Paper Award`}
    </div>
  );
  const content5 = (
    <div>
      {`Chiara Contoli, Fabio Palumbo, Flavio Esposito, Franco Callegati and Antonio Pescape. 
          Flock: A Live Migration Protocol for SDN Controllers". In Proc. of The 5th IEEE Conference 
          on Network Functions Virtualization and Software Defined Networking (IEEE NFV-SDN 2019). 
          Dallas, TX, 12-14 Nov, 2019. Best Fast-track Paper Award`}
    </div>
  );
  return (
    <Root>
      {title}
      <Divider>
        <Chip label="CHIP" />
      </Divider>
      {content1}
      <Divider>
        <Chip label="CHIP" />
      </Divider>
      {content2}
      <Divider>
        <Chip label="CHIP" />
      </Divider>
      {content3}
      <Divider>
        <Chip label="CHIP" />
      </Divider>
      {content4}
      <Divider>
        <Chip label="CHIP" />
      </Divider>
      {content5}
    </Root>
  );
}
export default Pubs;
