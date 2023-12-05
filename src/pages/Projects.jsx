import Project from "../components/Project"

export default function Projects(){
  return (
    <>
    <div className="row mt-4">
        <Project title={"MySequel Adventure"} image="/dist/project2.jpg"/>
        <Project title={"Food Finder"} image="dist/project1.jpg"/>
        <Project title={"Just Another Text Editor"} image="dist/jate.jpg"/>
    </div>
    <div className="row mt-4">

    </div>
    </>
  )
}