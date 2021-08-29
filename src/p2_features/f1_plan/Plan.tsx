import React from 'react'

export type PlanType = {
    _id: string

    // 1 mainComp
    main_1_0?: {
        minTitle?: string
        maxTitle?: string
    }

    // 2 bList
    black_list_1_0?: {
        list_1_0?: string[]
    }

    // 3 ifs list
    ifs_1_0?: {
        list_1_0?: string[]
    }

    // 94 global links
    urls_1_0?: {
        list_1_0?: {
            _id: string
            minTitle?: string
            maxTitle?: string
        }[]
    }

    // 4 plan list
    plans_1_0?: {
        list_1_0?: string[]

        // 6 add children plan
        children_s?: PlanType[]
    }

    // 5 repeat list
    functions_1_0?: {
        list_1_0?: string[]
    }

    other_1_0?: {}

    // 8 show plan
    isShow?: boolean
}

// 93 change item position in array
// 7 delete plan
// 9 save/load ls
// 10 save/load file

type PlanPropsType = {
    p: PlanType
    rerender: () => void
    marginLeft: number
}

const Plan: React.FC<PlanPropsType> = React.memo(
    ({ p, rerender, marginLeft }) => {
        return (
            <div style={{ display: 'flex' }}>
                {new Array(marginLeft).fill(undefined).map((v, i) => (
                    <div
                        key={p._id + i}
                        style={{
                            width: 16,
                            borderLeft: '1px solid #555599',
                        }}
                    />
                ))}
                <div style={{ border: '1px solid #993399', padding: 16 }}>
                    <div>
                        min title:
                        <input
                            value={p.main_1_0?.minTitle || ''}
                            onChange={(e) => {
                                p.main_1_0 = { ...p.main_1_0 }
                                p.main_1_0.minTitle = e.currentTarget.value
                                rerender()
                            }}
                        />
                    </div>
                    <div>
                        max title:
                        <textarea
                            value={p.main_1_0?.maxTitle || ''}
                            onChange={(e) => {
                                p.main_1_0 = { ...p.main_1_0 }
                                p.main_1_0.maxTitle = e.currentTarget.value
                                rerender()
                            }}
                        />
                    </div>
                </div>
            </div>
        )
    }
)

export default Plan
