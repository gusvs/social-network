import React, {Suspense} from 'react'


export const withSuspense = (Component) => {
  return (props) => {
      return <Suspense fallback={<div>Идёт загрузка...</div>}>
          <Component {...props} />
      </Suspense>
  }
}
