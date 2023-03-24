import LearnMore from "./LearnMore";

function ArticleText({ title, description }) {
  return (
    <div>
      <div className="m-10 mx-20 my-40 flex flex-col gap-5">
        <h2 className="font-Fraunces text-3xl font-bold">{title}</h2>
        <p className="font-Barlow font-semibold text-MyNeutral-DarkGrayishBlue">{description}</p>
        <LearnMore></LearnMore>
      </div>
      
    </div>
  )
}

export default ArticleText
