import React from "react";
import Image from "next/image";

// @ts-ignore
export function CustomImage({imagePath}) {
    
    return (
       <Image src={imagePath} alt={"art piece"}
            className={"max-h-70dvh transition-opacity animate-fadeIn"}
       />
    );
}