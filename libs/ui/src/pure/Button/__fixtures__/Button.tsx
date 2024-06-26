// Button.fixture.jsx
import { ReactElement } from 'react'

import {
  BaseButton,
  ButtonEmpty,
  ButtonGray,
  ButtonLight,
  ButtonOutlined,
  ButtonPrimary,
  ButtonSecondary,
  ButtonYellow,
} from '../index'

const examples = [
  {
    name: 'BaseButton',
    component: <BaseButton>BaseButton</BaseButton>,
  },
  {
    name: 'ButtonPrimary',
    component: <ButtonPrimary>ButtonPrimary</ButtonPrimary>,
  },
  {
    name: 'ButtonLight',
    component: <ButtonLight>ButtonLight</ButtonLight>,
  },
  {
    name: 'ButtonGray',
    component: <ButtonGray>ButtonGray</ButtonGray>,
  },
  {
    name: 'ButtonSecondary',
    component: <ButtonSecondary>ButtonSecondary</ButtonSecondary>,
  },
  {
    name: 'ButtonOutlined',
    component: <ButtonOutlined>ButtonOutlined</ButtonOutlined>,
  },
  {
    name: 'ButtonYellow',
    component: <ButtonYellow>ButtonYellow</ButtonYellow>,
  },
  {
    name: 'ButtonEmpty',
    component: <ButtonEmpty>ButtonEmpty</ButtonEmpty>,
  },
  {
    name: 'ButtonYellow',
    component: <ButtonYellow>ButtonYellow</ButtonYellow>,
  },
]

export default examples.reduce<{ [name: string]: ReactElement }>((acc, { name, component }) => {
  acc[name] = component
  return acc
}, {})
