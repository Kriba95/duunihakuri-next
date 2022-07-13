Phone Calls

Kylie Minogue - Can't Get You Out Of My Head (Official Video)
Instrumental loop for phone calls


        <div className="md:space-y-2 mb-3">
                      <label className="text-xs font-semibold text-gray-600 py-2">
                        Yrityksen Logo
                        <abbr className="hidden" title="required">
                          *
                        </abbr>
                      </label>
                      <div className="flex items-center py-6">
                        <div className="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
                          <img
                            className="w-12 h-12 mr-4 object-cover"
                            src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
                            alt="Avatar Upload"
                          />
                        </div>
                        <label className="cursor-pointer ">
                          <span className="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">
                            Hae luettelosta
                          </span>
                          {/* <input type="file" className="hidden"  /> */}
                        </label>
                      </div>
                    </div>



                                 
                  <li className="hover:bg-gray-900  hover:text-gray-300  rounded py-1 px-2 ">
                    <Link href="/">
                      <a
                        onClick={() => {
                          destroyID();
                        }}
                        className="font-medium tracking-wide  hover:text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Kirjaudu Ulos
                      </a>
                    </Link>
                  </li>