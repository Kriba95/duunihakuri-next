export const Statistic = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
          <div className="text-center md:border-r">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">1t</h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Näyttökertoja
            </p>
          </div>
          <div className="text-center md:border-r">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">7t</h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Ilmoituksia
            </p>
          </div>
          <div className="text-center md:border-r">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">0.1t</h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Käyttäjiä
            </p>
          </div>
          <div className="text-center">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">5t</h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Yrityksiä
            </p>
          </div>
        </div>
      </div>
    );
  };