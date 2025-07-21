import Geral from './Geral'
import Roteador from './Roteador'
import { App } from 'antd';

export default function Main() {
  return (
    <div>
      
      <Geral />      
      
      <App notification={{ placement: 'topLeft', duration: 1}}>
        <Roteador />
      </App>

      <div style={{ marginTop: '100px' }}>rodapé</div>

    </div>
  )
}