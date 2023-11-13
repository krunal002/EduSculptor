import "./entityListing.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import EntityDetails from "../EntityDetails/entityDetails";
// import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const EntityListing = ({ entity, data }) => {
  const navigate = useNavigate();
  const [entityData, setEntityData] = useState({});

  useEffect(() => {
    if (data?.length > 0) {
      setEntityData(data[0]);
    }
  }, [data]);

  const handleClick = (id) => {
    setEntityData(data?.find((item) => item?._id === id) || null);
  };

  return (
    <div>
      <div className="entity-container">
        <div className="primary-listing-container">
          <div className="entity-button-container">
            <Button
              variant="contained"
              sx={{ width: "90%" }}
              onClick={() => navigate(`/student-form`, { state: { entity } })}
            >
              Add {entity}
            </Button>
          </div>
          {data?.map((entity) => (
            <div
              key={entity?._id}
              className={
                entity?._id === entityData?._id
                  ? "active-listing-container"
                  : "listing-container"
              }
              onClick={() => handleClick(entity?._id)}
            >
              <img
                src="https://img.freepik.com/premium-vector/people-ribbon-logo-modern-leadership-logo-human-charity-logo_327835-2463.jpg"
                alt="profile"
                className="profile-pic-container"
              />
              <p className="name">{entity?.name}</p>
            </div>
          ))}
        </div>
        <div className="entityDetails-container">
          <EntityDetails entity={entity} data={entityData} />
        </div>
      </div>
    </div>
  );
};

export default EntityListing;
