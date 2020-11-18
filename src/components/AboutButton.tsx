import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, ButtonProps } from "react-bootstrap";

const AboutButton: React.FC<React.HTMLAttributes<Button>> = ({ ...props }) => {
  return (
    <Button
      size={"sm"}
      style={{ backgroundColor: "white" }}
      as={() => (
        <FontAwesomeIcon
          icon={faQuestionCircle}
          color="#36773a"
          size={"2x"}
        ></FontAwesomeIcon>
      )}
    ></Button>
  );
};

export default AboutButton;
