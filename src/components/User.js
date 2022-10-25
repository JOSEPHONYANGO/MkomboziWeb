import Search from "./Search";
import AddUser from "./AddUser";
import upchevron from "../imgs/up.png";
import downchevron from "../imgs/down.png";
import menu from "../imgs/menu.png";
import right from "../imgs/right.png";
import left from "../imgs/left.png";

function User() {
  return (
    <div className="py-6 pl-4 pr-12">
      <div className="flex justify-between items-center">
        <Search />
        <AddUser />
      </div>
      <div className="mt-8  pt-6 pb-10 w-full bg-white shadow-sm rounded-lg">
        <div className="flex justify-center ">
          <table class="table-fixed w-11/12 border-collapse">
            <thead>
              <tr class="border-b border=[#DEE2E6]">
                <th class="font-sans text-left py-4 font-medium text-sm text-[#8392AB]">
                  <span>NAME</span>
                </th>
                <th class="font-sans text-left py-4 font-medium text-sm text-[#8392AB]">
                  EMAIL
                </th>
                <th class="font-sans text-left py-4 font-medium text-sm text-[#8392AB]">
                  PHONE
                </th>
                <th class="font-sans text-left py-4 font-medium text-sm text-[#8392AB]">
                  ROLE
                </th>
                <th class="font-sans text-left py-4 font-medium text-sm text-[#8392AB]"></th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border=[#DEE2E6]">
                <td class="font-sans text-left py-4 text-sm  text-[#8392AB]">
                  Stephanie Mboya
                </td>
                <td class="font-sans text-left py-4 text-sm  text-[#8392AB]">
                  stephaniemboya@gmail.com
                </td>
                <td class="font-sans text-left py-4 text-sm  text-[#8392AB]">
                  +254712365987
                </td>
                <td class="font-sans text-left py-4 text-sm  text-[#8392AB]">
                  SuperAdmin
                </td>
                <td class="font-sans text-left py-4 text-sm  text-[#8392AB]">
                  <img src={menu} className="h-3.5 cursor-pointer" />
                </td>
              </tr>
              <tr class="border-b border=[#DEE2E6]">
                <td class="font-sans text-left py-4 text-sm  text-[#8392AB]">
                  Stephanie Mboya
                </td>
                <td class="font-sans text-left py-4 text-sm  text-[#8392AB]">
                  stephaniemboya@gmail.com
                </td>
                <td class="font-sans text-left py-4 text-sm  text-[#8392AB]">
                  +254712365987
                </td>
                <td class="font-sans text-left py-4 text-sm  text-[#8392AB]">
                  SuperAdmin
                </td>
                <td class="font-sans text-left py-4 text-sm  text-[#8392AB]">
                  <img src={menu} className="h-3.5 cursor-pointer" />
                </td>
              </tr>
              <tr class="border-b border=[#DEE2E6]">
                <td class="font-sans text-left py-4 text-sm  text-[#8392AB]">
                  Stephanie Mboya
                </td>
                <td class="font-sans text-left py-4 text-sm  text-[#8392AB]">
                  stephaniemboya@gmail.com
                </td>
                <td class="font-sans text-left py-4 text-sm  text-[#8392AB]">
                  +254712365987
                </td>
                <td class="font-sans text-left py-4 text-sm  text-[#8392AB]">
                  SuperAdmin
                </td>
                <td class="font-sans text-left py-4 text-sm  text-[#8392AB]">
                  <img src={menu} className="h-3.5 cursor-pointer" />
                </td>
              </tr>
              <tr class="border-b border=[#DEE2E6]">
                <td class="font-sans text-left py-4 text-sm  text-[#8392AB]">
                  Stephanie Mboya
                </td>
                <td class="font-sans text-left py-4 text-sm  text-[#8392AB]">
                  stephaniemboya@gmail.com
                </td>
                <td class="font-sans text-left py-4 text-sm  text-[#8392AB]">
                  +254712365987
                </td>
                <td class="font-sans text-left py-4 text-sm  text-[#8392AB]">
                  SuperAdmin
                </td>
                <td class="font-sans text-left py-4 text-sm  text-[#8392AB]">
                  <img src={menu} className="h-3.5 cursor-pointer" />
                </td>
              </tr>
              <tr class="border-b border=[#DEE2E6]">
                <td class="font-sans text-left py-4 text-sm  text-[#8392AB]">
                  Stephanie Mboya
                </td>
                <td class="font-sans text-left py-4 text-sm  text-[#8392AB]">
                  stephaniemboya@gmail.com
                </td>
                <td class="font-sans text-left py-4 text-sm  text-[#8392AB]">
                  +254712365987
                </td>
                <td class="font-sans text-left py-4 text-sm  text-[#8392AB]">
                  SuperAdmin
                </td>
                <td class="font-sans text-left py-4 text-sm  text-[#8392AB]">
                  <img src={menu} className="h-3.5 cursor-pointer" />
                </td>
              </tr>
              <tr class="border-b border=[#DEE2E6]">
                <td class="font-sans text-left py-4 text-sm  text-[#8392AB]">
                  Stephanie Mboya
                </td>
                <td class="font-sans text-left py-4 text-sm  text-[#8392AB]">
                  stephaniemboya@gmail.com
                </td>
                <td class="font-sans text-left py-4 text-sm  text-[#8392AB]">
                  +254712365987
                </td>
                <td class="font-sans text-left py-4 text-sm  text-[#8392AB]">
                  SuperAdmin
                </td>
                <td class="font-sans text-left py-4 text-sm  text-[#8392AB]">
                  <img src={menu} className="h-3.5 cursor-pointer" />
                </td>
              </tr>
              <tr class="border-b border=[#DEE2E6]">
                <td class="font-sans text-left py-4 text-sm  text-[#8392AB]">
                  Stephanie Mboya
                </td>
                <td class="font-sans text-left py-4 text-sm  text-[#8392AB]">
                  stephaniemboya@gmail.com
                </td>
                <td class="font-sans text-left py-4 text-sm  text-[#8392AB]">
                  +254712365987
                </td>
                <td class="font-sans text-left py-4 text-sm  text-[#8392AB]">
                  SuperAdmin
                </td>
                <td class="font-sans text-left py-4 text-sm  text-[#8392AB]">
                  <img src={menu} className="h-3.5 cursor-pointer" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-between mt-14 px-12">
          <div>
            <p className="text-sm	m-0 text-[#8392AB]">
              Showing 1 to 10 of 57 entries
            </p>
            <p className="flex mt-4">
              <span className="cursor-pointer border-2	rounded	flex justify-between items-center text-sm	mr-1 text-[#8392AB]">
                10
                <img className="w-4	h-4 mx-1" src={downchevron} />
              </span>
              <span className="text-sm text-[#8392AB]">entries per page</span>
            </p>
          </div>
          <div className="flex">
            <a href="#">
              <img
                className="mr-1 w-8	border rounded-full shadow-sm"
                src={left}
              />
            </a>
            <a
              className="shadow-sm mx-1 pt-1 text-center text-sm	w-8 h-8 border rounded-full text-[#8392AB]"
              href="#"
            >
              1
            </a>
            <a
              className="shadow-sm mx-1 pt-1 text-center text-sm	w-8 h-8 border rounded-full text-[#8392AB]"
              href="#"
            >
              2
            </a>
            <a
              className="shadow-sm mx-1 pt-1 text-center text-sm	w-8 h-8 border rounded-full text-[#8392AB]"
              href="#"
            >
              3
            </a>
            <a
              className="shadow-sm mx-1 pt-1 text-center text-sm	w-8 h-8 border rounded-full text-[#8392AB]"
              href="#"
            >
              4
            </a>
            <a
              className="shadow-sm mx-1 pt-1 text-center text-sm	w-8 h-8 border rounded-full text-[#8392AB]"
              href="#"
            >
              5
            </a>
            <a
              className="shadow-sm mx-1 pt-1 text-center text-sm	w-8 h-8 border rounded-full text-[#8392AB]"
              href="#"
            >
              6
            </a>
            <a href="#">
              <img
                className="shadow-sm ml-1 w-8	border rounded-full"
                src={right}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
