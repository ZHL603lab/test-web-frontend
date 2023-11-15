import Link from "next/link";

const navigation = [
  { name: "首页", href: "/" },
  { name: "在线刷题", href: "/Practice" },
  { name: "关于", href: "/About"},
];

export default function NavBar() {
  return (
    <>
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="/vercel.svg" alt="" />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-500"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-4">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            登录
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            注册
          </a>
        </div>
      </nav>
    </>
  );
}
