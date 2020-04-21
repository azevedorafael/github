import React from 'react'
import {FiChevronRight} from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import {Title, Form, Repositories} from './styles'

const Dashboard:React.FC = () => {
  return(
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://avatars3.githubusercontent.com/u/15950775?s=460&u=565cd71ffc65afc8e83fb190214159756c7d8561&v=4"
          alt="Rafael Azevedo"/>
          <div>
            <strong>meu-repo</strong>
            <p>Nova descricaoedae faoefuhaioufhoarfoarfnhaçoirfnhçariofnh façirfhnçaorif</p>
          </div>

          <FiChevronRight size={20}/>
        </a>


        <a href="teste">
          <img src="https://avatars3.githubusercontent.com/u/15950775?s=460&u=565cd71ffc65afc8e83fb190214159756c7d8561&v=4"
          alt="Rafael Azevedo"/>
          <div>
            <strong>meu-repo</strong>
            <p>Nova descricaoedae faoefuhaioufhoarfoarfnhaçoirfnhçariofnh façirfhnçaorif</p>
          </div>

          <FiChevronRight size={20}/>
        </a>



        <a href="teste">
          <img src="https://avatars3.githubusercontent.com/u/15950775?s=460&u=565cd71ffc65afc8e83fb190214159756c7d8561&v=4"
          alt="Rafael Azevedo"/>
          <div>
            <strong>meu-repo</strong>
            <p>Nova descricaoedae faoefuhaioufhoarfoarfnhaçoirfnhçariofnh façirfhnçaorif</p>
          </div>

          <FiChevronRight size={20}/>
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard
