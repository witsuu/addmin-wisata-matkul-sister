import React, { useEffect, useState } from "react";
import { CheckCircle, Cancel } from "@material-ui/icons";
import Jquery from "jquery";

export const ModalSuccessAndFail = (props) => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    setStatus(props.status);
    Jquery("#" + props.id).modal("show");
    setTimeout(() => {
      Jquery("#" + props.id).modal("hide");
      Jquery(".modal-backdrop").remove();
      Jquery(document.body).removeClass("modal-open");
    }, 3000);
  }, [props]);

  return (
    <>
      <div className="modal fade" id={props.id} tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center">
              {status === 200 ? (
                <CheckCircle style={{ color: "Green", fontSize: "50px" }} />
              ) : (
                <Cancel style={{ color: "Red", fontSize: "50px" }} />
              )}
              <p className="mb-0">{props.message}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
