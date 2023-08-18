"use client";
import { useRouter } from "next/navigation";

const BreadCrumb = ({page, title}) => {
    const router = useRouter();
  return (
    <div className="max-w-xs text-base font-semibold breadcrumbs">
      <ul>
        <li className="hover:cursor-pointer" onClick={() => router.back()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-4 h-4 mr-2 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            ></path>
          </svg>{" "}
          {page}
        </li>
        <li className="italic">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-4 h-4 mr-2 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            ></path>
          </svg>{" "}
          {title}
        </li>
      </ul>
    </div>
  );
};

export default BreadCrumb;
