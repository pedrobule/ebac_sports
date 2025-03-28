import { Produto as ProdutoType } from '../App'
import ProdutoComponent from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos = [], isLoading } = useGetProdutosQuery()

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto: ProdutoType) => (
          <ProdutoComponent key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
