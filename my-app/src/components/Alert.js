import React from "react";

function Alert(prop) {
    // const capital = (word)=>{
    //     const lower = word.toLowerCase()
    //     return lower.charAt(0).toUpperCase + lower.slice(1);
    // }

  return (
    <div style={{height: '50px'}}>
    {prop.alert && <div className={`alert alert-${prop.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{prop.alert.type}</strong> : {prop.alert.msg}
    </div>}
    </div>
  );
}

export default Alert;
