import { Typography } from "@material-tailwind/react";
export default function Footer() {
  return (
    <>
      <footer className="w-full bg-white rounded-xl p-6">
        <hr className="my-8 border-solid border-collapse-50" />
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
          <ul className="flex flex-wrap items-stretch gap-y-2 gap-x-4">
            <li>
              <Typography>By</Typography>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-suit-heart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
              </svg>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Created with
              </Typography>
            </li>
          </ul>
        </div>

        <Typography color="blue-gray" className="text-center font-normal">
          &copy; AHM
        </Typography>
      </footer>
    </>
  );
}
{
  /* <footer className="w-full bg-white p-8 rounded-md">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-3 gap-x-10 bg-white text-center md:justify-between">
          <hr className="my-8 border-blue-gray-50" />
          <Typography color="blue-gray" className="text-center ">
            Created With
           
          </Typography>
         
          by
          {/* </Typography>
          <Typography className="text-xl">&copy;AHM</Typography>
          <i>Contributed with raven & Squirrel </i> 
        </div>
      </footer>*/
}
