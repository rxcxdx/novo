import { isRouteErrorResponse, useRouteError } from 'react-router'
import axios from 'axios'
import { get } from 'lodash-es'

export function BoxError({ error }) {
  return (
    <div>
      <div>{get(error, 'name')}</div>
      <div>{get(error, 'message')}</div>
      {axios.isAxiosError(error) && (
        <div>
          <div>linha1: {get(error, 'response.data.tipo')}</div>
          <div>linha2: {get(error, 'response.data.motivo')}</div>
          <div>linha3: {get(error, 'response.status')}</div>
        </div>
      )}
    </div>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()
  if (isRouteErrorResponse(error)) {
    return <div>{error.data}</div>
  } else if (error instanceof Error) {
    return (
      <div className="w-xs bg-red-200 p-1">
        <BoxError error={error} />
      </div>
    )
  } else {
    return <div>Unknown Error</div>
  }
}
