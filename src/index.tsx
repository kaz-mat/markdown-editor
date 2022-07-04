import * as React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

const Header = styled.h1`
  color: red;
`

render(<Header>Markdown Editor</Header>, document.getElementById('app'))