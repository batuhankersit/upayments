import type {NextPage} from 'next'
import Link from "next/link";

const Header: NextPage = () => {
    return (
      <header className={"px-12"}>
          <div className={"my-4 py-4 bg-white rounded-lg drop-shadow-lg flex justify-between px-4"}>
              <Link href={"/"}><a className={"font-bold"}>UPayments Store</a></Link>
              <button className={"font-bold"}>Register</button>
          </div>
      </header>
    )
}

export default Header
