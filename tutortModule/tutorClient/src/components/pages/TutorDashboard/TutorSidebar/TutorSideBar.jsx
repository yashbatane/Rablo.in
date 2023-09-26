import React, { useState } from "react";
import TutorSidePanel from "./TutorSidePanel/tutorSidePanel";
import TutorProposalBar from "./Proposalbar/tutorProposalBar";

const TutorSideBar = ({setCurrentStudent}) => {
  const [proposal, setProposal] = useState(false);
  return (
    <div>
      {proposal ? (
        <TutorProposalBar
          // setCurrentStudent={setCurrentStudent}
          proposal={proposal}
          setProposal={setProposal}
        />
      ) : (
        <TutorSidePanel
          setCurrentStudent={setCurrentStudent}
          proposal={proposal}
          setProposal={setProposal}
        />
      )}
    </div>
  );
};

export default TutorSideBar;
