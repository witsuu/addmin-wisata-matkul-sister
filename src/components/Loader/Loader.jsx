import React from "react";
import Loader from "react-loader-spinner";
import { usePromiseTracker } from "react-promise-tracker";

export const Loading = (props) => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    <div>
      {promiseInProgress && (
        <div className="w-100 text-center">
          <Loader
            type={props.type}
            color={props.color}
            height={props.height}
            width={props.width}
            secondaryColor={props.secondaryColor}
            radius={props.radius}
          />
        </div>
      )}
    </div>
  );
};

export const LoadingFull = (props) => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    <>
      {promiseInProgress && (
        <div className="layer">
          <div className="card">
            <div className="card-body">
              <div className="w-100 text-center">
                <Loader
                  type={props.type}
                  color={props.color}
                  height={props.height}
                  width={props.width}
                  secondaryColor={props.secondaryColor}
                  radius={props.radius}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
