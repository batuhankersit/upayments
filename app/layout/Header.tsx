import type { NextPage } from 'next'

const Header: NextPage = () => {
    return (
      <header className={"px-12"}>
          <div className={"my-4 py-4 bg-white rounded-lg drop-shadow-lg flex justify-between px-4"}>
              <span className={"font-bold"}>UPayments Store</span>
              <button className={"font-bold"}>Register</button>
          </div>
      </header>
    )
}

export default Header
