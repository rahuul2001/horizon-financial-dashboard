import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = {
    firstName:"Rahul", 
    lastName:"Tangsali",
    email:"tangsali@usc.edu"
  }

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subText="Access and manage your account and transactions efficiently."
          />

          {/* balance box to display the total amount */}

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />

        </header>

        {/* component for recent transactions on right hand side */}
        RECENT TRANSACTIONS
        

      </div>

      <RightSideBar 
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.50}, { currentBalance:500 }]}
      />
    </section>
  )
}

export default Home