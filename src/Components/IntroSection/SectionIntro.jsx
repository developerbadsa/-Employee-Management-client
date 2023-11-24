

const SectionIntro = ({title, description}) => {
const titleArr = title.split(" ")
      return (
            <div className="max-w-xl mx-auto">
                              <div className="text-center ">
                                    <div className="relative flex flex-col items-center">
                                          <div className="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10">
                                                {title}
                                          </div>
                                          <h1 className="text-5xl font-bold dark:text-white">
                                                {" "}
                                               { titleArr[0]} <span className="text-blue-500">  {titleArr[1]}
                                                </span>{" "}
                                          </h1>
                                          <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                                                <div className="flex-1 h-2 bg-blue-200"></div>
                                                <div className="flex-1 h-2 bg-blue-400"></div>
                                                <div className="flex-1 h-2 bg-blue-600"></div>
                                          </div>
                                    </div>
                                    <p className="mb-16 text-base text-center text-gray-500">{description}</p>
                              </div>
                        </div>
      );
};

export default SectionIntro;