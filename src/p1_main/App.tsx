import React, { useState } from 'react'
import './App.css'
import { v1 } from 'uuid'
import Plan, { PlanType } from '../p2_features/f1_plan/Plan'

function App() {
    const [plan, setPlan] = useState<PlanType>({
        _id: v1(),
    })

    return (
        <div className="App">
            plan xxx
            <Plan
                p={plan}
                rerender={() => setPlan({ ...plan })}
                marginLeft={4}
            />
        </div>
    )
}

export default App
