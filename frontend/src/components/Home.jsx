import { Phone, Mail } from "lucide-react";

const Home = () => {
  return (
    <div className="h-screen w-full bg-[#28292b] overflow-y-auto overflow-x-auto">
      {/* Workspace */}
      <div className="min-h-full min-w-fit flex justify-center items-start p-8 md:p-12">
        {/* A4 Paper */}
        <div
          className="
            a4-pages
            bg-white
            w-[210mm]
            min-h-[297mm]
            shrink-0
            shadow-[0_4px_25px_rgba(0,0,0,0.12)]
            px-[20mm]
            py-[20mm]
            text-black
          "
        >
          {/* Document Content */}
          <h1 className="text-4xl font-semibold text-center tracking-wide">
            Avansh Singh
          </h1>

          {/* Contact Information */}
          <div className="flex items-center justify-center gap-2 mt-4 text-sm flex-wrap">
            {/* Phone */}
            <a
              href="tel:+918707326165"
              className="flex items-center gap-2 text-black"
            >
              <Phone size={14} strokeWidth={1.8} />
              +91 8707326165
            </a>

            {/* Email */}
            <a
              href="mailto:avashsingh2017@gmail.com"
              className="flex items-center gap-2 text-black"
            >
              <Mail size={14} strokeWidth={1.8} />
              <p className="font-medium">avanshsingh2017@gmail.com</p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/avansh-singh-90053b24a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-700"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
              >
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM3.555 20.452h3.564V9H3.555v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              linkedin/AvanshSingh
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/AvanshChauhan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-700"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              github/AvanshChauhan
            </a>
          </div>
          <h1 className="mt-4 font-bold tracking-wide">EDUCATION</h1>
          {/* Divider */}
          <hr className="border-black" />
          <div className="flex justify-between">
            <p className="font-bold">
              Ambalika Institute of Management and Science, Lucknow{" "}
            </p>
            <h1>July 2022 – 2026</h1>
          </div>
          <div className="flex justify-between">
            <p className="">
              Bachelor of Technology in Computer Science and Engineering (AI-ML)
            </p>
            <h1>CGPA: 7.6/10</h1>
          </div>
          <h1 className="mt-4 font-bold text-lg tracking-wide">
            Technical Skills
          </h1>
          <hr className="border-black" />

          <div className="flex flex-col  text-sm">
            <div className="grid grid-cols-[140px_1fr] gap-4">
              <p className="font-bold">Languages</p>
              <p>JavaScript, C++, Python</p>
            </div>

            <div className="grid grid-cols-[140px_1fr] gap-4">
              <p className="font-bold">Frontend</p>
              <p>React.js, Next.js, HTML5, CSS3, Tailwind CSS, GSAP</p>
            </div>

            <div className="grid grid-cols-[140px_1fr] gap-4">
              <p className="font-bold">Backend</p>
              <p>Node.js, Express.js, RESTful APIs, Socket.io, Nodemailer</p>
            </div>

            <div className="grid grid-cols-[140px_1fr] gap-4">
              <p className="font-bold">Databases</p>
              <p>MongoDB, Mongoose, SQL, PostgreSQL</p>
            </div>

            <div className="grid grid-cols-[140px_1fr] gap-4">
              <p className="font-bold">AI/LLMs</p>
              <p>
                LangChain, LangGraph, Google Gemini API, Mistral AI, Tavily
                Search API
              </p>
            </div>

            <div className="grid grid-cols-[140px_1fr] gap-4">
              <p className="font-bold">Authentication</p>
              <p>JWT, bcryptjs, HTTP-only Cookies</p>
            </div>

            <div className="grid grid-cols-[140px_1fr] gap-4">
              <p className="font-bold">Tools</p>
              <p>Git, GitHub, Postman, Figma, ImageKit</p>
            </div>

            <div className="grid grid-cols-[140px_1fr] gap-4">
              <p className="font-bold">Deployment</p>
              <p>Vercel, Render, Netlify</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
