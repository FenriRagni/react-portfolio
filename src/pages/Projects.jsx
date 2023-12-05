import Project from "../components/Project"

export default function Projects(){
  return (
    <>
    <div className="row mt-4">
        <Project title={"MySequel Adventure"} image="public/project2.jpg"/>
        <Project title={"Food Finder"} image="public/project1.jpg"/>
        <Project title={"Just Another Text Editor"} image="public/jate.jpg"/>
    </div>
    <div className="row mt-4">

    </div>
    </>
  )
}