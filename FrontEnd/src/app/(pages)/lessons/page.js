import React from "react"
import Image from "next/image";
import Link from 'next/link'
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";

const Lessons = (props) => {
    return (
        <div className="bg-[#080E1C]">
            {/* header area */}
            <Header />

            {/* lesson area */}
            <section className="lesson_area bg-[#0f172a]">
                <div className="container mx-auto px-3 lg:px-5 py-10">
                    <h1 className="text-2xl md:text-3xl xl:text-4xl font-heading font-black tracking-tight text-white">Lessons.
                    </h1>
                    <div className="lg:flex items-center justify-between">
                        <h3 className="text-xl font-heading font-black text-[#818cf8] ">Here&apos;s What&apos;s New</h3>
                        <h3
                            className="relative text-[#94a3b8] text-sm font-semibold inline-block
                            after:block after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-[#94a3b8]
                            after:transition-all after:duration-300 after:-translate-x-1/2
                            hover:after:w-full cursor-pointer">
                            Browse All Lessons <i className="fa-solid fa-arrow-right"></i>
                        </h3>
                    </div>

                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-3">
                        <div className="group">
                            <div className="rounded-lg">
                                {/* Image */}
                                <Image
                                    src="/assets/images/l8ki0nmyn1hzq2abxgsr2dor.jpg"
                                    alt="lesson thumbnail"
                                    width={400}
                                    height={225}
                                    className="rounded-lg w-full transform transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                                <p>Adding an Api to...</p>
                                <div className="flex gap-3">
                                    <h3>#6.4</h3>
                                    <h3>.</h3>
                                    <h3>Aug 07</h3>
                                </div>
                            </div>

                            <a href="" className="text-[#F0F4F8] text-ml font-bold">Advanced String Filtering</a>
                            <p className="text-[#94a3b8] text-xs">
                                In this lesson, we upgrade our course name filter to support both
                                simple strings and advanced object-based queries using VineJS&apos; union rule.
                                This allows users to specify not just what to search for, but how to search for it.
                            </p>
                        </div>

                        <div className="group">
                            <div className="rounded-lg">
                                <Image
                                    src="/assets/images/ygf96wnzf4jqhqzakllfr839.jpg"
                                    alt="advanced"
                                    width={400}
                                    height={225}
                                    className="rounded-lg w-full transform transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                                <p>Adding an Api to...</p>
                                <div className="flex gap-3">
                                    <h3>#6.0</h3>
                                    <h3>.</h3>
                                    <h3>Aug 05</h3>
                                </div>
                            </div>
                            <h1 className="text-[#F0F4F8] text-ml font-bold">Basic Course Search & Filter</h1>
                            <p className="text-[#94a3b8] text-xs">In this lesson, we&apos;ll add a new search endpoint for our
                                courses
                                and enable some basic filter functionality along with it. We&apos;ll be able to search by course
                                name
                                likeness, status, difficulty, and/or access level.</p>
                        </div>
                        <div className="group">
                            <div className="rounded-lg">
                                <Image
                                    src="/assets/images/tj98r5eavtlofjbycssde4l5.jpg"
                                    alt="advanced"
                                    width={400}
                                    height={225}
                                    className="rounded-lg w-full transform transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                                <p>Adding an Api to...</p>
                                <div className="flex gap-3">
                                    <h3>#5.9</h3>
                                    <h3>.</h3>
                                    <h3>Jul 31</h3>
                                </div>
                            </div>
                            <h1 className="text-[#F0F4F8] text-ml font-bold">Getting A Module&apos;s Lessons</h1>
                            <p className="text-[#94a3b8] text-xs">In this lesson, we&apos;ll remove our lesson&apos;s index method in
                                favor
                                of
                                a module method whose purpose will be to fetch a module&apos;s specific lessons in their stored
                                order.</p>
                        </div>
                        <div className="group">
                            <div className="rounded-lg">
                                <Image
                                    src="/assets/images/prsaa7xekw3w4bkda4t9af9d.jpg"
                                    alt="advanced"
                                    width={400}
                                    height={225}
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                                <p>Adding an Api to...</p>
                                <div className="flex gap-3">
                                    <h3>#5.8</h3>
                                    <h3>.</h3>
                                    <h3>Jul 25</h3>
                                </div>
                            </div>
                            <h1 className="text-[#F0F4F8] text-ml font-bold">Lesson Operations</h1>
                            <p className="text-[#94a3b8] text-xs">In this lesson, we&apos;ll implement most of the CRUD
                                functionality
                                for
                                our lessons, including creating, updating, deleting, and patching our lesson&apos;s tags. We&apos;ll
                                also
                                discuss why we&apos;ll treat lessons as a top-level resource.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Block 1 */}
                        <div className="md:flex md:gap-4 rounded-lg group cursor-pointer">
                            <Image
                                src="/assets/images/s0ugloteg5w4f8jzstwm0k7s.jpg"
                                alt="lesson"
                                width={248}
                                height={132}
                                className="md:w-62 md:h-33 w-full object-cover rounded-md flex-shrink-0 transform transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="space-y-2">
                                <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                                    <p>Adding an Api to an Ado...</p>
                                    <div className="flex items-center gap-2">
                                        <span>#5.7</span>
                                        <span>.</span>
                                        <span>Jul 25</span>
                                    </div>
                                </div>
                                <h1 className="text-[#F0F4F8] text-ml font-bold">Fixing Our ESLint Integration</h1>
                                <p className="text-[#94a3b8] text-xs">I ran into a ReferenceError and realized our ESLint
                                    wasn&apos;t
                                    working. In this lesson, we&apos;ll take a brief aside to fix the linting within our project
                                    so
                                    it works with ESLint v9.
                                </p>
                            </div>
                        </div>
                        {/* Block 2 */}
                        <div className="md:flex md:gap-4 rounded-lg group cursor-pointer">
                            <Image
                                src="/assets/images/p5zhmeapntdknkhqu9qqa042.jpg"
                                alt="lesson"
                                width={248}
                                height={132}
                                className="md:w-62 md:h-33 w-full object-cover rounded-md flex-shrink-0 transform transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="space-y-2">
                                <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                                    <p>Adding an Api to an Ado...</p>
                                    <div className="flex items-center gap-2">
                                        <span>#5.6</span>
                                        <span>.</span>
                                        <span>Jul 23</span>
                                    </div>
                                </div>
                                <h1 className="text-[#F0F4F8] text-ml font-bold">Getting Just Course Modules & Lessons</h1>
                                <p className="text-[#94a3b8] text-xs">
                                    In this lesson, we&apos;ll remove our GET module route, using the except method on our
                                    resource.
                                    Then we&apos;ll
                                    refactor to add a GetModules action.
                                </p>
                            </div>
                        </div>
                        {/* Block 3 */}
                        <div className="md:flex md:gap-4 rounded-lg group cursor-pointer">
                            <Image
                                src="/assets/images/rwo8i5iq2m399m8k81zlkp13.jpg"
                                alt="lesson"
                                width={248}
                                height={132}
                                className="md:w-62 md:h-33 w-full object-cover rounded-md flex-shrink-0 transform transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="space-y-2">
                                <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                                    <p>Adding an Api to an Ado...</p>
                                    <div className="flex items-center gap-2">
                                        <span>#5.5</span>
                                        <span>.</span>
                                        <span>Jul 15</span>
                                    </div>
                                </div>
                                <h1 className="text-[#F0F4F8] text-ml font-bold">Course Module Nested Resource</h1>
                                <p className="text-[#94a3b8] text-xs">In this lesson, we&apos;ll work on nested resourceful
                                    endpoints
                                    for
                                    our course modules. We&apos;ll add endpoints to create, update, patch, and deleting modules
                                    from
                                    a specific course.
                                </p>
                            </div>
                        </div>
                        {/* Block 4 */}
                        <div className="md:flex md:gap-4 rounded-lg group cursor-pointer">
                            <Image
                                src="/assets/images/rwo8i5iq2m399m8k81zlkp13.jpg"
                                alt="lesson"
                                width={248}
                                height={132}
                                className="md:w-62 md:h-33 w-full object-cover rounded-md flex-shrink-0 transform transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="space-y-2">
                                <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                                    <p>Adding an Api to an Ado...</p>
                                    <div className="flex items-center gap-2">
                                        <span>#5.5</span>
                                        <span>.</span>
                                        <span>Jul 15</span>
                                    </div>
                                </div>
                                <h1 className="text-[#F0F4F8] text-ml font-bold">Course Module Nested Resource</h1>
                                <p className="text-[#94a3b8] text-xs">In this lesson, we&apos;ll work on nested resourceful
                                    endpoints
                                    for
                                    our course modules. We&apos;ll add endpoints to create, update, patch, and deleting modules
                                    from
                                    a specific course.
                                </p>
                            </div>
                        </div>
                        {/* Block 5 */}
                        <div className="md:flex md:gap-4 rounded-lg group cursor-pointer">
                            <Image
                                src="/assets/images/drfexpqsk3n2pc4dbnzb17lr.jpg"
                                alt="lesson"
                                width={248}
                                height={132}
                                className="md:w-62 md:h-33 w-full object-cover rounded-md flex-shrink-0 transform transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="space-y-2">
                                <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                                    <p>Adding an Api to an Ado...</p>
                                    <div className="flex items-center gap-2">
                                        <span>#5.4</span>
                                        <span>.</span>
                                        <span>Jul 15</span>
                                    </div>
                                </div>
                                <h1 className="text-[#F0F4F8] text-ml font-bold">Updating A Course&apos;s Difficulty, Status, or
                                    Access
                                    Level</h1>
                                <p className="text-[#94a3b8] text-xs">
                                    In this lesson, we&apos;ll add a specific endpoint with the ability to patch a course&apos;s
                                    difficulty, status,
                                    or access level with a new value so our users have a way to update these without needing
                                    to
                                    send the
                                    entire course payload.
                                </p>
                            </div>
                        </div>
                        {/* Block 6 */}
                        <div className="md:flex md:gap-4 rounded-lg group cursor-pointer">
                            <Image
                                src="/assets/images/s7fxhq0ipnjtuxhwt60mxlx5.jpg"
                                alt="lesson"
                                width={248}
                                height={132}
                                className="md:w-62 md:h-33 w-full object-cover rounded-md flex-shrink-0 transform transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="space-y-2">
                                <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                                    <p>Adding an Api to an Ado...</p>
                                    <div className="flex items-center gap-2">
                                        <span>#5.3</span>
                                        <span>.</span>
                                        <span>Jul 15</span>
                                    </div>
                                </div>
                                <h1 className="text-[#F0F4F8] text-ml font-bold">Getting A Course&apos;s Details, Modules & Lessons
                                </h1>
                                <p className="text-[#94a3b8] text-xs">In this lesson, we wrap up the Courses controller by
                                    adding a
                                    show method that fetches all the key info for a single course. That includes its modules
                                    and
                                    lessons, all nicely organized and ready to use in your API response.</p>
                            </div>
                        </div>
                        {/* Block 7 */}
                        <div className="md:flex md:gap-4 rounded-lg group cursor-pointer">
                            <Image
                                src="/assets/images/ew1gbtzn09w7d2nshez1cy09.jpg"
                                alt="lesson"
                                width={248}
                                height={132}
                                className="md:w-62 md:h-33 w-full object-cover rounded-md flex-shrink-0 transform transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="space-y-2">
                                <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                                    <p>Adding an Api to an Ado...</p>
                                    <div className="flex items-center gap-2">
                                        <span>#5.2</span>
                                        <span>.</span>
                                        <span>Jun 27</span>
                                    </div>
                                </div>
                                <h1 className="text-[#F0F4F8] text-ml font-bold">Paginating our Course List</h1>
                                <p className="text-[#94a3b8] text-xs">In this lesson, we&apos;ll transform our courses list endpoint
                                    into
                                    a pagination endpoint. We&apos;ll check and validate our query string for a page and per page
                                    parameter that we&apos;ll then use to fetch pages of our courses.</p>
                            </div>
                        </div>
                        {/* Block 9 */}
                        <div className="rounded-lg md:flex md:gap-4 group cursor-pointer">
                            <Image
                                src="/assets/images/g7jwq9gct4us0z20wcens2rn.jpg"
                                alt="lesson"
                                width={248}
                                height={132}
                                className="md:w-62 md:h-33 w-full object-cover rounded-md flex-shrink-0 transform transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="space-y-2 mt-4 md:mt-0">
                                <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                                    <p>Adding an Api to an AdonisJS</p>
                                    <div className="flex items-center gap-2">
                                        <span>#5.1</span>
                                        <span>.</span>
                                        <span>Jun 27</span>
                                    </div>
                                </div>
                                <h1 className="text-[#F0F4F8] text-ml font-bold">Creating, Updating, and Deleting</h1>
                                <p className="text-[#94a3b8] text-xs">
                                    In this lesson, we&apos;ll add endpoints to allow creating,
                                    updating, and deleting courses from our API. We&apos;ll then use this to stub a number of
                                    test
                                    courses to give us wiggle room to play with our pagination.
                                </p>
                            </div>
                        </div>
                        {/* Block 10 */}
                        <div className="rounded-lg md:flex md:gap-4 group cursor-pointer">
                            <Image
                                src="/assets/images/hw2k2cijxxlnfmukrfm5ky8h.jpg"
                                alt="lesson"
                                width={248}
                                height={132}
                                className="md:w-62 md:h-33 w-full object-cover rounded-md flex-shrink-0 transform transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="space-y-2 mt-4 md:mt-0">
                                <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                                    <p>Adding an Api to an...</p>
                                    <div className="flex items-center gap-2">
                                        <span>#5.0</span>
                                        <span>.</span>
                                        <span>Jun 27</span>
                                    </div>
                                </div>
                                <h1 className="text-[#F0F4F8] text-ml font-bold">Listing Courses</h1>
                                <p className="text-[#94a3b8] text-xs">
                                    Our goal in this step is to add an endpoint that lists our
                                    courses. We&apos;ll then build upon this endpoint further with the ultimate goal of getting a
                                    list of paginated courses.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* series area */}
            {/* topics area */}

            <section className="container mx-auto px-6 py-8">
                <div className="bg-[rgba(255,255,255,0.02)] rounded-xl py-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        {/* left: filter chips */}
                        <div className="flex-1 min-w-0">
                            <div className="mb-3">
                                <p className="text-sm font-medium text-muted text-[#fff]">Filter by topic</p>
                            </div>

                            <div>
                                <ul id="filter-chips" className="flex flex-wrap gap-3">
                                    <li>
                                        <a href="#"
                                            className="bg-[#3730a3] chip inline-flex items-center px-4 py-2 rounded-lg text-[15px] font-medium
                                 hover:bg-[#334155] text-[#ffff]"
                                            aria-current="true">
                                            All Series Topics
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#"
                                            className="bg-[#1e293b] chip inline-flex items-center px-4 py-2 rounded-lg text-[15px] font-medium
                                 hover:bg-[#334155] text-[#ffff]">AdonisJS</a>
                                    </li>

                                    <li><a href="#"
                                        className="bg-[#1e293b] chip inline-flex items-center px-4 py-2 rounded-lg text-[15px] font-medium
                                 hover:bg-[#334155] text-[#ffff]">AlpineJS</a>
                                    </li>

                                    <li><a href="#"
                                        className="bg-[#1e293b] chip inline-flex items-center px-4 py-2 rounded-lg text-[15px] font-medium
                                 hover:bg-[#334155] text-[#ffff]">Authentication</a>
                                    </li>

                                    <li><a href="#"
                                        className="bg-[#1e293b] chip inline-flex items-center px-4 py-2 rounded-lg text-[15px] font-medium
                                 hover:bg-[#334155] text-[#ffff]">Authorization</a>
                                    </li>

                                    <li><a href="#"
                                        className="bg-[#1e293b] chip inline-flex items-center px-4 py-2 rounded-lg text-[15px] font-medium
                                 hover:bg-[#334155] text-[#ffff]">Components</a>
                                    </li>

                                    <li><a href="#"
                                        className="bg-[#1e293b] chip inline-flex items-center px-4 py-2 rounded-lg text-[15px] font-medium
                                 hover:bg-[#334155] text-[#ffff]">EdgeJS</a>
                                    </li>

                                    <li><a href="#"
                                        className="bg-[#1e293b] chip inline-flex items-center px-4 py-2 rounded-lg text-[15px] font-medium
                                 hover:bg-[#334155] text-[#ffff]">HttpContext</a>
                                    </li>

                                    <li><a href="#"
                                        className="bg-[#1e293b] chip inline-flex items-center px-4 py-2 rounded-lg text-[15px] font-medium
                                 hover:bg-[#334155] text-[#ffff]">InertiaJS</a>
                                    </li>

                                    {/* second row */}
                                    <li><a href="#"
                                        className="bg-[#1e293b] chip inline-flex items-center px-4 py-2 rounded-lg text-[15px] font-medium
                                 hover:bg-[#334155] text-[#ffff]">JavaScript</a>
                                    </li>

                                    <li><a href="#"
                                        className="bg-[#1e293b] chip inline-flex items-center px-4 py-2 rounded-lg text-[15px] font-medium
                                 hover:bg-[#334155] text-[#ffff]">Lucid</a>
                                    </li>

                                    <li><a href="#"
                                        className="bg-[#1e293b] chip inline-flex items-center px-4 py-2 rounded-lg text-[15px] font-medium
                                 hover:bg-[#334155] text-[#ffff]">Nuxt</a>
                                    </li>

                                    <li><a href="#"
                                        className="bg-[#1e293b] chip inline-flex items-center px-4 py-2 rounded-lg text-[15px] font-medium
                                 hover:bg-[#334155] text-[#ffff]">Services</a>
                                    </li>

                                    <li><a href="#"
                                        className="bg-[#1e293b] chip inline-flex items-center px-4 py-2 rounded-lg text-[15px] font-medium
                                 hover:bg-[#334155] text-[#ffff]">Tips</a>
                                    </li>

                                    <li><a href="#"
                                        className="bg-[#1e293b] chip inline-flex items-center px-4 py-2 rounded-lg text-[15px] font-medium
                                 hover:bg-[#334155] text-[#ffff]">Validator</a>
                                    </li>

                                    <li><a href="#"
                                        className="bg-[#1e293b] chip inline-flex items-center px-4 py-2 rounded-lg text-[15px] font-medium
                                 hover:bg-[#334155] text-[#ffff]">VueJS</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* right: sort area */}
                        <div className="shrink-0 w-full sm:w-auto flex items-start sm:items-center gap-3">
                            <div className="hidden sm:block">
                                <p className="text-sm text-muted mb-1">Sort by</p>
                            </div>

                            <div className="relative">
                                <select aria-label="Sort posts"
                                    className="appearance-none rounded-md px-3 py-2 text-sm font-medium bg-[rgba(255,255,255,0.02)]
                           border border-[rgba(255,255,255,0.04)] pr-8 focus:outline-none focus:ring-2 focus:ring-white/10">
                                    <option>Latest</option>
                                    <option>Most popular</option>
                                    <option>Oldest</option>
                                </select>

                                {/* caret icon */}
                                <svg className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="text-2xl md:text-3xl xl:text-4xl font-heading font-black tracking-tight text-white my-6">
                    Lessons.
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-8">
                    <div className="space-y-[20px]">
                        {/* Block 1 */}
                        <div className="md:flex md:gap-4 rounded-lg group cursor-pointer">
                            <Image
                                src="/assets/images/s0ugloteg5w4f8jzstwm0k7s.jpg"
                                alt="lesson"
                                width={320}
                                height={180}
                                className="md:w-80 md:h-45 w-full object-cover rounded-md flex-shrink-0 transform transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="flex flex-col justify-center space-y-2">
                                <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                                    <p>Adding an Api to an Ado...</p>
                                    <div className="flex items-center gap-2">
                                        <span>#5.7</span>
                                        <span>.</span>
                                        <span>Jul 25</span>
                                    </div>
                                </div>
                                <h1 className="text-[#F0F4F8] text-xl font-bold">Fixing Our ESLint Integration</h1>
                                <p className="text-[#94a3b8] text-[15px]">I ran into a ReferenceError and realized our ESLint
                                    wasn&apos;t
                                    working. In this lesson, we&apos;ll take a brief aside to fix the linting within our project
                                    so
                                    it works with ESLint v9.
                                </p>
                            </div>
                        </div>
                        {/* Block 2 */}
                        <div className="md:flex md:gap-4 rounded-lg group cursor-pointer">
                            <Image
                                src="/assets/images/p5zhmeapntdknkhqu9qqa042.jpg"
                                alt="lesson"
                                width={320}
                                height={180}
                                className="md:w-80 md:h-45 w-full object-cover rounded-md flex-shrink-0 transform transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="flex flex-col justify-center space-y-2">
                                <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                                    <p>Adding an Api to an Ado...</p>
                                    <div className="flex items-center gap-2">
                                        <span>#5.6</span>
                                        <span>.</span>
                                        <span>Jul 23</span>
                                    </div>
                                </div>
                                <h1 className="text-[#F0F4F8] text-xl font-bold">Getting Just Course Modules & Lessons</h1>
                                <p className="text-[#94a3b8] text-[15px]">
                                    In this lesson, we&apos;ll remove our GET module route, using the except method on our
                                    resource.
                                    Then we&apos;ll
                                    refactor to add a GetModules action.
                                </p>
                            </div>
                        </div>
                        {/* Block 3 */}
                        <div className="md:flex md:gap-4 rounded-lg group cursor-pointer">
                            <Image
                                src="/assets/images/rwo8i5iq2m399m8k81zlkp13.jpg"
                                alt="lesson"
                                width={320}
                                height={180}
                                className="md:w-80 md:h-45 w-full object-cover rounded-md flex-shrink-0 transform transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="flex flex-col justify-center space-y-2">
                                <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                                    <p>Adding an Api to an Ado...</p>
                                    <div className="flex items-center gap-2">
                                        <span>#5.5</span>
                                        <span>.</span>
                                        <span>Jul 15</span>
                                    </div>
                                </div>
                                <h1 className="text-[#F0F4F8] text-xl font-bold">Course Module Nested Resource</h1>
                                <p className="text-[#94a3b8] text-[15px]">In this lesson, we&apos;ll work on nested resourceful
                                    endpoints
                                    for
                                    our course modules. We&apos;ll add endpoints to create, update, patch, and deleting modules
                                    from
                                    a specific course.
                                </p>
                            </div>
                        </div>
                        {/* Block 4 */}
                        <div className="md:flex md:gap-4 rounded-lg group cursor-pointer">
                            <Image
                                src="/assets/images/rwo8i5iq2m399m8k81zlkp13.jpg"
                                alt="lesson"
                                width={320}
                                height={180}
                                className="md:w-80 md:h-45 w-full object-cover rounded-md flex-shrink-0 transform transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="flex flex-col justify-center space-y-2">
                                <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                                    <p>Adding an Api to an Ado...</p>
                                    <div className="flex items-center gap-2">
                                        <span>#5.5</span>
                                        <span>.</span>
                                        <span>Jul 15</span>
                                    </div>
                                </div>
                                <h1 className="text-[#F0F4F8] text-xl font-bold">Course Module Nested Resource</h1>
                                <p className="text-[#94a3b8] text-[15px]">In this lesson, we&apos;ll work on nested resourceful
                                    endpoints
                                    for
                                    our course modules. We&apos;ll add endpoints to create, update, patch, and deleting modules
                                    from
                                    a specific course.
                                </p>
                            </div>
                        </div>
                        {/* Block 5 */}
                        <div className="md:flex md:gap-4 rounded-lg group cursor-pointer">
                            <Image
                                src="/assets/images/drfexpqsk3n2pc4dbnzb17lr.jpg"
                                alt="lesson"
                                width={320}
                                height={180}
                                className="md:w-80 md:h-45 w-full object-cover rounded-md flex-shrink-0 transform transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="flex flex-col justify-center space-y-2">
                                <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                                    <p>Adding an Api to an Ado...</p>
                                    <div className="flex items-center gap-2">
                                        <span>#5.4</span>
                                        <span>.</span>
                                        <span>Jul 15</span>
                                    </div>
                                </div>
                                <h1 className="text-[#F0F4F8] text-xl font-bold">Updating A Course&apos;s Difficulty, Status, or
                                    Access
                                    Level</h1>
                                <p className="text-[#94a3b8] text-[15px]">
                                    In this lesson, we&apos;ll add a specific endpoint with the ability to patch a course&apos;s
                                    difficulty, status,
                                    or access level with a new value so our users have a way to update these without needing
                                    to
                                    send the
                                    entire course payload.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-white font-extrabold text-lg">From The Feed</h2>
                            <a href="#" className="text-sm text-slate-300">View Feed →</a>
                        </div>

                        <article className="bg-[#131C2C] border border-[#12202a] rounded-xl shadow-lg p-4 mb-3">
                            <div className="flex items-start gap-3">
                                <Image
                                    src="https://i.pravatar.cc/40?img=5"
                                    alt="avatar"
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 rounded-full ring-1 ring-[#0f1724]"
                                />

                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <h4 className="text-slate-300 text-sm font-medium">Abdelmadjid Cherfaoui</h4>
                                        <span className="ml-2 inline-flex items-center px-2 py-0.5 text-xs rounded bg-[#0f2036] text-indigo-300 border border-[#172336]">🏅</span>
                                        <span className="text-xs text-slate-400">· 2 months ago</span>
                                    </div>

                                    <h3 className="text-white text-lg font-extrabold leading-tight mb-2">EdgeJS extension for Zed code editor</h3>

                                    <p className="text-slate-300 text-sm leading-relaxed mb-3">Hello folks,<br /><br />Since I met AdonisJS, I adopted it to be my main framework for building web apps, I would love to thank the team behind it for this amazing work.<br /><br />Recently, I rediscovered Zed editor, which is the...</p>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-2 bg-[#1e293b] px-3 py-2 rounded-lg border border-[#15202a]">
                                                <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" /></svg>
                                                <span className="text-xs text-slate-300">5</span>
                                            </div>

                                            <div className="flex items-center gap-2 bg-[#1e293b] px-3 py-2 rounded-lg border border-[#15202a]">
                                                <svg className="w-4 h-4 text-slate-300" viewBox="0 0 20 20" fill="currentColor"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 015.656 5.656L10 18.657l-6.828-6.829a4 4 0 010-5.656z" /></svg>
                                                <span className="text-xs text-slate-300">1</span>
                                            </div>

                                            <div className="flex items-center gap-2 bg-[#1e293b] px-3 py-2 rounded-lg border border-[#15202a]">
                                                <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A2 2 0 0122 9.618V16a2 2 0 01-2 2h-6" /></svg>
                                                <span className="text-xs text-slate-300">1,721</span>
                                            </div>
                                        </div>

                                        <div>
                                            <span className="text-xs px-3 py-1 rounded-md bg-[#1e293b] border border-[#142233] text-slate-300 hover:bg-[#334155]">EdgeJS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="bg-[#131C2C] border border-[#12202a] rounded-xl shadow-lg p-4 mb-3">
                            <div className="flex items-start gap-3">
                                <Image
                                    src="https://i.pravatar.cc/40?img=5"
                                    alt="avatar"
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 rounded-full ring-1 ring-[#0f1724]"
                                />

                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <h4 className="text-slate-300 text-sm font-medium">Abdelmadjid Cherfaoui</h4>
                                        <span className="ml-2 inline-flex items-center px-2 py-0.5 text-xs rounded bg-[#0f2036] text-indigo-300 border border-[#172336]">🏅</span>
                                        <span className="text-xs text-slate-400">· 2 months ago</span>
                                    </div>

                                    <h3 className="text-white text-lg font-extrabold leading-tight mb-2">EdgeJS extension for Zed code editor</h3>

                                    <p className="text-slate-300 text-sm leading-relaxed mb-3">Hello folks,<br /><br />Since I met AdonisJS, I adopted it to be my main framework for building web apps, I would love to thank the team behind it for this amazing work.<br /><br />Recently, I rediscovered Zed editor, which is the...</p>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-2 bg-[#1e293b] px-3 py-2 rounded-lg border border-[#15202a]">
                                                <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" /></svg>
                                                <span className="text-xs text-slate-300">5</span>
                                            </div>

                                            <div className="flex items-center gap-2 bg-[#1e293b] px-3 py-2 rounded-lg border border-[#15202a]">
                                                <svg className="w-4 h-4 text-slate-300" viewBox="0 0 20 20" fill="currentColor"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 015.656 5.656L10 18.657l-6.828-6.829a4 4 0 010-5.656z" /></svg>
                                                <span className="text-xs text-slate-300">1</span>
                                            </div>

                                            <div className="flex items-center gap-2 bg-[#1e293b] px-3 py-2 rounded-lg border border-[#15202a]">
                                                <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A2 2 0 0122 9.618V16a2 2 0 01-2 2h-6" /></svg>
                                                <span className="text-xs text-slate-300">1,721</span>
                                            </div>
                                        </div>

                                        <div>
                                            <span className="text-xs px-3 py-1 rounded-md bg-[#1e293b] border border-[#142233] text-slate-300 hover:bg-[#334155]">EdgeJS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article className="bg-[#131C2C] border border-[#12202a] rounded-xl shadow-lg p-4 mb-3">
                            <div className="flex items-start gap-3">
                                <Image
                                    src="https://i.pravatar.cc/40?img=5"
                                    alt="avatar"
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 rounded-full ring-1 ring-[#0f1724]"
                                />

                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <h4 className="text-slate-300 text-sm font-medium">Abdelmadjid Cherfaoui</h4>
                                        <span className="ml-2 inline-flex items-center px-2 py-0.5 text-xs rounded bg-[#0f2036] text-indigo-300 border border-[#172336]">🏅</span>
                                        <span className="text-xs text-slate-400">· 2 months ago</span>
                                    </div>

                                    <h3 className="text-white text-lg font-extrabold leading-tight mb-2">EdgeJS extension for Zed code editor</h3>

                                    <p className="text-slate-300 text-sm leading-relaxed mb-3">Hello folks,<br /><br />Since I met AdonisJS, I adopted it to be my main framework for building web apps, I would love to thank the team behind it for this amazing work.<br /><br />Recently, I rediscovered Zed editor, which is the...</p>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-2 bg-[#1e293b] px-3 py-2 rounded-lg border border-[#15202a]">
                                                <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" /></svg>
                                                <span className="text-xs text-slate-300">5</span>
                                            </div>

                                            <div className="flex items-center gap-2 bg-[#1e293b] px-3 py-2 rounded-lg border border-[#15202a]">
                                                <svg className="w-4 h-4 text-slate-300" viewBox="0 0 20 20" fill="currentColor"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 015.656 5.656L10 18.657l-6.828-6.829a4 4 0 010-5.656z" /></svg>
                                                <span className="text-xs text-slate-300">1</span>
                                            </div>

                                            <div className="flex items-center gap-2 bg-[#1e293b] px-3 py-2 rounded-lg border border-[#15202a]">
                                                <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A2 2 0 0122 9.618V16a2 2 0 01-2 2h-6" /></svg>
                                                <span className="text-xs text-slate-300">1,721</span>
                                            </div>
                                        </div>

                                        <div>
                                            <span className="text-xs px-3 py-1 rounded-md bg-[#1e293b] border border-[#142233] text-slate-300 hover:bg-[#334155]">EdgeJS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>


            {/* footer area */}

            <Footer />
        </div>
    )
};

export default Lessons;
