import {Scroll} from "@react-three/drei"

const Section = (props) =>{
    return(
        <section
            className="h-screen flex flex-col justify-center p-10"
        >
            <div className="w-1/2 flex items-center justify-center">
                <div className="max-w-sm w-full">
                    <div className="bg-white rounded-lg px-8 py-12">
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    )
}

export const Overlay = () =>{
    return (
        <Scroll html>
            <Section>
                <h1 className="font-serif text-2xl">WELCOME</h1>
                <p className="text-gray-500">WELCOME TO MY LIFE</p>
                <p className="mt-3">I KNOW</p>
                <ul className="leading-9">
                    <li>I LOVE CODE </li>
                    <li>I NEED CODE </li>
                    <li>I WANT CODE </li>
                </ul>
                <p className="animate-bounce mt-6">↓</p>
            </Section>
            <Section>
                <h1 className="font-semibold font-serif text-2xl">ANYWAY</h1>
                <p className="text-gray-500">I DONT HAVE OTHER THINGS TO DO</p>
                <p className="mt-3">I KNOW</p>
                <ul className="leading-9">
                    <li>BORING? </li>
                    <li>I DO NOT THINK SO </li>
                    <li>I LOVE THAT </li>
                    <li>JUST CAUSE I LOVE IT </li>
                </ul>
                <p className="animate-bounce mt-6">↓</p>
            </Section>
            <Section>
                <h1 className="font-serif text-2xl">MY FRIEND</h1>
                <p className="text-gray-500">I AM VERY HAPPY IF YOU CAN HIRE ME</p>
                <p className="mt-6 p-3 bg-slate-200 rounded-lg">GLAD TO SEE YOU</p>
            </Section>
        </Scroll>
    )
}