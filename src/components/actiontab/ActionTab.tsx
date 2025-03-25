'use client'

import { Search } from "@/components/search/Search"
import { Filter } from "@/components/filter/Filter"
import { useState } from "react"
import { actions } from "@/constants/constants"
import styles from "@/components/actiontab/ActionTab.module.css"

export const ActionTab = () => {
    const [ actionArray, setActionArray ] = useState(actions)
    const [ currentActionActive, setCurrentActionActive ] = useState<string>("search")

    function handleAction(actionName: string) {
        if(actionName === currentActionActive) return

        let tempActionArray = [ ...actionArray];
        if(actionName === "search"){
        tempActionArray[0].active = true
        tempActionArray[1].active = false
        }else {
        tempActionArray[0].active = false
        tempActionArray[1].active = true
        }

        setActionArray(tempActionArray)
        setCurrentActionActive(actionName)
  }
    return (
        <div className={styles.action_container}>
        <div className={styles.action_buttons_container}>
          {
            actionArray.map(action => {
              const classes = [styles.action_buttons]

              if(action.active) classes.push(styles.active)

              return (
                <button className={classes.join(" ")} onClick={() => handleAction(action.name)}>
                  <img src={action.icon} alt={action.name} />
                </button>
              )
            })
          }
        </div>
        <div className={styles.action_result}>
          {
            currentActionActive === "search"
              ? <Search />
              : <Filter />
          }
        </div>
      </div>
    )
}