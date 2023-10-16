import { createContext} from 'react'
import Student from '../nabar/Student';

const Store = createContext();

function StoreData(){
    return(
        <>
          <Store.Provider>
            <Student />
          </Store.Provider>
        </>
    )
}

export default Store