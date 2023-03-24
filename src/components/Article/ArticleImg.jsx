
function ArticleImg({ img, title, description, color, visibility }) {
  return (
    <div className={img + " " + visibility + " " + color + " bg-center bg-no-repeat bg-cover flex flex-col items-center justify-end gap-4 overflow-hidden"}>

      {title && <h1 className="text-2xl font-extrabold font-Fraunces">{title}</h1>}
      {description &&
        <div className="mb-10 mx-4">
          <p className="font-semibold w-96 text-center font-Barlow max-lg:text-sm duration-200">{description}</p>
        </div>}
    </div>
  )
}

export default ArticleImg
