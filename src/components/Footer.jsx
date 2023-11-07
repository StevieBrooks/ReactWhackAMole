import Button from "./Button"

export default function Footer() {
    return (

        <footer className="border flex justify-evenly">
            <Button btnTitle="Play" className="py-1 px-2 m-1 border" />
            <Button btnTitle="Reset" className="py-1 px-2 m-1 border" />
            <Button btnTitle="Repeat" className="py-1 px-2 m-1 border" />
            <Button btnTitle="Menu" className="py-1 px-2 m-1 border" />
        </footer>

    )
}