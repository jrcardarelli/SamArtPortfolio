import React from "react";

// @ts-ignore
export function CustomImage({imagePath}) {
    
    return (
       <img src={imagePath} alt={"art piece"}
            className={"max-h-70dvh transition-opacity animate-fadeIn"}
       />
    );
}