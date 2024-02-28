import React, {ReactNode} from "react";
import {CustomImage} from "@/app/components/Image";

interface artCollectionProps {
    title: String,
    imagePaths: String[],
    imagePaths2: String[],
}


// @ts-ignore
export const ArtCollection: React.FC<artCollectionProps> = ({title, imagePaths, imagePaths2}) => {

    const populateCollection = ():ReactNode => {
        imagePaths.forEach((element) => {
            return (
                <CustomImage imagePath={element}></CustomImage>
            );
        });
        return;
    }

    let Title = "hello";
    return (
        <div className="flex flex-row  justify-around justify-items-center bg-background w-full">

        <div id="colOne" className="flex flex-col">
            <h1 className="text-normal-text font-Righteous font-bold text-6xl text-center underline underline-offset-4">{title}</h1>
            {imagePaths.map((Item, i) => <CustomImage key={i} imagePath={Item}></CustomImage> )}
        </div>
        <div id="colTwo" className="flex flex-col">
            {imagePaths2.map((Item, i) => <CustomImage key={i} imagePath={Item}></CustomImage> )}
        </div>
        </div>
)
    ;
}