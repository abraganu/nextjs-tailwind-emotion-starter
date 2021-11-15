import styled from '@emotion/styled'
import tw from 'twin.macro'

export const CardWrapper = styled.div`${tw`border-black border-2 border-radius[15px]`}` // esta es otra forma usando styled de emotion

export const CardHeader = tw.div`bg-black opacity-10 text-green-200 p-4` // esta es una forma solo usando tw

export const CardBody = tw.div`p-4`