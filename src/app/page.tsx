import Link from "next/link";
import {ArtCollection} from "@/app/components/ArtCollection";

export default function Home() {

    return (
        <main
            className="flex flex-row min-h-screen justify-between overflow-y-hidden bg-eggshell items-center">
            <div className="flex flex-col h-90vh w-1/6 bg-eggshell2 justify-between">
                <h2 id="title" className="text-normal-text font-Righteous font-bold text-6xl text-center">
                    Sam Sparling
                </h2>
                <div className="flex flex-col items-center gap-5">
                    <Link href="#aboutMe"
                          className="text-normal-text font-Righteous font-bold text-2xl text-center hover:text-text-highlight transition-colors ease-in-out"
                    >About Me</Link>
                    <Link href="#FinishedPieces"
                       className="text-normal-text font-Righteous font-bold text-2xl text-center hover:text-text-highlight transition-colors ease-in-out">Finished
                        Pieces</Link>
                    <Link href="#Sketches"
                       className="text-normal-text font-Righteous font-bold text-2xl text-center hover:text-text-highlight transition-colors ease-in-out">Sketches</Link>
                    <Link href="#Sculptures"
                       className="text-normal-text font-Righteous font-bold text-2xl text-center hover:text-text-highlight transition-colors ease-in-out">Sculptures</Link>
                    <Link href="#ContactMe"
                       className="text-normal-text font-Righteous font-bold text-2xl text-center hover:text-text-highlight transition-colors ease-in-out">Contact Me</Link>
                </div>
                    <Link href="https://www.instagram.com/sp_art_ling?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                          className="text-normal-text font-Righteous font-bold text-2xl text-center flex flex-row justify-center items-center gap-2 hover:text-text-highlight hover:fill-text-highlight transition-colors ease-in-out" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                             className="bi bi-whatsapp max-h-8 max-w-8" viewBox="0 0 16 16" >
                            <path
                                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                        </svg>
                        sp_art_ling
                    </Link>
            </div>
            <div className="line w-2 min-h-screen bg-border-line"></div>
            <div
                className="max-h-screen w-5/6 justify-items-center items-center flex flex-col overflow-y-scroll sm:scroll-smooth overflow-x-hidden">
                <section id={"aboutMe"}
                         className="bg-gradient-to-b from-eggshell from-50% to-background to-100% w-full flex flex-row min-h-screen justify-center justify-items-center">
                    <img src="/Glove.png" className="max-h-70dvh relative translate-y-28" alt={"Portrait"}/>
                    <div className="flex flex-col gap-4 justify-center items-center w-2/5">
                        <h1 className="text-normal-text font-Righteous font-bold text-6xl text-center">Hi, I'm
                            Sam</h1>
                        <p className="text-normal-text font-Righteous font-bold text-2xl text-center">I do art
                            things. Here is a portfolio of my art things. I do art
                            things. Here is a portfolio of my art things. I do art
                            things. Here is a portfolio of my art things. I do art
                            things. Here is a portfolio of my art things. I do art
                            things. Here is a portfolio of my art things.</p>
                    </div>
                </section>
                <div className="min-h-40 w-full bg-background"/>
                <section id={"FinishedPieces"}
                         className="flex flex-row  justify-around justify-items-center bg-background w-full scroll-m-10">
                    <ArtCollection
                        title="Finished Pieces"
                        imagePaths={["/Glove.png", "/Glove.png", "/Glove.png", "/Glove.png", "/Glove.png", "/Glove.png", "/Glove.png"]}
                        imagePaths2={["/Glove.png", "/Glove.png", "/Glove.png", "/Glove.png", "/Glove.png", "/Glove.png", "/Glove.png"]}
                    />
                </section>
                <div className="min-h-40 w-full bg-background"/>
                <section id={"Sketches"} className="w-full  scroll-m-10">
                    <ArtCollection
                        title="Sketches"
                        imagePaths={["/Glove.png", "/Glove.png", "/Glove.png", "/Glove.png", "/Glove.png", "/Glove.png", "/Glove.png"]}
                        imagePaths2={["/Glove.png", "/Glove.png", "/Glove.png", "/Glove.png", "/Glove.png", "/Glove.png", "/Glove.png"]}
                    />
                </section>
                <div className="min-h-40 w-full bg-background"/>
                <section id={"Sculptures"}
                         className="flex flex-row  justify-around justify-items-center bg-background w-full scroll-m-10">
                    <ArtCollection
                        title="Sculptures"
                        imagePaths={["/Glove.png", "/Glove.png", "/Glove.png", "/Glove.png", "/Glove.png", "/Glove.png", "/Glove.png"]}
                        imagePaths2={["/Glove.png", "/Glove.png", "/Glove.png", "/Glove.png", "/Glove.png", "/Glove.png", "/Glove.png"]}
                    />
                </section>
                <section id={"ContactMe"}
                         className="flex flex-col min-h-screen justify-center justify-items-center bg-background w-full scroll-m-10">
                    <form>
                        <label className="text-normal-text font-Righteous font-bold text-2xl text-center">Name</label>
                        <input type="text" name="user_name" className="bg-yellow"/>
                        <label className="text-normal-text font-Righteous font-bold text-2xl text-center">Email</label>
                        <input type="email" name="user_email" className="bg-yellow"/>
                        <label className="text-normal-text font-Righteous font-bold text-2xl text-center">Message</label>
                        <textarea name="message" className="bg-yellow"/>
                    </form>
                </section>
            </div>
        </main>
    );
}
