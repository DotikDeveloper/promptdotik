import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidden"/>
            <span className="orange_gradient text-center"> AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">
            <b>Promptdotik</b> is an open-source app that allows users to share their prompts with the world. 
            Create and share prompts with your friends!
        </p>

        <Feed/>
    </section>
  )
}

export default Home;